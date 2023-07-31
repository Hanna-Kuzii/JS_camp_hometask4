import { getCountries } from "./getData.js";

let countries = [];
export const regionRadio = document.querySelectorAll(".filter__radio");
export const ulElement = document.querySelector(".examples__list");
const defaultRegions = ["Asia", "Americas", "Europe"];


export function createCountryList() {
  ulElement.innerHTML = "";

  const firstCountries = countries.slice(0, 5);

  firstCountries.forEach((country) => {
    if (country) {
      const liElement = document.createElement("li");
      liElement.className = "examples__item service service_choosed";

      const serviceContent = document.createElement("div");
      serviceContent.className = "service__content";

      const imgElement = document.createElement("img");
      imgElement.src = country.flags[0];
      imgElement.alt = "service";
      imgElement.className = "service__picture";

      const serviceDescription = document.createElement("div");
      serviceDescription.className = "service__description";

      const serviceTitle = document.createElement("div");
      serviceTitle.className = "service__title";
      serviceTitle.textContent = country.name.official;

      const serviceCapital = document.createElement("div");
      serviceCapital.className = "service__text";
      serviceCapital.textContent = `Capital: ${country.capital}`;

      const serviceSubregion = document.createElement("div");
      serviceSubregion.className = "service__text";
      serviceSubregion.textContent = `Subregion: ${country.subregion}`;

      serviceDescription.appendChild(serviceTitle);
      serviceDescription.appendChild(serviceCapital);
      serviceDescription.appendChild(serviceSubregion);

      serviceContent.appendChild(imgElement);
      serviceContent.appendChild(serviceDescription);

      liElement.appendChild(serviceContent);

      ulElement.appendChild(liElement);
    }
  });
}

export function loadCountries(region) {
  return new Promise((resolve, reject) => {
    if (region === "All") {
      const promises = defaultRegions.map((region) =>
        getCountries(region)
          .then((data) => data[0])
          .catch((error) => {
            console.error("Error fetching countries:", error);
            return null;
          })
      );

      Promise.all(promises)
        .then((data) => {
          countries = data.filter((country) => country !== null);
          resolve(countries);
        })
        .catch((error) => {
          console.error("Error fetching countries:", error);
          reject(error);
        });
    } else {
      getCountries(region)
        .then((data) => {
          countries = [...data];
          resolve(countries);
        })
        .catch((error) => {
          console.error("Error fetching countries:", error);
          reject(error);
        });
    }
  });
}

