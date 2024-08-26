document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value;

    if (userInput.trim() !== "") {
        displayMessage("Usuario", userInput);
        generateResponse(userInput);
        document.getElementById("user-input").value = "";
    }
}

function displayMessage(sender, message) {
    const chatOutput = document.getElementById("chat-output");
    const messageElement = document.createElement("div");
    messageElement.className = sender.toLowerCase();
    messageElement.textContent = `${sender}: ${message}`;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function generateResponse(userInput) {
    let response = "Lo siento, no entiendo tu pregunta.";
    let saludar = ['hola', 'Hola', 'Buenos dias', 'buenos dias', 'Buenos días', 'buenos días'];
    let hora = ['¿Que hora es?', '¿que hora es?', 'que hora es?', 'me das la hora?'];

    // Ejemplo básico de respuestas
    if (saludar.includes(userInput)) {
        response = "Hola Cristian, en que puedo ayudarte?";
    } else if (hora.includes(userInput)) {
        response = `La hora actual es ${new Date().toLocaleTimeString()}.`;
    }
    setTimeout(() => {
        displayMessage("Suri", response);
    }, 500); // Simula un pequeño retraso en la respuesta
}
