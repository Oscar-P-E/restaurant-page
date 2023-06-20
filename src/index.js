import "./style.css";
import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";

import initialLoad from "./initialLoad.js";

initialLoad();

document.addEventListener("DOMContentLoaded", () => {
    const funcMap = {
        home_nav: home,
        about_nav: about,
        menu_nav: menu,
    };

    document.body.addEventListener("click", (e) => {
        console.log(e.target);
        // console.log(funcMap[e.target.id]);
        if (e.target.matches(".nav_link") && funcMap[e.target.id]) {
            funcMap[e.target.id]();
        } else {
            // console.log("WTF");
        }
    });
});
