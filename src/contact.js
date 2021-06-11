const renderContactPage = () => {
    const largeContainer = document.querySelector("#content")
    const divContain = document.createElement("div");
    divContain.classList.add("contact");
    divContain.innerHTML = `
    <h2> Contact </h2>
    <h3>Sunday-Thursday</h3>
    <p>11am - 9pm</p>
    <h3>Friday-Saturday</h3>
    <p>11am - 11pm</p>

    <p>(404) 222-4534</p>
    <p>770 Another Peachtree Rd</p>
    <p>Atlanta, GA 30318</p>
    `;
    largeContainer.appendChild(divContain);
}

export {renderContactPage};