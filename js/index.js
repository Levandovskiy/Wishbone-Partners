document.querySelector(".header__toggle").addEventListener("click", () => {
  document
    .querySelector(".header__nav")
    .classList.toggle("header__nav--active");
});
// Добавляем обработчик клавиш
document.addEventListener("keydown", (event) => {
  const nav = document.querySelector(".header__nav");
  if (event.key === "Enter") {
    nav.classList.toggle("header__nav--active");
  } else if (
    event.key === "Escape" &&
    nav.classList.contains("header__nav--active")
  ) {
    nav.classList.remove("header__nav--active");
  }
});
