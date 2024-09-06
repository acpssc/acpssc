function displayUserMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerHTML = "<span class='message-sender'>You:</span> " + message;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function displayAIMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var aiMessage = document.createElement("div");
    aiMessage.className = "message ai";
    aiMessage.innerHTML = "<span class='message-sender'>AI:</span> " + message;
    chatBox.appendChild(aiMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value.trim();
    if (message === "") {
        return;
    }

    displayUserMessage(message);
    simulateAPICall(message).then(function(response) {
        displayAIMessage(response);
    });

    userInput.value = "";
}

function simulateAPICall(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var aiResponse = generateAIResponse();
            resolve(aiResponse);
        }, 1000);
    });
}

function generateAIResponse() {
    var responses = [
        "That's interesting!",
        "I'm not sure about that.",
        "Tell me more.",
        "I need to think about it.",
        "Let me check on that for you.",
        "Great question!",
        "I'm still learning."
    ];
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
