let bodyEl = document.querySelector("body");

/* Lager footerelementet */
let footerEl = document.createElement("footer");
footerEl.classList.add("footer");
bodyEl.appendChild(footerEl);

/* Lager tekstelement */
let madeByText = document.createElement("p");
madeByText.innerHTML = "WEBSITE MADE BY....";
footerEl.appendChild(madeByText);

