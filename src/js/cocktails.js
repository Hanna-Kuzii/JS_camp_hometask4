import { getCocktails } from "./getData.js";

async function createCocktails() {
  const numberOfCocktails = 6;
  const cocktailsArray = [];

  try {
    for (let i = 0; i < numberOfCocktails; i++) {
      const cocktails = await getCocktails();
      if (cocktails.length > 0) {
        cocktailsArray.push(cocktails[0]);
      }
    }

    const reviewsInner = document.querySelector(".reviews__inner");
    reviewsInner.innerHTML = "";

    for (let i = 0; i < cocktailsArray.length; i += 2) {
      const firstCocktail = cocktailsArray[i];
      const secondCocktail = cocktailsArray[i + 1];

      const isActive = i === 0; 

      const reviewsPage = document.createElement("div");
      reviewsPage.classList.add("reviews__page", "carousel-item");
      if (isActive) {
        reviewsPage.classList.add("active");
      }

      const firstCarouselItem = createCarouselItem(firstCocktail);
      const secondCarouselItem = createCarouselItem(secondCocktail);

      reviewsPage.appendChild(firstCarouselItem);
      reviewsPage.appendChild(secondCarouselItem);

      reviewsInner.appendChild(reviewsPage);
    }

  } catch (error) {
    console.error("Error loading cocktails:", error);
  }
}


function createCarouselItem(cocktail) {
  const cocktailName = cocktail ? cocktail.strDrink : "";
  const cocktailImage = cocktail ? cocktail.strDrinkThumb : "";
  const cocktailInstructions = cocktail ? cocktail.strInstructions : "";

  const carouselItem = document.createElement("div");
  carouselItem.classList.add("reviews__item", "review");

  const reviewDescription = document.createElement("div");
  reviewDescription.classList.add("review__description");

  const reviewTitle = document.createElement("div");
  reviewTitle.classList.add("review__title");
  reviewTitle.textContent = cocktailName;

  const reviewText = document.createElement("div");
  reviewText.classList.add("review__text");
  reviewText.textContent = cocktailInstructions;

  reviewDescription.appendChild(reviewTitle);
  reviewDescription.appendChild(reviewText);

  const reviewImage = document.createElement("img");
  reviewImage.src = cocktailImage;
  reviewImage.alt = cocktailName;
  reviewImage.classList.add("review__image", "d-block", "w-100");

  carouselItem.appendChild(reviewDescription);
  carouselItem.appendChild(reviewImage);

  return carouselItem;
}


document.addEventListener("DOMContentLoaded", createCocktails);