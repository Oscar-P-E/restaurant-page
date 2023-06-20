import redraw from "./redraw.js";

const home = () => {
    const mainContent = redraw();

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Welcome to Burger Haus";
    mainContent.appendChild(heading);

    const bodyText = document.createElement("p");
    bodyText.classList.add("body-text");
    bodyText.innerHTML = `
        <p>For over 120 years, my great grandfather's techniques have been passed down in secret.</p>
        <p>Today, you can taste this piece of history at any Burger Haus restaurant.</p>
        `;
    mainContent.appendChild(bodyText);
};

export default home;
