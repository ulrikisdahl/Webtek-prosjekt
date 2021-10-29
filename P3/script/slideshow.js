let mappe = document.querySelector(".mappe")

let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");
let pic4 = document.getElementById("pic4");
let pic5 = document.getElementById("pic5");
let pic6 = document.getElementById("pic6");

let bilder = []
let bilde = []
for (let i = 1; i<34; i++) {
    bilde.push(`url(./images/nala/nala${i}.jpeg)`)
    if (bilde.length == 3){
        bilder.push(bilde)
        bilde = []
    }
}

function mainbakgrunn(i){
    pic1.style.backgroundImage = bilder[i][0]
    pic2.style.backgroundImage = bilder[i][1]
    pic3.style.backgroundImage = bilder[i][2]
    
}
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
index = 0

function right(){
    index = (index+1)%bilder.length
    setTimeout(function(){mainbakgrunn(index)},930)
    setTimeout(function(){sidebakgrunn(index, true)},1020)
    mappe.classList.remove("left")
    mappe.classList.remove("right")
    void mappe.offsetWidth;
    mappe.classList.add("left")
}

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