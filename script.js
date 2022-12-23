'use strict';
const btnsShowModal = document.querySelectorAll('.show-modal')
const btnCloseModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsShowModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)