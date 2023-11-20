export { fetchBreeds, fetchCatByBreed };

// fetchBreeds() function - HTTP request, returns a promise with an array of breeds
function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/breeds';
  const API_KEY =
    'live_HuD36BnX5s258AGXtMMR0uWAMyepSbYGWcMf1LPyQgH6aXNrFHnd3wcm0ZeeLPb7';

  const params = new URLSearchParams({
    api_key: API_KEY,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`)
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(error => {
      console.log(error);
    });
}

// Function fetchCatByBreed(breedId) - information about the cat by breedId
function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
  const API_KEY =
    'live_HuD36BnX5s258AGXtMMR0uWAMyepSbYGWcMf1LPyQgH6aXNrFHnd3wcm0ZeeLPb7';

  const params = new URLSearchParams({
    api_key: API_KEY,
    breed_ids: breedId,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(error => {
      console.log(error);
    });
}
