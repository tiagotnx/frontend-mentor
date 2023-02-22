const header = document.querySelector("header");
const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll(".nav-link");
const overlay = document.querySelector(".overlay");

const toggleMenu = () => {
    header.classList.toggle("active");
};

const removeActive = () => {
    header.classList.remove("active");
};

buttons.forEach((item) => item.addEventListener("click", toggleMenu));
links.forEach((item) => item.addEventListener("click", removeActive));
overlay.addEventListener("click", removeActive);
