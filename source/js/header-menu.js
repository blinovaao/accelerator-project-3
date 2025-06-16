const headerNav = document.querySelector('.header-nav');

const headerList = document.querySelector('.header-nav__list');
const headerMenuLinks = document.querySelectorAll('.header-nav__list a');

const headerToggle = document.querySelector('.header-nav__button');

const setFocusable = (state) => {
  headerMenuLinks.forEach((link) => {
    if (state) {
      link.removeAttribute('tabindex');
      link.setAttribute('tabindex', '0');
    } else {
      link.removeAttribute('tabindex');
      link.setAttribute('tabindex', '-1');
    }
  });
};

const dropSubMenu = (e) => {
  if (e.target.classList.contains('header-nav__link--more')) {
    const opened = e.target.classList.contains('opened');

    const currentItem = e.target.closest('.header-nav__item--more');
    const mainLink = currentItem.querySelector('.header-nav__link--more');
    const subList = currentItem.querySelector('.header-nav__sublist');

    const openSubMenu = () => {
      mainLink.classList.add('opened');
      subList.classList.add('opened');
    };

    const closeSubMenu = () => {
      mainLink.classList.remove('opened');
      subList.classList.remove('opened');
    };

    if (opened) {
      closeSubMenu();
    } else {
      openSubMenu();
    }
  }
};

const openMenu = () => {
  headerNav.classList.add('header-nav--opened');

  headerToggle.classList.add('opened');
  headerToggle.setAttribute('aria-expanded', 'true');

  setTimeout(() => {
    headerList.classList.add('visible');
    headerList.setAttribute('aria-hidden', 'false');
  }, 300);

  setFocusable(true);

  document.querySelector('.overlay').classList.add('overlay--active');
};

const closeMenu = () => {
  headerNav.classList.remove('header-nav--opened');

  headerToggle.classList.remove('opened');
  headerToggle.setAttribute('aria-expanded', 'false');

  headerList.classList.remove('visible');
  headerList.setAttribute('aria-hidden', 'true');

  setFocusable(false);

  document.querySelector('.overlay').classList.remove('overlay--active');

  document.querySelectorAll('.header-nav__link--more.opened').forEach((link) => {
    link.classList.remove('opened');
  });

  document.querySelectorAll('.header-nav__sublist.opened').forEach((sublist) => {
    sublist.classList.remove('opened');
  });
};

const dropMainMenu = () => {
  const opened = headerNav.classList.contains('header-nav--opened');

  if (opened) {
    closeMenu();
  } else {
    openMenu();
  }
};

headerToggle.addEventListener('click', dropMainMenu);

headerList.addEventListener('click', dropSubMenu);

headerList.addEventListener('click', (e) => {
  if ((e.target.classList.contains('header-nav__link') || e.target.classList.contains('header-nav__sublink')) && !(e.target.classList.contains('header-nav__link--more'))) {
    closeMenu();
  }
});

headerList.addEventListener('keydown', (e) => {
  const target = e.target;

  if (target.classList.contains('header-nav__link--more') && (e.code === 'Space' || e.key === ' ')) {
    e.preventDefault();

    dropSubMenu({ target });
  }
});

document.addEventListener('click', (e) => {
  const isClickInsideMenu = headerNav.contains(e.target);

  if (!isClickInsideMenu) {
    closeMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    const isMenuOpen = headerNav.classList.contains('header-nav--opened');

    if (isMenuOpen) {
      closeMenu();
    }
  }
});
