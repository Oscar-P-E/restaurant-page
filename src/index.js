import "./style.css";
import Burger from "./burger_wp.jpg";
import { doc } from "prettier";

const content = document.getElementById("content");
const main = document.createElement("div");
const nav = document.createElement("div");

const home = document.createElement("div");
const about = document.createElement("div");
const menu = document.createElement("div");

const homeLink = document.createElement("a");
const aboutLink = document.createElement("a");
const menuLink = document.createElement("a");

homeLink.href = "http://example.com";
aboutLink.href = "http://example.com";
menuLink.href = "http://example.com";

main.classList.add("main");
nav.classList.add("nav_area");

home.classList.add("nav_item", "home");
about.classList.add("nav_item", "about");
menu.classList.add("nav_item", "menu");

homeLink.classList.add("nav_link", "home");
aboutLink.classList.add("nav_link", "about");
menuLink.classList.add("nav_link", "menu");

homeLink.textContent = "Home";
aboutLink.textContent = "About";
menuLink.textContent = "Menu";

content.appendChild(main);
main.appendChild(nav);
nav.appendChild(home);
nav.appendChild(about);
nav.appendChild(menu);
home.appendChild(homeLink);
about.appendChild(aboutLink);
menu.appendChild(menuLink);
