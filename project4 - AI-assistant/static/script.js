// Глобальные переменные для хранения идентификатора чата и текущего активного чата
let chat_id = null;
let currentChatId = null;

// Функция для навигации на другую страницу
function navigateTo(page) {
    window.location.href = page; // Перенаправление на указанную страницу
}

// Функция для раскрытия/сворачивания панели с дополнительной информацией
function togglePanel({ id }) {
    const panel = document.getElementById(`${id}-panel`); // Получаем панель по ID
    const element = document.getElementById(id); // Получаем элемент, вызвавший функцию
    const arrow = element.querySelector("img[alt='arrow']"); // Ищем иконку стрелки

    // Изменяем направление стрелки при открытии/закрытии панели
    arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";

    if (!panel) return; // Если панели не существует, прерываем выполнение

    // Логика для панели с id "info", которая изменяет закругления
    if (id === "info") {
        const currentBorderRadius = window.getComputedStyle(element).borderRadius; // Получаем текущее значение border-radius
        element.style.borderRadius = currentBorderRadius === "0px" ? "0 0 20px 20px" : "0px"; // Изменяем значение border-radius
        panel.classList.toggle("active-last"); // Добавляем/удаляем класс для панели
        panel.style.borderRadius = "0 0 20px 20px"; // Изменяем значение border-radius
    }

    panel.classList.toggle("active"); // Добавляем/удаляем класс "active" для панели
}

// Выполняется после полной загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
    // Если баннер ещё не загружен, загружаем его
    if (!sessionStorage.getItem("uploaded")) {
        sessionStorage.setItem("uploaded", true); // Помечаем, что баннер был загружен
        showBanner(true); // Отображаем баннер
    }

    const url = window.location.pathname; // Получаем текущий URL страницы

    // Скрываем боковую панель на страницах аутентификации
    if (url.split("/").includes("auth")) {
        const sidebar = document.getElementById("sidebar");
        const sidebarMob = document.getElementById("mobile-nav-block");
        if (sidebar && sidebarMob) {
            sidebar.style.display = "none"; // Скрываем боковую панель для десктопа
            sidebarMob.style.display = "none"; // Скрываем боковую панель для мобильных устройств
        }
    }

    // Функция перемещения слайдера по боковой панели
    const moveSlider = (slider, position) => {
        slider.style.top = `${position.top}px`; // Устанавливаем позицию по оси Y
        slider.style.left = `${position.left}px`; // Устанавливаем позицию по оси X
    };

    // Функция для поиска иконки, соответствующей текущему URL
    const searchDesiredIcon = (icons) => {
        let resultIcon;
        const urlParts = url.split("/"); // Разделяем URL на части
        icons.forEach(icon => {
            if (urlParts.includes(icon.id !== "" && icon.id)) {
                resultIcon = icon; // Если URL соответствует иконке, сохраняем её
            } else if (urlParts.includes("") && icon.id === "home") {
                resultIcon = icon; // Если URL пустой, выбираем иконку "home"
            }
        });
        return resultIcon; // Возвращаем найденную иконку
    };

    // Настройка слайдера для десктопной версии
    const sidebarSlider = document.getElementById("sidebar-slider");
    const icons = document.querySelectorAll(".sidebar-icon"); // Все иконки в боковой панели
    const targetIcon = searchDesiredIcon(icons); // Ищем иконку для текущего URL
    if (targetIcon) {
        moveSlider(sidebarSlider, { top: targetIcon.offsetTop + 2, left: 0 }); // Перемещаем слайдер
        icons.forEach(icon => icon.addEventListener("click", () => moveSlider(sidebarSlider, { top: icon.offsetTop + 2, left: 0 }))); // Перемещаем слайдер при клике на иконку
    }

    // Настройка слайдера для мобильной версии
    const sidebarSliderMob = document.getElementById("sidebar-slider-mob");
    const iconsMob = document.querySelectorAll(".nav-item"); // Все иконки в мобильной версии боковой панели
    const targetIconMob = searchDesiredIcon(iconsMob); // Ищем иконку для текущего URL
    if (targetIconMob) {
        moveSlider(sidebarSliderMob, { top: 0, left: targetIconMob.offsetLeft - 10 }); // Перемещаем слайдер
        iconsMob.forEach(icon => icon.addEventListener("click", () => moveSlider(sidebarSliderMob, { top: 0, left: icon.offsetLeft - 10 }))); // Перемещаем слайдер при клике на иконку
    }
});

