function isPartiallyInView(element) {
  const position = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  return (
      position.top + position.height >= 50 &&
      position.bottom - position.height <= windowHeight
  );
}

function checkIfInView() {
  const elements = document.querySelectorAll('.post');
  elements.forEach((element) => {
      if (isPartiallyInView(element)) {
          element.classList.add('visible');
      } else {
          element.classList.remove('visible');
      }
  });
}

document.addEventListener("DOMContentLoaded", checkIfInView);
window.addEventListener("scroll", checkIfInView);
