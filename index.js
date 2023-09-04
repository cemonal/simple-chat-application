const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

const users = {};

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('new user', (username) => {
    users[socket.id] = username;
    io.emit('user joined', username);
    io.emit('active users', Object.keys(users).length);
  });

  socket.on('chat message', (msg) => {
    const senderName = users[socket.id] || 'Anonymous';
    io.emit('chat message', { sender: senderName, message: msg });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    const username = users[socket.id];
    if (username) {
      delete users[socket.id];
      io.emit('user left', username);
      io.emit('active users', Object.keys(users).length);
    }
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
