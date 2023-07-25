window.addEventListener("load", function () {
  const loading = document.querySelector(".loading");
  const main = document.querySelector(".main");
  
  setTimeout(function () {
      loading.style.display = "none";
      main.style.display = "block";
  }, 5000);
});