// Выполняется после полной загрузки DOM для проверки загрузки баннера
document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("uploaded")) {
        sessionStorage.setItem("uploaded", true); // Устанавливаем флаг, что баннер был загружен
        showBanner(true); // Отображаем баннер
    }
});

// Функция для перемещения слайдера и скрытия боковой панели при аутентификации
document.addEventListener("DOMContentLoaded", () => { 
    const sidebarSlider = document.getElementById("sidebar-slider"); // Получаем слайдер
    const icons = document.querySelectorAll(".sidebar-icon"); // Все иконки в боковой панели
    const url = window.location.pathname; // Текущий URL

    // Скрываем боковые панели, если находимся на странице аутентификации
    if (url.split("/").includes("auth")) {
        const sidebar = document.getElementById("sidebar");
        const sidebarMob = document.getElementById("mobile-nav-block");
        if (sidebar && sidebarMob) {
            sidebar.style.display = "none"; // Скрываем десктопную боковую панель
            sidebarMob.style.display = "none"; // Скрываем мобильную боковую панель
        }
    }

    const moveSlider = (targetIcon) => sidebarSlider.style.top = `${targetIcon.offsetTop + 2}px`; // Перемещаем слайдер

    const searchDesiredIcon = () => {
        let resultIcon;
        icons.forEach(icon => {
            const arr = url.split("/"); // Разделяем URL на части
            if (arr.includes(icon.id !== "" && icon.id)) resultIcon = icon; // Ищем соответствующую иконку
            else if (arr.includes("") && icon.id === "home") resultIcon = icon; // Если URL пуст, выбираем иконку "home"
        });
        return resultIcon; // Возвращаем найденную иконку
    }

    moveSlider(searchDesiredIcon()); // Перемещаем слайдер к соответствующей иконке
    icons.forEach(icon => icon.addEventListener("click", () => moveSlider(icon))); // Обновляем слайдер при клике
});

// Для мобильных устройств: настройка слайдера
document.addEventListener("DOMContentLoaded", () => { 
    const url = window.location.pathname; // Текущий URL
    const sidebarSliderMob = document.getElementById("sidebar-slider-mob"); // Мобильный слайдер
    const iconsMob = document.querySelectorAll(".nav-item"); // Все иконки в мобильной панели

    const moveSlider = (targetIcon) => sidebarSliderMob.style.left = `${targetIcon.offsetLeft - 10}px`; // Перемещаем слайдер

    const searchDesiredIcon = () => {
        let resultIcon;
        iconsMob.forEach(icon => {
            const arr = url.split("/"); // Разделяем URL на части
            if (arr.includes(icon.id !== "" && icon.id)) resultIcon = icon; // Ищем иконку
            else if (arr.includes("") && icon.id === "home") resultIcon = icon; // Выбираем иконку "home" если URL пустой
        });
        return resultIcon; // Возвращаем найденную иконку
    }

    moveSlider(searchDesiredIcon()); // Перемещаем слайдер
    iconsMob.forEach(icon => icon.addEventListener("click", () => moveSlider(icon))); // Обновляем слайдер при клике
});

// Функция для прокрутки чата к последнему сообщению
function scrollToBottom(id) {
    const chatBody = document.getElementById(id); // Получаем контейнер чата
    chatBody.scrollTo({
        top: chatBody.scrollHeight, // Прокручиваем чат к низу
        behavior: 'smooth' // Используем плавную прокрутку
    });
}

// Функция для создания нового сообщения в чате
function createMessage(parent, idMessage, type, text) {
    let id = `idForDynamicMessageLoadingElement${type}${idMessage}`; // Уникальный идентификатор для сообщения
    if (!idMessage || !document.getElementById(id)) {
        const messageElement = document.createElement('div'); // Создаем элемент div для сообщения
        messageElement.classList.add("message", `${type}-message`); // Добавляем классы для стилей сообщения
        if (!text && type === "assistant") {
            messageElement.classList.add("animated-dots"); // Если нет текста и это сообщение ассистента, добавляем анимацию
            messageElement.innerText = "";
        } else messageElement.innerText = text; // Добавляем текст сообщения
        messageElement.id = id; // Присваиваем ID сообщению
        parent.appendChild(messageElement); // Добавляем сообщение в контейнер
    } else {
        document.getElementById(id).innerText = text; // Если сообщение уже существует, обновляем текст
        document.getElementById(id).classList.remove("animated-dots"); // Убираем анимацию после получения ответа
    }
    scrollToBottom('chat-body'); // Прокручиваем чат вниз
}

