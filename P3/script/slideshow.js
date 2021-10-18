let mappe = document.querySelector(".mappe")

function left(){
    mappe.classList.remove("left")
    mappe.classList.remove("right")
    void mappe.offsetWidth;
    mappe.classList.add("left")
}

function right(){
    mappe.classList.remove("right")
    mappe.classList.remove("left")
    void mappe.offsetWidth;
    mappe.classList.add("right")
}