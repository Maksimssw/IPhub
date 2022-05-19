import {cardDiamonds, cardAll, cardCube, cardСircles} from "../data/cardData";

function card(){

    const cardWrapperAll = document.querySelector('.card-all'),
          cardWrapperDiamonds = document.querySelector('.card-all_diamonds'),
          cardWrapperCube = document.querySelector('.card-all_cube'),
          cardWrapperCircles = document.querySelector('.card-all_circles');
        
    // Создание карточки
    function creatureCard(wrapper, card){
        const list = card.map(({img, description}) => {
            const li = document.createElement('li');

            li.classList.add('card-all__list');
            li.setAttribute('tabindex', 0);

            li.innerHTML = 
            `
            <div class="arrow arrow_card">
                <div class="arrow__stick"></div>
            </div>
            <div class="card-signs">
                <div class="card-signs__text">Товарные знаки</div>
                <div class="card-signs__design">Дизайн</div>
                <div class="card-signs__points">...</div>
            </div>
            <div class="card-all__geoicon"><img src=${img} alt="GeoIcon"></div>
            <p class="card-all__title">Товарные знаки</p>
            <p class="card-all__description">${description}</p>
        `;

        wrapper.appendChild(li);
        }); 
    }

    creatureCard(cardWrapperAll, cardAll);
    creatureCard(cardWrapperAll, cardDiamonds);
    creatureCard(cardWrapperAll, cardCube);
    creatureCard(cardWrapperAll, cardСircles);

    creatureCard(cardWrapperDiamonds, cardDiamonds);
    creatureCard(cardWrapperCube, cardCube);
    creatureCard(cardWrapperCircles, cardСircles)

    const wrapperAll = document.querySelectorAll('[data-card]'),
          buttons = document.querySelectorAll('.categories__list');

    // Создание атрибута для каждой кнопки
    for(let i = 0;i <= buttons.length; i++){
        try{
            buttons[i].setAttribute('data-button', i);
        } catch{}
    }

    // Удаление всех карточек кроме i
    function deleteCards(i){
        wrapperAll.forEach(item => {
            item.style.display = 'none';
        });

        wrapperAll[i].style.display = 'grid';
    }

    function styleButton(i){
        buttons.forEach(button => {
            button.style.color = '#8a8a8a';
            button.style.background = 'rgba(255, 255, 255, 0.05)';
        })

        buttons[i].style.color = '#fff';
        buttons[i].style.background = 'rgba(255, 255, 255, 0.15)';
    }

    styleButton(0);
    deleteCards(0);

    function creatureAttribute(e, att){
        const attribute = e.target.closest(`[${att}]`);
        const number = attribute.getAttribute(`${att}`);

        deleteCards(number);   
        styleButton(number);       
    }

    buttons.forEach(button => {
        button.addEventListener('click', function(e){
            creatureAttribute(e ,'data-button');     
        });
    })

    const select = document.querySelector('.select'),
          selectImg = select.querySelector('img'),
          selectText = select.querySelector('p'),
          selectList = document.querySelector('.select__list'),
          selectItem = document.querySelectorAll('.select__item');

    // Создание атрибутов для каждого item
    for(let i = 0; i <= selectItem.length; i++){
        selectItem.forEach(item => {
            item.setAttribute('tabindex', 0);
        });
        try{
            selectItem[i].setAttribute('data-select', i);
        }catch{}
    }


    // Добавить классы (открыть)
    function showSelect(){
        selectImg.classList.add('show');
        selectList.classList.add('show');
    }

    // Удалить классы (закрыть)
    function hiddenSelect(){
        selectImg.classList.remove('show');
        selectList.classList.remove('show');
    }

    // Bлок либо закрывается, либо открывается
    function condition(){
        if(selectList.classList.contains('show')){
            hiddenSelect();
        } else{
            showSelect();
        }
    }

    // При нажатий на кнопку активация функций
    select.addEventListener('click', condition);

    // При нажатий на Enter активация фунций
    select.addEventListener('keydown', function(e){
        if(e.code === 'Enter'){
            condition();
        }
    });

    function changingText(block){
        const text = block.innerText
        selectText.innerHTML = `
            ${text}
        `
    }

    function activation(e){
        changingText(e.target);
        creatureAttribute(e, 'data-select');
    }

    //При нажатий на кнопку активация функций
    selectList.addEventListener('click', function(e){
        activation(e);
    });

    // При нажатий на Enter активация фунций
    selectList.addEventListener('keydown', function(e){
        if(e.code === 'Enter'){
            activation(e);
        }
    });
}

export default card;