document
  .querySelector(".signup__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector(".form__name").value;
    const surname = document.querySelector(".form__surname").value;
    const email = document.querySelector(".form__email").value;

    const nameRegex = /^[A-Z][a-z]*$/;
    if (!nameRegex.test(name) || !nameRegex.test(surname)) {
      alert(
        "The name and surname must consist only of Latin letters and begin with a capital letter."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid e-mail.");
      return;
    }

    const data = { name, surname, email };
    localStorage.setItem("formData", JSON.stringify(data));
    const main = document.querySelector(".main");

    if (name.toLowerCase() === "sigma") {
      main.style.display = "none";
      const discountMessage = document.createElement("div");
      discountMessage.textContent =
        "Today for users with the specified name when placing an order, a 120% discount =)";
      discountMessage.classList.add("discount-message");
      document.body.appendChild(discountMessage);

      setTimeout(function () {
        document.body.removeChild(discountMessage);
        main.style.display = "block";
      }, 5000);
    }
  });
