import redraw from "./redraw.js";

const menu = () => {
    const mainContent = redraw();

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "MENU";
    mainContent.appendChild(heading);

    const bodyText = document.createElement("p");
    bodyText.classList.add("body-text");
    bodyText.innerHTML = `
<h2>Signature Burgers</h2>

<h3>Haus Burger - $39.99</h3>
<p>Our masterpiece burger featuring a perfectly grilled patty, topped with our secret blend of spices, fresh tomatoes, crispy lettuce, onions, and our special Haus Sauce, all sandwiched between two toasted artisanal buns.</p>

<h3>Classic Cheeseburger - $34.99</h3>
<p>A timeless delicacy, our Classic Cheeseburger features a grilled patty, smothered in melted cheese, garnished with fresh lettuce, juicy tomatoes, and onions, served with our special Haus Sauce.</p>

<h3>Winter's Delight - $41.99</h3>
<p>A burger inspired by the one that sustained our great grandfather during harsh winters. A succulent patty marinated in our secret winter spice blend, topped with caramelized onions and a generous layer of melted cheese.</p>

<h2>Vegetarian & Vegan</h2>

<h3>Garden Burger - $29.99</h3>
<p>A delightful combination of a well-seasoned veggie patty, fresh lettuce, tomatoes, onions, and our tangy vegan sauce, served on a toasted vegan bun.</p>

<h3>Mushroom and Quinoa Burger - $31.99</h3>
<p>A handcrafted patty of mushrooms, quinoa, and our secret blend of herbs and spices, garnished with lettuce, tomatoes, onions, and served with our vegan Haus Sauce.</p>

<h2>Sides</h2>

<h3>Crispy Haus Fries - $14.99</h3>
<p>Our hand-cut potatoes, fried to golden perfection and lightly dusted with our secret Haus seasoning.</p>

<h3>Cheesy Fries - $16.99</h3>
<p>Our Crispy Haus Fries generously smothered with melted cheese and a sprinkle of green onions.</p>

<h3>Coleslaw - $11.99</h3>
<p>A classic side of crunchy cabbage, shredded carrots, and our tangy, creamy dressing.</p>

<h2>Desserts</h2>

<h3>Apple Pie - $19.99</h3>
<p>A nod to tradition with a modern twist, our Apple Pie is a delicious blend of cinnamon-spiced apples in a flaky pie crust.</p>

<h3>Vanilla Bean Ice Cream - $14.99</h3>
<p>Enjoy a scoop of classic Vanilla Bean Ice Cream, the perfect way to cool down after a savory meal.</p>

<h2>Drinks</h2>

<h3>Haus Special Iced Tea - $12.99</h3>
<p>A refreshing drink of our house-blended tea, sweetened just right and served over ice.</p>

<h3>Classic Cola - $9.99</h3>
<p>Choose from a selection of your favorite fizzy drinks.</p><br />

<p><em>Our burgers are prepared with the same love and care that birthed this culinary legacy over a century ago. At Burger Haus, each bite takes you on a journey through time. Join us, savor our offerings, and be part of our continuing history.</em></p>
`;
    mainContent.appendChild(bodyText);
};

export default menu;
