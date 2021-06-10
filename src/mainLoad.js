const renderHomePage = () => {
    //console.log('tester');
    const largeContainer = document.querySelector("#content")
    const divContain = document.createElement("div");
    divContain.classList.add("title");
    divContain.setAttribute("id", "initialLoad");
    
    const titleElement = document.createElement("h1");
    const titleTxt = document.createTextNode("Bleu Bistro");
    titleElement.appendChild(titleTxt);
    
    divContain.appendChild(titleElement);
    largeContainer.appendChild(divContain);
    
};

export {renderHomePage};
