const faqList = document.querySelector('.faq__list');

faqList.addEventListener('click', (e) => {
  if (e.target.closest('.faq-question__toggle')) {
    const target = e.target.closest('.faq-question__toggle');
    const isOpen = target.classList.contains('faq-question__toggle--opened');

    if (isOpen) {
      target.classList.remove('faq-question__toggle--opened');
    } else {
      target.classList.add('faq-question__toggle--opened');
    }
  }
});
