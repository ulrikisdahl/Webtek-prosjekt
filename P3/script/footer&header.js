let bodyEl = document.querySelector("body");
let script = document.querySelector("script"); 

/* Lager footerelementet */
let footerEl = document.createElement("footer");
bodyEl.insertBefore(footerEl, script);

/* Lager tekstelement */
let madeByText = document.createElement("p");
madeByText.innerHTML = "WEBSITE MADE BY....";
footerEl.appendChild(madeByText);

// Lager header element
let headerEl = document.createElement("header");

 
bodyEl.insertBefore(headerEl, bodyEl.firstChild);