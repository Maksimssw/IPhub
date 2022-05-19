import caseData from "../data/caseData";

function createCase(){
    const wrapper = document.querySelector('.case-all__list');

    function createCaseItem(wrapper, data){
        const container = data.map(({img, heading, description}) => {
            const div = document.createElement('div');
            div.classList.add('case-all__item', 'wow', 'animate__fadeInUp', 'animate__animated');
            div.setAttribute('tabindex', 0);

            div.innerHTML = `
            <div class="arrow arrow_case">
                <div class="arrow__stick"></div>
            </div>
            <div class="case-all__company">
                <div class="card-signs">
                    <div class="card-signs__text">Товарные знаки</div>
                    <div class="card-signs__design">Дизайн</div>
                    <div class="card-signs__points">...</div>
                </div>
                <img src=${img} alt="brand">
            </div>
            <div class="case-all__text">
                <p class="case-all__heading">${heading}</p>
                <p class="case-all__subtitle">${description}</p>
            </div>
            `;

            wrapper.appendChild(div);
        });
    }

    createCaseItem(wrapper, caseData);
}

export default createCase;