// Получаем элементы
const openModalBtn = document.querySelector('.button-class'); // Кнопка "Order Service"
const modalOverlay = document.querySelector('.model-overlay'); // Оверлей модального окна
const closeModalBtn = document.querySelector('.model-btn'); // Кнопка закрытия в модальном окне

// Функция открытия модального окна
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('is-open'); // Добавляем класс, чтобы показать модальное окно
});

// Функция закрытия модального окна
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('is-open'); // Убираем класс, чтобы скрыть модальное окно
});

// Закрытие модального окна при клике вне окна
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('is-open');
    }
}); 

// Получение элементов
const openMenuBtn = document.querySelector('.btn-menu'); // Кнопка открытия меню
const closeMenuBtn = document.querySelector('.menu-btn'); // Кнопка закрытия меню
const mobileMenuOverlay = document.querySelector('.mob-menu-overlay');

// Открытие меню
openMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('is-open');
});

// Закрытие меню
closeMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('is-open');
});

// Закрытие при клике на фон
mobileMenuOverlay.addEventListener('click', (event) => {
    if (event.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('is-open');
    }
});