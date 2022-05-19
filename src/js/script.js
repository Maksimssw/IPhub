import hamburger from './modules/hamburger';
import slider from './modules/slider';
import quiz from './modules/quiz';
import forum from './modules/forum';
import model from './modules/model';
import card from './modules/card';
import createCase from './modules/createCase' 
import info from './modules/info';

window.addEventListener('DOMContentLoaded', function(){
    hamburger();
    try{
        quiz();
        slider({
            container: '.team__slider',
            items1006: 3,
            items: 4,
            items756: 3,
            items456: 2,
            items0: 1
        });
        forum();
    } catch{}
    try{
        createCase();
    } catch{}
    try{
        card();
    } catch{}

    try{
        slider({
            container: '.resources__slider',
            items: 4,
            items1006: 3,
            items756: 3,
            items456: 2,
            items0: 1
        });
    }catch{}
    try{
        slider({
            container: '.company__slider',
            items: 2,
            items1006: 2,
            items756: 2,
            items456: 2,
            items0: 1
        });
        slider({
            container: '.company__patent',
            items: 2,
            items1006: 2,
            items756: 2,
            items456: 2,
            items0: 1
        });
    } catch{}
    try{
        slider({
            container: '.cases__slider',
            items: 2,
            items1006: 2,
            items756: 1,
            items456: 1,
            items0: 1
        });
    }catch{}
    try{
        info();
    } catch{}

    model();
});