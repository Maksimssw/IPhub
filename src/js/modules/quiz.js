function quiz(){
    const back = document.querySelector('.services__back'),
          further = document.querySelector('.services__further'),
          number = document.querySelector('.quiz__number span'),
          answer = document.querySelectorAll('.quiz__item'),
          questions = document.querySelectorAll('.quiz__questions');

    let scale = 1;

    // Провека scale на число
    function deleteBack(){
        if(scale === 1){
            back.style.display = 'none';
        } else{
            back.style.display = 'block';
        }
    }

    deleteBack();

    // Добовляем атрибуты к вопросам
    for(let i = 0; i <= questions.length; i++){
        try{
            questions[i].setAttribute('data-questions', i);
        } catch{}
    } 

    // У всех блоков none кроме scale
    function hideQuestions(){
        questions.forEach(question => {
            question.style.display = 'none';
        })
        questions[scale - 1].style.display = 'block';
    }

    hideQuestions();

    // Добовлям атрибуты к ответам
    for(let i = 0; i <= answer.length; i++){
        try{
            answer[i].setAttribute('data-list', i);
        } catch{}
    } 

    // Cтили для ответа
    function buttonStyle(num, attribute){

        // Пойск контейнера в котором был пройзведен клик
        const wrapper = attribute.closest('.quiz__questions');
        
        // Пойск всех ответов в контейнере 
        const wrapperAnswers = wrapper.querySelectorAll(".quiz__questions .quiz__item");

        // Пойск одного ответа 
        const btn = wrapper.querySelector(`[data-list="${num}"]`)


        wrapperAnswers.forEach(item => {
            item.style.background = 'rgba(255,255,255,.05)';
        });

        btn.style.background = '#da4533';
    }

    // Увеличить scale на 1 ед
    function plusNumber(){
        if(scale == 8){
            return;
        } else{
            scale++;
            number.innerHTML = `${scale}`;
        }
    }

    // Уменьшить scale на 1 ед
    function minusNumber(){
        if(scale == 1){
            return;
        } else{
            scale--;
            number.innerHTML = `${scale}`;
        }
        deleteBack();
    }

    // При нажатий сброс и активация функций
    back.addEventListener('click', function(e){
        e.preventDefault();
        minusNumber();
        hideQuestions();
    });

    // При нажатий сброс и активация функций
    further.addEventListener('click', function(e){
        e.preventDefault();
        plusNumber();
        hideQuestions();
        deleteBack();
    });

    function condition(e){
        const attribute = e.target.closest('.quiz__item');
        const answer = e.target.closest('.quiz__questions [data-list]');   
            
        // Пойск цифры атрибута
        const number = answer.getAttribute('data-list'); 

        // Передача aтрибутов
        buttonStyle(number, attribute);
    }

    // Пойск по клику атрибута ответа
    window.addEventListener('click', function(e){
        if(e.target.closest('.quiz__item')){
            condition(e);
        }
    })

    answer.forEach(item => {
        item.addEventListener('keydown', function(e){
            if(e.code === 'Enter'){
                condition(e);
            }
        });
    })

}

export default  quiz;