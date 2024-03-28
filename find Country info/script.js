'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}>
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${+data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.computedStyleMap.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

const getCountryAndNeighbour = function (country) {
  // ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);

    // render country
    renderCountry(data);

    // get neighber country (2)
    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    // ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
//     .then(Response => Response.json())
//     .then(data => renderCountry(data[0]));
// };

const getJSON = function (url , errorMSG = "something went wrong") {
   return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMSG} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // country 1

//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`country not found (${response.status})`);

//       response.json();
//     })

//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       //country 2

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}☠☠`);
//       renderError(`something went wrong ☠☠ ${err.message}.try again!`);
//     })

//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('Afghanistan');
// });

// getCountryAndNeighbour('Afghanistan');
// getCountryAndNeighbour('usa');


///////////////////////////////////////////


const getCountryData = function (country) {
  // country 1

  getJSON(`https://restcountries.eu/rest/v2/name/${country}`,"country not found!")


    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");
      //country 2
      return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`,"country not found");
    })
    
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}☠☠`);
      renderError(`something went wrong ☠☠ ${err.message}.try again!`);
    })

    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('Afghanistan');
});
