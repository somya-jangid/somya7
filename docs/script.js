document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.send-button');
    const inputField = document.querySelector('.input-field input');

    sendButton.addEventListener('click', function() {
        const messageText = inputField.value;
        if (messageText.trim() !== '') {
            const userMessage = document.createElement('div');
            userMessage.classList.add('message', 'user-message');
            userMessage.innerHTML = `<p>${messageText}</p>`;
            document.querySelector('.chat-window').appendChild(userMessage);
            inputField.value = '';
        }
    });

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});