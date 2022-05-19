import infoData from "../data/infoData";

function info(){

    function createInfo(data){
        const wrapper = document.querySelector('.info__list');
        
        const create = data.map(({heading,description}) => {
            const div = document.createElement('li');

            div.classList.add('info__item');
            
            div.innerHTML = `
            <div tabindex="0" class="info__header">
                <div class="card-signs">
                    <div class="card-signs__text">Товарные знаки</div>
                    <div class="card-signs__design">Дизайн</div>
                </div>
                <p class="info__heading">${heading}</p>
                <img class="" src="icons/arrow_red.svg" alt="arrow">
            </div>
            <p class="info__description">
                ${description}
            </p> `;

            wrapper.appendChild(div);
        });
    }

    createInfo(infoData);

    const infoItem = document.querySelectorAll('.info__item');

    for(let i = 0; i <= infoItem.length; i++){
        try{
            infoItem[i].setAttribute('data-info', i);
        } catch{}
    }

    // Открытие или закрытие описания
    function description(i){
        const infoDescription = infoItem[i].querySelector('.info__description'),
              infoArrow = infoItem[i].querySelector('img');

        infoDescription.classList.toggle('show');
        infoArrow.classList.toggle('show');
    }

    infoItem.forEach(item => {

        // При клике, пойск цифры по атрибуту и активация функций(Открыть || Закрыть)
        item.addEventListener('click', function(e){
            const number = item.getAttribute('data-info');

            description(number);
        }); 

        item.addEventListener('keydown', function(e){
            if(e.code === 'Enter'){
                const number = item.getAttribute('data-info');

                description(number);
            }
        });
    })
}   

export default info;