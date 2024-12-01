const loggedInUser = localStorage.getItem('loggedInUser');

if (!loggedInUser) {
    window.location.href = 'login.html'; // Перенаправление на страницу входа
} else {
    // Если пользователь вошел, отображаем его имя
    const usernameElement = document.getElementById('username');
    if (usernameElement) {
        usernameElement.textContent = loggedInUser;
    }
}

// Функция для выхода из системы
function logout() {
    // Удаляем информацию о текущем пользователе из localStorage
    localStorage.removeItem('loggedInUser');

    // Перенаправляем на страницу входа
    window.location.href = 'login.html'; // Перенаправление на страницу входа
}
