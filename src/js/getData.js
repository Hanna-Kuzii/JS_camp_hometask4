import { fetchData } from './fetchData.js';

const url_cocktails = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const url_countries = 'https://restcountries.com/v3/region/';

export async function getCocktails() {
  const data = await fetchData(url_cocktails);
  return data ? data.drinks : [];
}

export async function getCountries(region) {
  const fullURL = url_countries + region;
  const data = await fetchData(fullURL);
  return data;
}
