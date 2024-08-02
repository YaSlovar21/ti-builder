import './tw.css';
import './index.css';
import './popup.css';



import './tw.css';
import './index.css';


import Popup from '../js/components/Popup';


/*
const popupMenu = new Popup('.popup-menu');
popupMenu.setEventListeners();

const navMobileButton = document.querySelector('.nav__mobile-icon');
navMobileButton.addEventListener('click', () => {
    popupMenu.open();
    console.log('111');
});
*/

const feedBackButton = document.querySelector('.feedback-button');
const feedbackForm = document.querySelector('.feedback-form');
const formCloseButton = feedbackForm.querySelector('.form-close-button');

function formOpen() {
    feedbackForm.classList.remove('hidden');
}

export function formClose() {
    feedbackForm.classList.add('hidden');
}

feedBackButton.addEventListener('click', ()=> {
    formOpen();
    console.log('333')
});

formCloseButton.addEventListener('click', ()=> {
    formClose();
});
