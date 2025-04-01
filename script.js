// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Scroll smoothly to the section
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  function generateAIResponse(userMessage) {
    const responses = {
        'hi': "Hello! How can I help you today?",
        'hello': "Hi there! What would you like to know?",
        'how are you': "I'm doing great, thanks for asking!",
        'what can you do': "I can help answer questions and provide information.",
        'help': "Sure, I'm here to assist you. What do you need help with?",
        'default': "Interesting question! I'm processing your request."
    };

    // Convert to lowercase for matching
    const lowercaseMessage = userMessage.toLowerCase().trim();

    // Check for specific responses
    for (let key in responses) {
        if (lowercaseMessage.includes(key)) {
            return responses[key];
        }
    }

    // Return default response if no match
    return responses['default'];
}

  // Get DOM elements
  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

 // Function to add a message to the chat
function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${type}-message`);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    
    // Auto scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message when button is clicked
sendBtn.addEventListener('click', sendMessage);

// Send message when Enter key is pressed
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        // Add user message
        addMessage(message, 'user');
        
        // Generate and add AI response
        const aiResponse = generateAIResponse(message);
        setTimeout(() => {
            addMessage(aiResponse, 'ai');
        }, 500);
        
        // Clear input
        userInput.value = '';
    }
}



