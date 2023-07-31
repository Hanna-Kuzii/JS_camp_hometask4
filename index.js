import { loadCountries, regionRadio, createCountryList } from "./src/js/countries.js";
import "./src/js/cocktails.js";
import "./src/js/progressBar.js";
import "./src/js/countries.js";
import "./src/js/signUp.js";
import "./src/js/posts.js";

regionRadio.forEach((radio) => {
  radio.addEventListener("click", function () {
    const selectedRegion = radio.value;
    loadCountries(selectedRegion)
      .then(() => {
        createCountryList();
      })
      .catch((error) => {
        console.error("Error loading countries:", error);
      });
  });
});

loadCountries("All")
  .then(() => {
    createCountryList();
  })
  .catch((error) => {
    console.error("Error loading countries:", error);
  });


const currentYear = new Date().getFullYear();
document.querySelector('.copyright__year').textContent = currentYear;
