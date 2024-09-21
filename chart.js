document.addEventListener("DOMContentLoaded", () => {
    const chatContainer = document.querySelector(".chat-container");
    const chatClose = document.getElementById("chat-close");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const messages = document.getElementById("messages");

    // Toggle chat window
    chatContainer.style.display = 'flex'; // Show chat by default, you can toggle this as needed

    chatClose.addEventListener("click", () => {
        chatContainer.style.display = chatContainer.style.display === 'none' ? 'flex' : 'none';
    });

    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const userMessage = chatInput.value.trim();

        if (userMessage) {
            addMessage(userMessage, 'user');
            chatInput.value = '';

            // Send the message to the server and get a response
            fetch('chat.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `message=${encodeURIComponent(userMessage)}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.reply) {
                    addMessage(data.reply, 'bot');
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }
});
