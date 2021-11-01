let bodyEl = document.querySelector("body");
let script = document.querySelector("script"); 

// Lager footerelementet
let footerEl = document.createElement("footer");
bodyEl.insertBefore(footerEl, script);

// Lager header element
let headerEl = document.createElement("header");
bodyEl.insertBefore(headerEl, bodyEl.firstChild);

// Legger til logo til header
let logoHeader = document.createElement("img");
logoHeader.src = "images/logo.png";
headerEl.appendChild(logoHeader);
logoHeader.className = "logoClass";

// Legger til logo til footer
let logo = document.createElement("img");
logo.src = "images/logo.png";
footerEl.appendChild(logo);
logo.className = "logoClass";

// Lager made by element
let madeByText = document.createElement("p");
madeByText.innerHTML = "WEBSITE MADE BY....";
madeByText.style.color = "white";
footerEl.appendChild(madeByText); 

// Lager div'en til facebook logo og tekst
let fbDiv = document.createElement("div");
fbDiv.style.display = "flex";
fbDiv.style.alignItems = "center";
footerEl.appendChild(fbDiv);

// Legger til facebook logo med link
fbLink = document.createElement("a");
fbLink.href = "https://www.facebook.com/groups/202077743151125";
fbLink.target = "_blank";
fbDiv.appendChild(fbLink);
let fb = document.createElement("img");
fb.src = "images/facebook.png";
fb.className = "fbClass";
fbLink.appendChild(fb);

// Lager faebook tekst by element
let fbText = document.createElement("p");   
fbText.innerHTML = "FACEBOOK GROUP";
fbText.style.color = "white";
fbDiv.appendChild(fbText); 
fbText.className = "fbTextClass";

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
        navn = "DIET"
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

// GOOGLE FONTS

const head = document.querySelector("head");

head.innerHTML += `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet">`; 

