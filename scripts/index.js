const container = document.getElementById("cat-container");

// Получаем текущего пользователя
const loggedInUser = localStorage.getItem('loggedInUser');
if (!loggedInUser) {
  alert('Вы не авторизованы!');
  window.location.href = 'login.html'; // Перенаправляем на страницу входа
}

// Получаем котов текущего пользователя из localStorage
let cats = JSON.parse(localStorage.getItem(`${loggedInUser}_cats`)) || [];

// Функция отрисовки котов
function renderCats() {
  container.innerHTML = ""; // Очищаем контейнер
  cats.forEach((cat, index) => {
    const catCard = document.createElement("div");
    catCard.classList.add("cat-card");
    catCard.innerHTML = `
      <h4>${cat.name}</h4>
      <p>${cat.breed}</p>
      <img src="${cat.image}" alt="Кот: ${cat.name}">
      <button class="view-btn" data-index="${index}">Просмотр</button>
      <button class="delete-btn" data-index="${index}">Удалить</button>
    `;
    container.appendChild(catCard);
  });
}

// Обработчик кликов на кнопки (просмотр и удаление кота)
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-btn")) {
    const index = e.target.getAttribute("data-index");
    // Сохраняем текущего кота в localStorage
    localStorage.setItem("currentCat", JSON.stringify(cats[index]));
    // Переходим на страницу профиля кота
    window.location.href = "cat_profile.html";
  }

  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.getAttribute("data-index");
    // Удаляем кота из массива
    cats.splice(index, 1);
    localStorage.setItem(`${loggedInUser}_cats`, JSON.stringify(cats)); // Обновляем localStorage
    renderCats(); // Перерисовываем список котов
  }
});

// Первоначальная отрисовка котов
renderCats();
