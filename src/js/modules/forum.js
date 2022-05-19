import {forumFuture} from "../data/forumData";
import {forumPast} from '../data/forumData';

function forum(){
    
    function gettingData(){
        // Находим обёртки
        const forumFut = document.querySelector('.forum__future')
        const forumPas = document.querySelector('.forum__past');

        // Вызыв функций с данными
        createForum(forumFuture, forumFut);
        createForum(forumPast, forumPas);
    }
    gettingData();

    function createForum(data, forumFut){
        const forum = forumFut
        const wrapper = data.map(({photo, name, post, about, topic, date, number}) => {
            
            // Cоздаем контейнер 
            const div = document.createElement('div');

            // Добовляем класс
            div.classList.add('forum__wrapper');

            // Вставляем наши данные
            div.innerHTML = 
            `
            <div class="forum__information">
                <div class="forum__photo">
                    <img src=${photo} alt="people">
                </div>
                    <div class="forum__data">
                        <span class="forum__name">${name}</span>
                        <p class="forum__post">${post}</p>
                    </div>
                </div>
                <div class="forum__place">
                    <div class="forum__description">
                        <span class="forum__about">${about}</span>
                        <p class="forum__topic">${topic}</p>
                    </div>
                    <div tabindex='0' class="forum__time">
                        <span class="forum__date">${date}</span>
                        <p class="forum__number">${number}</p>
                    </div>
                </div>
            </div>       
            `;

            // Отправляем верстку 
            forum.appendChild(div);
        });
    }
    const forum = document.querySelectorAll('[data-forum]'),
          buttons = document.querySelectorAll('.forum__button');

    function deleteForum(i){
        
        // i - Это аргумент который приходит сначало с 77 строки, а после при нажатий на buttons

        // У всех оберток будет none, кроме i
        forum.forEach(item => {
            item.style.display = 'none';
        });

        // У всех кнопок будет #5c5c5c, кроме i
        buttons.forEach(item => {
            item.style.color = '#5c5c5c';
        })

        forum[i].style.display = 'block';
        buttons[i].style.color = '#da4533';
    }

    deleteForum(1);

    function condition(e){
        // Пойск атрибута
        const attribute = e.target.closest('[data-button]');
        // Пойск цифры
        const number = attribute.getAttribute('data-button');
        
        deleteForum(number);
    }

    buttons.forEach(button => {

       // При нажатий на Enter, будет вызыватся функция с аргументом e
        button.addEventListener('keydown', function(e){
            if(e.code === 'Enter'){
                condition(e);
            }
        });

        // При нажатий на кнопку мыши, будет вызыватся функция с аргументом e
        button.addEventListener('click', function(e){
            condition(e);
        });

    })
}

export default forum;