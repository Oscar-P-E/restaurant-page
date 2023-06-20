import redraw from "./redraw.js";

const about = () => {
    const mainContent = redraw();

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "The Burger Haus Story...";
    mainContent.appendChild(heading);

    const bodyText = document.createElement("p");
    bodyText.classList.add("body-text");
    const story =
        "<p>Indulge in a culinary journey rooted in a tale of triumph and a secret recipe that has withstood the test of time. Step into Burger Haus, where history meets flavor, and experience a taste that echoes through generations.</p>" +
        "<p>In a bygone era, when perseverance was the currency of survival, my great grandfather embarked on a daily uphill trek to reach his school. Little did he know that these uphill walks would lead him to discover an extraordinary culinary skill. Faced with the harsh winter, he mastered the art of crafting delectable burgers, infusing each patty with the warmth and love that sustained his family.</p>" +
        "<p>Word of his mouthwatering creations spread like wildfire, drawing people from near and far. However, fate had a different plan in store. The authorities deemed his burgers too irresistible, making their creation a criminal offense. Forced into hiding, my great grandfather's techniques became shrouded in secrecy, passed down only within the family for over a century.</p>" +
        "<p>Today, at Burger Haus, the veil of secrecy has been lifted. Our chefs have meticulously recreated those hidden recipes, using the same time-honored techniques and the finest ingredients. Each bite of our burgers is a tribute to the legacy of my great grandfather, a nod to the resilience and determination that birthed this culinary treasure.</p>" +
        "<p>Immerse yourself in the ambience of a bygone era, where the aroma of sizzling patties dances in the air, and the walls resonate with the stories of the past. Our menu pays homage to tradition while embracing innovation, offering a range of burgers that tantalize the taste buds and ignite the senses.</p>" +
        "<p>Sink your teeth into our signature Haus Burger, a masterpiece that combines the juiciest, perfectly grilled patty with a symphony of flavors. Or perhaps savor the Classic Cheeseburger, a nostalgic reminder of simpler times. Our vegetarian and vegan options, crafted with the same care and attention, cater to every palate.</p>" +
        "<p>At Burger Haus, we invite you to savor more than just a meal; we invite you to experience a piece of history. As you take that first bite, you become a part of a story that spans generations, a story of passion, resilience, and the pursuit of culinary excellence.</p>" +
        "<p>Join us at Burger Haus, where the legacy lives on, and taste the history that has been carefully preserved for over a century. Indulge in the flavors that have stood the test of time and discover why our burgers are more than just a meal – they are a celebration of a remarkable journey that began with uphill walks and continues to delight discerning palates today.</p>";

    bodyText.innerHTML = story;

    mainContent.appendChild(bodyText);
};

export default about;
