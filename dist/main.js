(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("title"),n.setAttribute("id","initialLoad");const t=document.createElement("h1"),a=document.createTextNode("Bleu Bistro");t.appendChild(a),n.appendChild(t),e.appendChild(n);const o=document.createElement("div");o.innerHTML="\n    <h3>Classic Bistro Food with Local & Southern Ingredients</h3>\n          <p>Since opening in 2020, Bleu has evolved continually, and this most recent evolution has culminated\n            in its relocation and re-imagining into a new space in Atlanta. \n            We are wholeheartedly embracing small to large shareable plates. \n          </p>",n.appendChild(o),e.appendChild(n)};let n=document.querySelector("body"),t=document.createElement("nav");t.innerHTML="\n  <button >Home</button>\n  <button > Menu </button>\n  <button > Contact </button>\n";let a=document.querySelector("#content");n.insertBefore(t,n.firstChild),e(),console.log("first webpack hit");let o=Array.from(document.querySelectorAll("button"));function c(n){a.innerHTML="","Contact"==n.target.innerText?(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("contact"),n.innerHTML="\n    <h2> Contact </h2>\n    <h3>Sunday-Thursday</h3>\n    <p>11am - 9pm</p>\n    <h3>Friday-Saturday</h3>\n    <p>11am - 11pm</p>\n\n    <p>(404) 222-4534</p>\n    <p>770 Another Peachtree Rd</p>\n    <p>Atlanta, GA 30318</p>\n    ",e.appendChild(n)})():"Home"==n.target.innerText?e():(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("menu"),n.innerHTML="\n    <h2>SOUPS & SALADS</h2>\n    <p>Caesar Salad $6.25</p>\n    <p>Cranberry Salad $6.75</p>\n    <p>Soup of the Day $5.25</p>\n\n    <h2>SANDWICHES</h2>\n    <p>The Funky Chicken $9.25</p>\n    <p>The Smoke House Wrap $9.75</p>\n    <p>Chicken Salad Croissant $10.25</p>\n\n    <h2>SIDES - All sides $3.50</h2>\n    <p>Brussels</p>\n    <p>Mac & Cheese</p>\n    <p>Cole Slaw</p>\n\n    <h2>DESSERTS</h2>\n    <p>Cookies $0.85 each</p>\n    <p>Brownies $3.00 each</p>\n    <p>Granola Bar $2.25 each</p>\n    ",e.appendChild(n)})()}console.log(o),o.forEach((e=>e.addEventListener("click",c)))})();