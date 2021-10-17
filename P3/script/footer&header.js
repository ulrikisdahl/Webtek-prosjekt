let bodyEl = document.querySelector("body");
let script = document.querySelector("script"); 

// Lager footerelementet
let footerEl = document.createElement("footer");
bodyEl.insertBefore(footerEl, script);

// Lager header element
let headerEl = document.createElement("header");
bodyEl.insertBefore(headerEl, bodyEl.firstChild);

// Lager tekstelement
let madeByText = document.createElement("p");
madeByText.innerHTML = "WEBSITE MADE BY....";
footerEl.appendChild(madeByText);

// Lager navbar

for (let i = 0; i < 6; i++) {
    let e1 = document.createElement("div")
    e1.className = "menu"

    let navn = ""
    let link = ""

    if (i==0) {
        navn = "HOME"
        link = "index.html"
    } else if (i==1){
        navn = "FOOD"
        link = "diet.html"
    } else if (i==2){
        navn = "DOG BREED"
        link = "breed.html"
    } else if (i==3){
        navn = "GALLERY"
        link = "gallery.html"
    } else if (i==4){
        navn = "AGE CALCULATOR"
        link = "age-calculator.html"
    } else if (i==5){
        navn = "CONTACT"
        link = "contact.html"
    }

    if (window.location.pathname.split("/").splice(-1)[0] == link){
        e1.id = "aktiv"
    }
    e2 = document.createElement("div")
    e2.innerText = navn
    e2.className = "menuP"
    e1.appendChild(e2)
    headerEl.appendChild(e1)

    e1.addEventListener('click', function() {
        window.location = link
        }, false)
    
}