// Обработка нажатия клавиши Enter для отправки сообщения
document.querySelectorAll("#search-input, #user-input").forEach((input) => {
    input.addEventListener("keyup", e => {
        e.preventDefault(); // Предотвращаем стандартное действие клавиши Enter
        if (e.key === "Enter") document.getElementById("message-icon").click(); // Если нажата клавиша Enter, кликаем по иконке отправки
    });
});

// Функция для выбора файла в чате
function downloadFileInChat() {
    document.getElementById('file-input').click(); // Имитируем нажатие на input для загрузки файла
}

// Функция для возврата к боковой панели на мобильной версии
function backToSidebar() {
    document.getElementById('chat-container').style.display = "none"; // Скрываем контейнер чата
    document.getElementById('chat-sidebar').style.display = "block"; // Показываем боковую панель
}

// Функция для отображения баннера
function showBanner(withCross) {
    if (document.getElementById('banner')) {
        document.getElementById('banner').style.display = 'flex'; // Если баннер уже существует, показываем его
    } else {
        const sidebar = document.getElementById('sidebar');
        if (!withCross) sidebar.style.zIndex = 0; // Если без крестика, изменяем z-index боковой панели
        const banner = document.createElement('div'); // Создаем элемент баннера
        banner.className = 'banner-container';
        banner.id = 'banner'; // Присваиваем ID баннеру
        banner.onclick = bannerClose; // Закрываем баннер при клике
        banner.innerHTML = `
            <div class="banner-banner">
                ${withCross ? '<img class="banner-cross" src="../static/images/cross.svg" onclick="bannerClose()" alt="cross">' : ''}
                <div class="banner-header">
                    <h1>Заголовок</h1>
                </div>
                <div class="banner-content">
                    <img src="https://i.vuzopedia.ru/storage/app/uploads/public/666/ee8/45e/666ee845eaa80540753677.jpg" alt="Banner Image" />
                    <div class="banner-content-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis dolores sed autem veniam, eius tempora dicta non quaerat sequi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aperiam sapiente, placeat amet molestiae, minima corporis rerum architecto nesciunt nihil officiis, delectus illum temporibus odio quibusdam asperiores labore ipsum. Laborum?</p>
                    </div>
                </div>
                <div class="banner-footer">
                    <button class="btn-pro">Кнопка</button>
                </div>
            </div>
        `;
        document.getElementById('banner-container').appendChild(banner); // Добавляем баннер в контейнер
        banner.style.display = 'flex'; // Показываем баннер
    }
}

// Функция для закрытия баннера
function bannerClose() {
    const banner = document.getElementById('banner'); // Получаем элемент баннера
    if (banner) {
        banner.remove(); // Удаляем баннер из DOM
        document.getElementById('sidebar').style.zIndex = 100; // Восстанавливаем z-index боковой панели
    }
}

// Функция для открытия чата при поиске
function showChat() {
    const searchText = document.getElementById('search-input').value.trim(); // Получаем текст запроса
    const initialFrame = document.getElementById("search-frame"); // Контейнер поиска
    const mainFrame = document.getElementById("chat-frame"); // Контейнер чата
    const chatBody = document.getElementById('chat-body'); // Контейнер сообщений чата
    const chatName = document.getElementById('chat-name-display'); // Имя чата

    if (!searchText) return; // Если текст запроса пустой, выходим из функции

    initialFrame.style.top = "0%"; // Скрываем поисковую панель
    initialFrame.style.opacity = "0"; // Плавно скрываем её
    mainFrame.style.display = 'block'; // Показываем контейнер чата

    setTimeout(() => {
        initialFrame.remove(); // Удаляем панель поиска
        mainFrame.style.opacity = "1"; // Показываем чат
        mainFrame.style.top = '0'; // Перемещаем чат на верх страницы
        chatName.innerText = searchText; // Устанавливаем текст в заголовок чата
    }, 600);

    createMessage(chatBody, null, "user", searchText); // Создаём сообщение от пользователя
    createMessage(chatBody, null, "assistant"); // Создаём анимацию сообщения от ассистента

    // Отправляем запрос на сервер для получения ответа
    fetch('/api/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: searchText }) // Отправляем запрос с текстом сообщения
    })
        .then(response => response.json()) // Получаем ответ от сервера
        .then(data => {
            if (data.chat_id) {
                sessionStorage.setItem('chat_id', data.chat_id); // Сохраняем chat_id в sessionStorage
                openChat(data.chat_id); // Открываем чат с полученным chat_id
            }
        });
}

