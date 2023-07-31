const url_countries = "https://restcountries.com/v3/region/";

function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function getCountries(region) {
  const fullURL = url_countries + region;
  return wait(300)
    .then(() => fetch(fullURL))
    .then((res) => res.json());
}
