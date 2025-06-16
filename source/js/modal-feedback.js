const modal = document.querySelector('.modal-feedback');
const modalWindow = document.querySelector('.modal-feedback__wrapper');
const closeButton = modal.querySelector('.modal-feedback__close-button');
const modalLink = document.querySelector('.about__button');

const openModal = () => {
  modal.classList.add('opened');
  modal.setAttribute('tabindex', '-1');
  modal.focus();
};

const closeModal = () => {
  modal.classList.remove('opened');
  modal.removeAttribute('tabindex', '-1');
};

closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (modal.classList.contains('opened')) {
    const isClickInsideModal = modalWindow.contains(e.target);

    if (!isClickInsideModal) {
      modal.classList.remove('opened');
    }
  }
});

modalLink.addEventListener('click', openModal);

