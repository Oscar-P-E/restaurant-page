const home = () => {
    const main = document.querySelector(".main");

    const mainContent = (() => {
        if (!document.querySelector(".main-content")) {
            const div = document.createElement("div");
            div.classList.add("main-content");
            main.appendChild(div);
            return div;
        } else {
            return document.querySelector(".main-content");
        }
    })();

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Welcome to Burger Haus";
    mainContent.appendChild(heading);

    const bodyText = document.createElement("p");
    bodyText.classList.add("body-text");
    bodyText.textContent =
        "This is some dummy text. Look at the delicious hamburger and transparency. such wow";
    mainContent.appendChild(bodyText);
};

export default home;
