import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

function slider({container, items, items1006, items756, items456, items0}){
    try{
        const slider = tns({
            container: container,
            slideBy: 'page',
            autoplay: false,
            nav: false,
            controlsPosition: "botton",
            controlsText: '  ',
            speed: 500,
            responsive: {
                0: {
                    items: items0,
                },
                456: {
                    items: items456,
                },
                756:{
                    items: items756,
                },
                1006: {
                    items: items1006
                },
                1400:{
                    items: items
                }
            },
            items: items
        });
    } catch{}
}

export default slider;