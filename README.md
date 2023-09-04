# Simple Chat Application

A simple real-time chat application built using Node.js and Socket.IO. Users can join the chat, send messages, and see the active user count in the chat room.

## Features

- Real-time messaging using Socket.IO
- Join the chat with a username
- See the active user count
- Basic error handling and user notifications

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/cemonal/simple-chat-application.git
   cd simple-chat-application
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

3. Open your web browser and go to type [http://localhost:3000](http://localhost:3000) to use the chat application.
   The chat application will be accessible in your browser. You can enter a username, join the chat, send messages, and see the active user count in real-time.

## How It Works

The application is built using Node.js and utilizes the Socket.IO library for real-time communication. Here's how some of the key methods work:

- `io.on('connection', (socket) => {...})`: This event is triggered whenever a new user connects to the chat. The user's unique socket ID is used to track their activity.

- `socket.on('new user', (username) => {...})`: When a new user joins the chat, their username is associated with their socket ID. This is used to identify users in the chat.

- `socket.on('chat message', (msg) => {...})`: This event is triggered when a user sends a chat message. The sender's name is identified using their socket ID, and the message is broadcast to all connected users.

- `socket.on('disconnect', () => {...})`: When a user disconnects from the chat, their username is removed from the list of active users.

## Contributing

Contributions are welcome! Feel free to submit issues, pull requests, or feedback in the GitHub repository.
