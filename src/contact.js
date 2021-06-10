const renderContactPage = () => {
    const largeContainer = document.querySelector("#content")
    const divContain = document.createElement("div");
    divContain.classList.add("contact");
    divContain.innerHTML = 'Testing';
    largeContainer.appendChild(divContain);
}

export {renderContactPage};