// Функция для открытия чата с указанным chat_id
function openChat(chat_id) {
    document.getElementById('chat-id-display').innerText = `Chat ID: ${chat_id}`; // Отображаем ID чата
    currentChatId = chat_id; // Сохраняем текущий ID чата
    sessionStorage.setItem('chat_id', chat_id); // Сохраняем ID чата в sessionStorage
    loadChat(chat_id); // Загружаем историю сообщений чата
}

// Функция для открытия чата на мобильной версии
function selectChat(chat_id) {
    document.getElementById('chat-container').style.display = "flex"; // Показываем контейнер чата
    document.getElementById('chat-sidebar').style.display = "none"; // Скрываем боковую панель
    loadChat(chat_id); // Загружаем чат с указанным ID
}

// Функция для загрузки истории чата с сервера
function loadChat(chat_id) {
    currentChatId = chat_id; // Сохраняем текущий ID чата
    console.log(`Загружаем чат с chat_id: ${chat_id}`); // Логируем процесс загрузки чата
    fetch(`/api/chat/${chat_id}`) // Запрос на сервер для получения сообщений
        .then(response => response.json()) // Получаем данные чата
        .then(data => {
            console.log("Получены данные чата:", data); // Логируем данные чата
            const chatBody = document.getElementById('chat-body'); // Получаем контейнер сообщений
            chatBody.innerHTML = ''; // Очищаем контейнер сообщений
            data.messages.forEach(message => createMessage(chatBody, null, message.role, message.content)); // Добавляем каждое сообщение в чат
        })
        .catch(error => console.error('Ошибка при загрузке чата:', error)); // Ловим ошибки при загрузке чата
}

// Функция для отправки сообщения в чат
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim(); // Получаем текст сообщения
    const chatBody = document.getElementById('chat-body'); // Контейнер чата
    const idMessage = Math.random().toString(16).slice(2); // Генерируем уникальный идентификатор для сообщения

    if (!userInput) return; // Если сообщение пустое, выходим из функции

    createMessage(chatBody, idMessage, "user", userInput); // Создаём сообщение от пользователя
    createMessage(chatBody, idMessage, "assistant"); // Создаём анимацию сообщения от ассистента

    document.getElementById('user-input').value = ''; // Очищаем поле ввода

    if (userInput && currentChatId) {
        const data = { message: userInput, chat_id: currentChatId }; // Подготавливаем данные для отправки

        fetch('/api/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // Устанавливаем заголовки
            body: JSON.stringify(data) // Отправляем данные на сервер
        })
            .then(response => response.json()) // Получаем ответ от сервера
            .then(data => {
                createMessage(chatBody, idMessage, "user", userInput); // Отображаем сообщение пользователя
                createMessage(chatBody, idMessage, "assistant", data.reply); // Отображаем ответ ассистента
            })
            .catch(error => {
                console.error('Ошибка при отправке сообщения:', error); // Ловим ошибки при отправке сообщения
            });
    } else {
        console.error('Пожалуйста, введите сообщение и убедитесь, что chat_id существует.'); // Выводим ошибку, если chat_id отсутствует
    }
}

// Функция для сброса чата на поисковую строку
function resetToSearch() {
    sessionStorage.removeItem('chat_opened'); // Удаляем информацию о том, что чат был открыт
    sessionStorage.removeItem('chat_id'); // Удаляем chat_id
}

// При загрузке страницы проверяем, был ли открыт чат ранее
document.addEventListener('DOMContentLoaded', () => {
    const chatOpened = sessionStorage.getItem('chat_opened'); // Проверяем, был ли открыт чат
    const storedChatId = sessionStorage.getItem('chat_id'); // Получаем сохранённый chat_id

    if (chatOpened === 'true' && storedChatId) {
        openChat(storedChatId); // Если чат был открыт, загружаем его
    } else {
        resetToSearch(); // Если нет, сбрасываем интерфейс на поисковую строку
    }
});
