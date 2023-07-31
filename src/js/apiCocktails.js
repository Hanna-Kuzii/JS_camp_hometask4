const url__cocktails = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

async function getCocktails() {
  try {
    const response = await fetch(url__cocktails);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error('Error fetching cocktails:', error);
    return [];
  }
}

export { getCocktails };
