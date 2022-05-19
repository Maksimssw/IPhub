function model(){
    const buttons = document.querySelectorAll('.consultation'),
          model = document.querySelector('.model'),
          modelClose = document.querySelector('.model__close');
    
    function condition(e){
        // Удалить класс при условий
        if(model.classList.contains('.activy')){
            closeModel();
        } else{
            // Добавить класс
            model.classList.add('activy');

            // Неподвижное состояние
            document.body.style.overflow = 'hidden';
        }
    }

    buttons.forEach(button => {
        // При нажатий активация функций для добавлния или удаления класса
        button.addEventListener('click', function(e){
            condition();
        });

        // Активация при нажатий на Enter
        button.addEventListener('keydown', function(e){
            if(e.code === 'Enter'){
                condition();
            }
        });
    })

    // При вызове удаление класса
    function closeModel(){
        model.classList.remove('activy');
        document.body.style.overflow = '';
    }

    // Закрыть модельное окно
    modelClose.addEventListener('click', function(){
        closeModel();
    });

    // Закрыть модельное окно через кнопку Enter
    modelClose.addEventListener('keydown', function(e){
        if(e.code === 'Enter' || e.code === 'ESC'){
            closeModel();
        }
    })

    const messagesError = document.querySelectorAll('.model__error'),
          buttonSend = document.querySelector('.services_model'),
          checkbox = document.querySelector('.model__checkbox'),
          input = document.querySelectorAll('.model__input'),
          modelMasseg = document.querySelector('.model-message'),
          closeModelMasseg = document.querySelector('.model-message__wrapper_message'),
          fake = document.querySelector('.model__fake');

    // Скрыть все ошибки кроме i
    function hideMessageError(text, i){
        if(text === ''){
            messagesError[i].style.display = 'block';
        } else{
            messagesError[i].style.display = 'none';
        }
    }

    buttonSend.addEventListener('click', function(e){
        e.preventDefault();

        const name = input[0].value;
        const tel = input[1].value;
        const mail = input[2].value;
    
        hideMessageError(name, 0);
        hideMessageError(tel, 1);
        hideMessageError(mail, 2);

        const box = checkbox.checked;
        
        if(box === false){
            fake.style.border = '1px solid #da4533';
        }


        if(name !== '' && tel !== '' && mail !== '' && box === true){
            closeModel();
            modelMasseg.classList.add('activy');

            // Неподвижное состояние
            document.body.style.overflow = 'hidden';
        }
    });

    closeModelMasseg.addEventListener('click', function(){
        modelMasseg.classList.remove('activy');
        document.body.style.overflow = 'remove';
        document.body.style.overflow = '';
    });

    closeModelMasseg.addEventListener('keydown', function(e){
        if(e.code === 'Enter'){
            modelMasseg.classList.remove('remove');
            document.body.style.overflow = '';
        }
    });
}

export default model;