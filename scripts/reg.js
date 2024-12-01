const registrationForm = document.getElementById('registrationForm');

if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault(); // предотвращает отправку формы

        const username = document.getElementById('username').value.trim(); // Убираем пробелы
        const password = document.getElementById('password').value;

        // Проверка пустых полей
        if (!username || !password) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        // Проверка на существующего пользователя
        if (localStorage.getItem(username)) {
            alert('Пользователь с таким именем уже существует!');
            return;
        }

        // Сохранение в localStorage
        localStorage.setItem(username, password);
        localStorage.setItem('loggedInUser', username); // Сохраняем текущего пользователя

        // Перенаправление
        window.location.href = 'index_2.html'; // Перенаправление на другую страницу
    });
} else {
    console.log('Форма не найдена!');  // Это сообщение поможет найти проблему
}
