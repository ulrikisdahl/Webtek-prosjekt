let mappe = document.querySelector(".mappe")
let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");
let pic4 = document.getElementById("pic4");
let pic5 = document.getElementById("pic5");
let pic6 = document.getElementById("pic6");

let bilder = []
let bilde = []

// Grupperer bildene til array av 3
let antallBilder = 33
for (let i = 1; i<(antallBilder+1); i++) {
    bilde.push(`url(./images/nala/nala${i}.jpeg)`)
    if (bilde.length == 3){
        bilder.push(bilde)
        bilde = []
    }
}

// backgroundImage til 3 første Div
function mainbakgrunn(i){
    pic1.style.backgroundImage = bilder[i][0]
    pic2.style.backgroundImage = bilder[i][1]
    pic3.style.backgroundImage = bilder[i][2]
    
}

// backgroundImage til 3 Div utenfor til høyre
function sidebakgrunn(i, bool){
    if (bool){
        i = (i+1)%bilder.length
    }
    pic4.style.backgroundImage = bilder[i][0]
    pic5.style.backgroundImage = bilder[i][1]
    pic6.style.backgroundImage = bilder[i][2]
}

mainbakgrunn(0)
sidebakgrunn(1)
let index = 0

// Starter animasjon til høyre "onClick"
function right(){
    index = (index+1)%bilder.length
    setTimeout(function(){mainbakgrunn(index)},930)
    setTimeout(function(){sidebakgrunn(index, true)},1020)
    mappe.classList.remove("left")
    mappe.classList.remove("right")
    void mappe.offsetWidth;
    mappe.classList.add("left")
}

// Starter animasjon til venstre "onClick"
function left(){
    sidebakgrunn(index, false)
    if (index==0){
        index = bilder.length-1
    } else {
        index--
    }
    setTimeout(function(){mainbakgrunn(index)},10)
    mappe.classList.remove("right")
    mappe.classList.remove("left")
    void mappe.offsetWidth;
    mappe.classList.add("right")
}

// Funksjon til når man trykker på bilde
// Showcase bilde/video
document.getElementById("poster1").style.backgroundImage = 'url("./videoes/poster1.png")'
document.getElementById("poster2").style.backgroundImage = 'url("./videoes/poster2.png")'
document.getElementById("poster3").style.backgroundImage = 'url("./videoes/poster3.png")'

let posters = document.querySelectorAll(".poster")
let pictures = document.querySelectorAll(".bilde")
let blackscreen = document.querySelector("#blackscreen")
let dark = document.querySelectorAll(".dark")

blackscreen.addEventListener("click", show)
for (let i = 0; i < posters.length; i++) {
    posters[i].addEventListener("click", show)
}
for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("click", show)
}
for (let i = 0; i < dark.length; i++) {
    dark[i].addEventListener("click", show)
}

function show(e){
    if (e.target.className == "darker"){
        setTimeout(function(){
            blackscreen.style.display = "none"; 
            dark[0].style.display = "none"; 
            dark[1].style.display = "none";
            dark[1].pause()
        },200)
        //Starter animasjon
        blackscreen.className = "lighter"

    } else if(blackscreen.className == "lighter"){
        // Hvis et bilde blir trykket på
        if (e.target.className == dark[0].id) {
            dark[0].style.display = "block"
            dark[0].src = e.target.style.backgroundImage.slice(5,-2)
        } else {
            // Hvis video blir trykket på
            dark[1].style.display = "block"
            dark[1].src = `./videoes/nalavid${e.target.id.slice(-1)}.mp4`
        }
        blackscreen.style.display = "flex"
        blackscreen.className = "darker"
    }
}