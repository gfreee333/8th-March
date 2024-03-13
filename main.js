function createPetals() {
    const numPetals = 140; // Количество лепестков
    const body = document.querySelector('body');

    for (let i = 0; i < numPetals; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal'); // Используем класс для первого типа лепестков
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.top = Math.random() * -100 + 'px';
        petal.style.animationDuration = Math.random() * 5 + 5 + 's';
        petal.style.animationDelay = (Math.random() * 5 + 1) + 's';
        body.appendChild(petal);
    }
}

function createPetals2() {
    const numPetals = 90; // Количество лепестков
    const body = document.querySelector('body');

    for (let i = 0; i < numPetals; i++) {
        const petal2 = document.createElement('div');
        petal2.classList.add('petal2'); // Используем класс для второго типа лепестков
        petal2.style.left = Math.random() * window.innerWidth + 'px';
        petal2.style.top = Math.random() * -100 + 'px';
        petal2.style.animationDuration = Math.random() * 5 + 5 + 's';
        petal2.style.animationDelay = (Math.random() * 5 + 1) + 's';
        body.appendChild(petal2);
    }
}

// Вызываем обе функции при загрузке страницы
window.onload = function() {
    createPetals();
    createPetals2();
};

document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const message = document.getElementById('message');

    message.addEventListener('click', function() {
        const newImage = document.createElement('img');
        newImage.src = 'Painters/list.png';
        newImage.alt = 'New Image';
        newImage.style.position = 'absolute';
        newImage.style.top = '50%';
        newImage.style.left = '50%';
        newImage.style.transform = 'translate(-50%, -50%)';
        newImage.style.width = 'auto'; // Устанавливаем ширину автоматически
        newImage.style.height = 'auto'; // Устанавливаем высоту автоматически
        newImage.style.maxWidth = '125%'; // Максимальная ширина изображения
        newImage.style.maxHeight = '320%'; // Максимальная высота изображения
        newImage.style.objectFit = 'cover'; // Позволяет изображению заполнить заданное пространство без изменения соотношения сторон
        newImage.style.overflow = 'auto'; // Добавляем прокрутку в случае необходимости

        const newText = document.createElement('div');
        newText.textContent = 'Держи пупсик, цветочков тебе перед сном' ; // Замените 'Your Text Here' на ваш текст
        newText.style.position = 'absolute';
        newText.style.top = '50%';
        newText.style.left = '50%';
        newText.style.transform = 'translate(-50%, -50%)';
        newText.style.fontSize = '13px'; // Размер текста
        newText.style.color = 'white'; // Цвет текста
        newText.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'; // Тень текста
        newText.style.maxWidth = '80%'; // Максимальная ширина текста
        newText.style.textAlign = 'center'; // Выравнивание текста по центру

        envelope.appendChild(newImage);
        envelope.appendChild(newText);
    });
});








