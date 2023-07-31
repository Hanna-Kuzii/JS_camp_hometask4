window.addEventListener("scroll", function () {
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.querySelector(".header__progress-bar").style.width = progress + "%";
});

window.addEventListener("load", function () {
  const loading = document.querySelector(".loading");
  const main = document.querySelector(".main");

  setTimeout(function () {
    loading.style.display = "none";
    main.style.display = "block";
  }, 5000);

  let timer;

  function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      waitForResponse().then((response) => {
        if (!response) {
          window.close();
        }
      });
    }, 60000);
  }

  function waitForResponse() {
    return new Promise((resolve) => {
      const confirmation = confirm("Are you here?");
      resolve(confirmation);
    }).finally(() => {
      resetTimer();
    });
  }

  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("keydown", resetTimer);

  resetTimer();
});
