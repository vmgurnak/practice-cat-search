// Version without libraries

import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createMarkup, createMarkupInfoCat } from './markup';

// Object with elements
const elements = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

// Call fetchBreeds(), creating markup for select.breed-select
fetchBreeds()
  .then(data => {
    console.log(data);
    errHidden();
    loaderHidden();
    elements.breedSelect.classList.replace('js-hidden', 'js-show');
    //   Creating markup
    elements.breedSelect.innerHTML += createMarkup(data);
  })
  .catch(error => {
    errShow();
    loaderHidden();
    elements.breedSelect.classList.replace('js-show', 'js-hidden');
  });

// Listener on select.breed-select, 'change' event
elements.breedSelect.addEventListener('change', handlerSearch);

// Callback function for listener
function handlerSearch(evt) {
  console.log(evt.currentTarget.value);
  const breedId = evt.currentTarget.value;

  loaderSow();
  elements.catInfo.classList.replace('js-show', 'js-hidden');

  fetchCatByBreed(breedId)
    .then(data => {
      console.log(data);
      elements.catInfo.classList.replace('js-hidden', 'js-show');
      loaderHidden();
      errHidden();
      //   Creating markup
      elements.catInfo.innerHTML = createMarkupInfoCat(data);
    })
    .catch(error => {
      errShow();
      loaderHidden();
    });
}

// Load and Error Handling Functions
function loaderSow() {
  elements.loader.classList.replace('js-hidden', 'js-show');
}
function loaderHidden() {
  elements.loader.classList.replace('js-show', 'js-hidden');
}
function errShow() {
  elements.error.classList.replace('js-hidden', 'js-show');
}
function errHidden() {
  elements.error.classList.replace('js-show', 'js-hidden');
}
