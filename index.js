import barraScroll from "./barra_scroll.js";
import hamburgerMenu from "./menu_hamburger.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".hamburger", ".panel", ".menu a");
  barraScroll();
});
