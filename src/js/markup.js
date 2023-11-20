export { createMarkup, createMarkupInfoCat };

// Markup function for  select.breed-select
function createMarkup(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

// // Markup function for div.cat-info
// function createMarkupInfoCat(arr) {
//    const {url} = arr[0]
//   return arr
//     .map(
//       ({
//         url,
//         breeds,
//       }) => `<img src="${url}" alt="${breeds[0].name}" width = "400">
//     <h2>${breeds[0].name}</h2>
//     <p>${breeds[0].description}</p>
//     <p>Temperament:<span>${breeds[0].temperament}</span></p>`
//     )
//     .join('');
// }

// Markup function for div.cat-info
function createMarkupInfoCat(arr) {
  const { name, description, temperament } = arr[0].breeds[0];
  const { url } = arr[0];
  return arr
    .map(
      item => `<img src="${url}" alt="${name}" class="cat-img"><div class="cat-container">
    <h2 class="cat-name">${name}</h2>
    <p class="cat-descr">${description}</p>
    <p class="cat-temper">Temperament: <span class="cat-temper-descr">${temperament}</span></p></div>`
    )
    .join('');
}
