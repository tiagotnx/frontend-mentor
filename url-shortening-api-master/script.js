const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const menuImg = document.querySelector(".menu-button > img");
let isActive = false;

const toggleMenu = () => {
    header.classList.toggle("active");
    isActive = !isActive;
    menuImg.src = isActive
        ? "./images/icon-menu-close.svg"
        : "./images/icon-menu.svg";
};

menuButton.addEventListener("click", toggleMenu);
