// -------------Version with libraries------------

import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createMarkup, createMarkupInfoCat } from './markup';

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

// Notiflix.Notify parameters
// Notiflix.Notify.init({
//   width: '300px',
//   fontSize: '13px',
//   position: 'left-top',
//   distance: '40px',
//   // closeButton: true,
// });

// Notiflix.Loading
Notiflix.Loading.standard('Loading data, please wait....');

// Object with elements
const elements = {
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

// Call fetchBreeds(), creating markup for select.breed-select
fetchBreeds()
  .then(data => {
    console.log(data);
    Notiflix.Loading.remove();
    elements.breedSelect.classList.replace('js-hidden', 'js-show');
    //   Creating markup
    elements.breedSelect.innerHTML += createMarkup(data);
    new SlimSelect({
      select: elements.breedSelect,
      settings: {
        placeholderText: 'Choose a cat breed',
        // allowDeselect: true,
      },
    });
  })
  .catch(error => {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
    elements.breedSelect.classList.replace('js-show', 'js-hidden');
  });

// Listener on select.breed-select, 'change' event
elements.breedSelect.addEventListener('change', handlerSearch);

// Callback function for listener
function handlerSearch(evt) {
  Notiflix.Loading.standard();
  console.log(evt.currentTarget.value);
  const breedId = evt.currentTarget.value;

  elements.catInfo.classList.replace('js-show', 'js-hidden');

  fetchCatByBreed(breedId)
    .then(data => {
      console.log(data);
      Notiflix.Loading.remove();
      elements.catInfo.classList.replace('js-hidden', 'js-show');
      // loaderHidden();
      //   Creating markup
      elements.catInfo.innerHTML = createMarkupInfoCat(data);
    })
    .catch(error => {
      Notiflix.Notify.init({
        position: 'left-top',
        distance: '120px',
      });
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
}
