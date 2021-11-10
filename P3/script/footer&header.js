let bodyEl = document.querySelector("body");
let script = document.querySelector("script"); 

// Lager header element
let headerEl = document.createElement("header");
bodyEl.insertBefore(headerEl, bodyEl.firstChild);

// Lager nav element
let navEl = document.createElement("nav");
headerEl.appendChild(navEl);

// Legger til logo til header
let logoHeader = document.createElement("img");
logoHeader.src = "images/logo.png";
navEl.appendChild(logoHeader);
logoHeader.className = "logoClass";
logoHeader.id = "logoHead";
logoHeader.addEventListener('click', linkHome);

// Legger til dropdown header
let dropdown = document.createElement("div");
navEl.appendChild(dropdown);
dropdown.className = "menu";
dropdown.id = "dropdown";
let dropimg = document.createElement("img");
dropimg.src = "images/logo.png";
dropimg.id = "dropimg";
dropdown.appendChild(dropimg);
dropimg.addEventListener('click', linkHome);

let droptext = document.createElement("h1");
droptext.innerText = "Nala the Dog";
droptext.addEventListener('click', linkHome);

droptext.id = "droptext";
dropdown.appendChild(droptext);

let dropbutton = document.createElement("img");
dropbutton.src = "images/dropdown-logo.png";
dropbutton.id = "dropbutton";
dropbutton.setAttribute("onClick", "dropdownfun()");
dropdown.appendChild(dropbutton);

// Lager footerelementet
let footerEl = document.createElement("footer");
bodyEl.insertBefore(footerEl, script);

let logo = document.createElement("img");
logo.src = "images/logo.png";
logo.className = "logoClass";
footerEl.appendChild(logo);
logo.addEventListener('click', linkHome);

let madeByText = document.createElement("p");
madeByText.innerHTML = "WEBSITE MADE BY GROUP 15";
madeByText.className = "fbTextClass";
footerEl.appendChild(madeByText); 

// Lager div'en til facebook logo og tekst
let fbDiv = document.createElement("div");
fbDiv.style.display = "flex";
fbDiv.style.alignItems = "center";
footerEl.appendChild(fbDiv);

let fb = document.createElement("img");
fb.src = "images/facebook.png";
fb.className = "fbClass";
fbDiv.appendChild(fb);
fb.addEventListener('click', function() {
    window.location= "https://www.facebook.com/groups/202077743151125";
    }, false);

let fbText = document.createElement("p");   
fbText.innerHTML = "FACEBOOK GROUP";
fbText.className = "fbTextClass";
fbDiv.appendChild(fbText); 

function linkHome() {
    window.location= "index.html";
}

// Lager navbar
let knapp = [["HOME","index.html"],["DIET","diet.html"],["DOG BREED","breed.html"],["GALLERY","gallery.html"],["AGE CALCULATOR","age-calculator.html"],["CONTACT","contact.html"]];

for (let i of knapp) {
    let e1 = document.createElement("div");
    e1.className = "menu";
    if (window.location.pathname.split("/").splice(-1)[0] == i[1]){
        e1.id = "aktiv";
    }
    e2 = document.createElement("div");
    e2.innerText = i[0];
    e1.appendChild(e2);
    navEl.appendChild(e1);

    e1.addEventListener('click', function() {
        window.location = i[1];
        }, false);
    
}

// Dropdown
let header = document.querySelector("header");
let menu = document.querySelectorAll(".menu");
function dropdownfun(){
    let height = `${menu[1].offsetHeight*(menu.length-1)+82}px`;
    if(header.style.height == height){
        removeAtt();
    } else {
        dropbutton.setAttribute("style","transform: rotate(90deg)");
        header.setAttribute("style",`height: ${height}`);
    }
}
function removeAtt(){
    header.removeAttribute("style");
    dropbutton.setAttribute("style","transform: rotate(0deg)");
}
window.onresize = removeAtt;
// GOOGLE FONTS

const head = document.querySelector("head");

head.innerHTML += `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet">`; 