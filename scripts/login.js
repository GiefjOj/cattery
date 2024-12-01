const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value.trim();
    const loginPassword = document.getElementById('loginPassword').value;

    // Получаем пароль для пользователя из localStorage
    const storedPassword = localStorage.getItem(loginUsername);

    // Если пользователь найден и пароли совпадают
    if (storedPassword && storedPassword === loginPassword) {
        localStorage.setItem('loggedInUser', loginUsername); // Сохраняем текущего пользователя
        window.location.href = 'index_2.html'; // Перенаправление
    } else {
        alert('Неверное имя пользователя или пароль!');
    }
});
