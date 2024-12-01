const chatBox = document.getElementById("chat-box");
const inputMessage = document.getElementById("input-message");
const sendMessageButton = document.getElementById("send-message");

// Время (в миллисекундах), через которое чат очищается
const CLEAR_TIME_LIMIT = 5 * 60 * 1000; // 5 минут

// Функция для загрузки и отображения сообщений из localStorage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    const lastActivityTime = localStorage.getItem("lastActivityTime");

    // Проверка на истекшее время (5 минут)
    if (lastActivityTime && Date.now() - lastActivityTime > CLEAR_TIME_LIMIT) {
        // Если прошло больше 5 минут, очищаем чат
        localStorage.removeItem("chatMessages");
        localStorage.removeItem("lastActivityTime");
        messages.length = 0; // Очищаем локальную переменную сообщений
    }

    chatBox.innerHTML = ''; // Очищаем чат

    // Загружаем сообщения
    messages.forEach(message => {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${message.nickname}: ${message.text}`;
        chatBox.appendChild(messageElement);
    });

    // Прокручиваем чат до конца
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Функция для сохранения нового сообщения в localStorage
function saveMessage(nickname, messageText) {
    const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push({ nickname, text: messageText });
    localStorage.setItem("chatMessages", JSON.stringify(messages));

    // Обновляем время последней активности
    localStorage.setItem("lastActivityTime", Date.now().toString());
}

// Проверка, зарегистрирован ли пользователь
function checkRegistration() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        // Если пользователь не зарегистрирован, перенаправляем на страницу регистрации
        window.location.href = 'login.html';
    } else {
        // Если пользователь зарегистрирован, показываем чат
        loadMessages(); // Загружаем сообщения чата
    }
}

// Обработчик нажатия кнопки "Отправить"
sendMessageButton.addEventListener("click", () => {
    const message = inputMessage.value.trim();
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (message && loggedInUser) {
        saveMessage(loggedInUser, message); // Сохраняем сообщение с ником
        loadMessages(); // Обновляем чат
        inputMessage.value = ''; // Очищаем поле ввода
    } else {
        alert("Пожалуйста, зарегистрируйтесь, чтобы отправить сообщение.");
    }
});

// Загрузка сообщений и проверка регистрации при открытии страницы
checkRegistration();
