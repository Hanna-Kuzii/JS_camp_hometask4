import { getCocktails } from "./getData.js";

async function createCocktailCarousel() {
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

    for (let i = 0; i < cocktailsArray.length; i++) {
      const cocktail = cocktailsArray[i];
      const cocktailName = cocktail.strDrink;
      const cocktailImage = cocktail.strDrinkThumb;
      const cocktailInstructions = cocktail.strInstructions;

      const isActive = i < 2;

      const carouselItem = document.createElement("div");
      carouselItem.classList.add("reviews__item", "carousel-item", "review");
      if (isActive) {
        carouselItem.classList.add("active");
      }

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

      reviewsInner.appendChild(carouselItem);
    }

    // Uncomment the following lines if you are using Owl Carousel
    // $(".carousel").owlCarousel({
    //   items: 2,
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    // });
  } catch (error) {
    console.error("Error loading cocktails:", error);
  }
}

document.addEventListener("DOMContentLoaded", createCocktailCarousel);
