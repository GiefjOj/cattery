// Получение данных текущего кота
const currentCat = JSON.parse(localStorage.getItem("currentCat"));

// Проверка на существование контейнера
const profileContainer = document.getElementById("cat-profile");

if (profileContainer) {
  if (currentCat && currentCat.name && currentCat.breed && currentCat.image) {
    // Отображаем данные кота, если они есть
    profileContainer.innerHTML = `
      <h4>${currentCat.name}</h4>
      <p><strong>Порода:</strong> ${currentCat.breed}</p>
      <img src="${currentCat.image}" alt="Кот: ${currentCat.name}">
    `;
  } else {
    // Если данные кота неполные или отсутствуют
    profileContainer.innerHTML = "<p>Данные о коте неполные. Вернитесь в питомник.</p>";
  }
} else {
  console.error('Элемент с id "cat-profile" не найден на странице.');
}
