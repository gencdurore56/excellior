/* 
Filename: ComplexCode.js
Description: This is a complex code that implements a real-time chat application using JavaScript, HTML, and CSS. It utilizes WebSockets for bi-directional communication and provides features like online users, private messaging, and notifications.

Please note that this code is a simplified and summarized version, and you might need to adapt it to your own environment and specific requirements. It serves as a starting point or a reference for building a more comprehensive chat application.

Dependencies:
- HTML5
- CSS3
- JavaScript ES6
- WebSocket API

To execute this code, open it in a web browser that supports WebSocket API and utilize a suitable backend server for handling WebSocket connections.

*/

// Constants
const SERVER_URL = "ws://localhost:8080"; // WebSocket server URL

// Global Variables
let username = "";
let socket = null;

// DOM Elements
const loginForm = document.getElementById("login-form");
const chatbox = document.getElementById("chatbox");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const userlist = document.getElementById("user-list");

// Function to handle user login
function handleLogin(e) {
  e.preventDefault();
  const input = document.getElementById("username-input");
  username = input.value.trim();
  if (username === "") return;
  loginForm.style.display = "none";
  chatbox.style.display = "block";

  // Open WebSocket connection
  socket = new WebSocket(SERVER_URL);

  // Event: Connection open
  socket.addEventListener("open", () => {
    socket.send(JSON.stringify({ type: "login", username }));
  });

  // Event: Receive message
  socket.addEventListener("message", (event) => {
    const { type, data } = JSON.parse(event.data);
    switch (type) {
      case "message":
        handleMessage(data);
        break;
      case "userList":
        updateUserList(data);
        break;
      // Handle other message types
      default:
        break;
    }
  });

  // Event: Connection closed
  socket.addEventListener("close", () => {
    handleLogout();
  });
}

// Function to handle incoming messages
function handleMessage(data) {
  const { username, message, private } = data;

  // Create message element
  const messageElem = document.createElement("div");
  messageElem.classList.add("message");
  if (private) messageElem.classList.add("private");

  // Prepare message content
  let messageContent = `<strong>${username}: </strong>${message}`;
  if (private) messageContent = `<em>[Private]</em> ${messageContent}`;

  // Set message content
  messageElem.innerHTML = messageContent;

  // Append to chatbox
  chatbox.append(messageElem);

  // Scroll chatbox to bottom
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to update online user list
function updateUserList(userList) {
  userlist.innerHTML = "";
  userList.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.textContent = user;
    userlist.appendChild(userItem);
  });
}

// Function to handle message submission
function handleSendMessage(e) {
  e.preventDefault();
  const message = messageInput.value.trim();

  // Send message through WebSocket
  socket.send(JSON.stringify({ type: "message", message }));

  // Clear message input
  messageInput.value = "";
}

// Function to handle user logout
function handleLogout() {
  loginForm.style.display = "block";
  chatbox.style.display = "none";
  username = "";
  socket = null;
}

// Event: Submit login form
loginForm.addEventListener("submit", handleLogin);

// Event: Submit message form
messageForm.addEventListener("submit", handleSendMessage);