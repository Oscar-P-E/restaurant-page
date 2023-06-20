const redraw = () => {
    const main = document.querySelector(".main");

    if (!document.querySelector(".main-content")) {
        const div = document.createElement("div");
        div.classList.add("main-content");
        main.appendChild(div);
        return div;
    } else {
        const div = document.querySelector(".main-content");
        div.innerHTML = "";
        return div;
    }
};

export default redraw;
