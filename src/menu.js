const renderMenuPage = () => {
    const largeContainer = document.querySelector("#content")
    const divContain = document.createElement("div");
    divContain.classList.add("menu");
    divContain.innerHTML = `
    <h2>SOUPS & SALADS</h2>
    <p>Caesar Salad $6.25</p>
    <p>Cranberry Salad $6.75</p>
    <p>Soup of the Day $5.25</p>

    <h2>SANDWICHES</h2>
    <p>The Funky Chicken $9.25</p>
    <p>The Smoke House Wrap $9.75</p>
    <p>Chicken Salad Croissant $10.25</p>

    <h2>SIDES - All sides $3.50</h2>
    <p>Brussels</p>
    <p>Mac & Cheese</p>
    <p>Cole Slaw</p>

    <h2>DESSERTS</h2>
    <p>Cookies $0.85 each</p>
    <p>Brownies $3.00 each</p>
    <p>Granola Bar $2.25 each</p>
    `;
    largeContainer.appendChild(divContain);
}

export {renderMenuPage};