const hamburger = () => {
    const hamburger = document.querySelectorAll('.hamburger'),
          menu = document.querySelector('.menu');

    function openHamburger(){
        menu.classList.remove('menu_hidden');
        menu.classList.add('menu_active');
        hamburger.forEach(item => {
            item.classList.remove('hidden');
            item.classList.add('active');
        })
    }

    function closeHamburger(){
        menu.classList.remove('menu_active');
        menu.classList.add('menu_hidden');
        hamburger.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('active');
        })
    }

    function condition(){
        if(menu.classList.contains('menu_hidden')){
            openHamburger();
        } else if(menu.classList.contains('menu_active')){
            closeHamburger();
        }
    }

    hamburger.forEach(item => {
        item.addEventListener('click', function(){
            condition();
        });

        item.addEventListener('keydown', function(e){
            if(e.code === 'Enter'){
                condition();
            }
        });
    })
}

export default hamburger;