import "./style.css";

const content = document.getElementById("content");

const nav = document.createElement("nav");
nav.classList.add("nav_area");

const main = document.createElement("main");
main.classList.add("main");

function createNavItem(name, href) {
    const navItem = document.createElement("div");
    navItem.classList.add("nav_item", name);

    const navLink = document.createElement("a");
    navLink.classList.add("nav_link", name);
    navLink.href = href;
    navLink.textContent = name.charAt(0).toUpperCase() + name.slice(1);

    navItem.appendChild(navLink);
    return navItem;
}

nav.appendChild(createNavItem("home", "http://example.com"));
nav.appendChild(createNavItem("about", "http://example.com"));
nav.appendChild(createNavItem("menu", "http://example.com"));

content.appendChild(nav);

content.appendChild(main);
