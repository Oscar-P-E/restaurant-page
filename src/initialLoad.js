import home from "./home.js";

const initialLoad = () => {
    const content = document.getElementById("content");

    const nav = document.createElement("nav");
    nav.classList.add("nav_area");

    const main = document.createElement("main");
    main.classList.add("main");

    const createNavItem = (name, href) => {
        const navItem = document.createElement("div");
        navItem.classList.add("nav_item", name);
        // navItem.id = `${name}_nav`;

        const navLink = document.createElement("a");
        navLink.classList.add("nav_link", name);
        navLink.id = `${name}_nav`;

        navLink.href = href;
        navLink.textContent = name.charAt(0).toUpperCase() + name.slice(1);

        navItem.appendChild(navLink);
        return navItem;
    };

    nav.appendChild(createNavItem("home", "javascript:void(0)"));
    nav.appendChild(createNavItem("about", "javascript:void(0)"));
    nav.appendChild(createNavItem("menu", "javascript:void(0)"));

    content.appendChild(nav);

    content.appendChild(main);

    home();
};

export default initialLoad;
