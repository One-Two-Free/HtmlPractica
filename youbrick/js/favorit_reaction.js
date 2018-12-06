let favouritesButton = document.querySelector('.favourites-button');
const classToggler = 'main-nav__item--big';

var onFavouritesClick = function onFavouritesClick(evt) {
  if (favouritesButton.classList.contains(classToggler)) {
    favouritesButton.classList.remove(classToggler);
    return;
  };

  favouritesButton.classList.add(classToggler);
}

favouritesButton.addEventListener('click', onFavouritesClick);






