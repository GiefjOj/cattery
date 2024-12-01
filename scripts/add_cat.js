document.getElementById("add-cat-form").addEventListener("submit", function(e) {
  e.preventDefault(); // предотвращаем отправку формы

  // Получаем текущего пользователя из localStorage
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    alert('Вы не авторизованы!');
    window.location.href = 'login.html'; // Можно также перенаправить на страницу входа
    return;
  }

  // Получаем данные формы
  const catName = document.getElementById("cat-name").value.trim();
  const catBreed = document.getElementById("cat-breed").value;
  const catImage = document.querySelector('input[name="catImage"]:checked')?.value;

  // Проверка на пустое имя кота или отсутствие выбора изображения
  if (!catName || !catImage) {
    alert('Пожалуйста, заполните все поля!');
    return;
  }

  // Создаем объект питомца
  const newCat = {
    name: catName,
    breed: catBreed,
    image: catImage
  };

  // Получаем список котов текущего пользователя из localStorage
  let userCats = JSON.parse(localStorage.getItem(`${loggedInUser}_cats`)) || [];

  // Добавляем нового кота в список
  userCats.push(newCat);

  // Сохраняем обновленный список в localStorage
  localStorage.setItem(`${loggedInUser}_cats`, JSON.stringify(userCats));

  // Перенаправляем на страницу питомника
  window.location.href = "index_2.html";
});

