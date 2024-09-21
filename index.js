// Connect to WebSocket server
const socket = new WebSocket('ws://localhost:3000');

// Elements
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatBox = document.getElementById('chat-box');

// Event listener to handle sending messages
sendButton.addEventListener('click', function() {
    const message = messageInput.value;
    if (message) {
        socket.send(message); // Send message to server
        addMessage('You', message);
        messageInput.value = ''; // Clear the input field
    }
});

// Event listener for receiving messages
socket.addEventListener('message', function(event) {
    const message = event.data;
    addMessage('Server', message);
});

// Function to display messages in the chat box
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
}