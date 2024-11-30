'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const addHidden = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const removeHidden = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', removeHidden);

btnCloseModal.addEventListener('click', addHidden);

overlay.addEventListener('click', addHidden);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') addHidden();
});
