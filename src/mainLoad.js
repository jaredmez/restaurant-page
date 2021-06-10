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
    largeContainer.appendChild(divContain)

    const balanceOfPage = document.createElement("div");
    balanceOfPage.innerHTML = `
    <h3>Classic Bistro Food with Local & Southern Ingredients</h3>
          <p>Since opening in 2020, Bleu has evolved continually, and this most recent evolution has culminated
            in its relocation and re-imagining into a new space in Atlanta. 
            We are wholeheartedly embracing small to large shareable plates. 
          </p>`;

    divContain.appendChild(balanceOfPage);
    largeContainer.appendChild(divContain);
    
};

export {renderHomePage};
