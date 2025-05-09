// МОДУЛЬ 7

// Отримати доступ до кнопки через айді

// const magicBtn = document.querySelector("#magic-btn");
//Створюємо змінну  magicBtn
//Ми звертаємось до нашого document викликпємо у ньго метод querySelector
// querySelector як аргумент передаємо рядок селектор якого ми хочемо отримати "#magic-btn"
// "#magic-btn" - # - означає що ми хочемо отримати рядок за id та magic-btn сам id який у нас в html коді
// console.log(magicBtn);
// Викликаємо змінну і отримуємо кнопку

// <ul> - отримаємо наш список але за класом
// <ul class="benefits-list">

// const navEl = document.querySelector(".benefits-list");
// Тут все те саме що і з кнопкою але щоб звернутись до назви класу ставимо крапку і назву класу .benefits-list
// console.log(navEl);

// Отримати дані за назвою тегу наприклад <ul>
// Тут все те саме що і з кнопкою але щоб звернутись до назви нашого тегу <ul> - передаємо як рядок
// const navEl = document.querySelector("ul");
// console.log(navEl);

//  <li class="benefits-item">
// const itemEl = document.querySelector("header-menu-item");
// benefits-item - якщо в нас цей список не один він знаходить перший і все далі шукати не буде
// console.log(itemEl);

// КОЛИ НАМ ТРЕБА ОТРИМАТИ БАГАТО ЕЛЕМЕНТІВ

// <a class="nav-link" href="">Portfolio</a> - тут ми звертаємось до наших посилань яких у нас багато
// І тому використовуємо метод querySelectorAll далі як
// Аргумент звертаємось через крапку до нашого .nav-link
// const navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks);
