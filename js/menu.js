const burgerBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".close-btn");
const burgerMenu = document.querySelector(".burger-wrap");

const openMenu = () => {
  burgerMenu.style.display = "block";
}

const closeMenu = () => {
    burgerMenu.style.display = "none";
}

burgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);