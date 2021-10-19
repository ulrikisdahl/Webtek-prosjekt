let calcButtons = document.querySelectorAll("button");
let monthsOrYears = calcButtons[1];

calcButtons[0].addEventListener("click", changeButtonColor);
calcButtons[1].addEventListener("click", changeButtonColor);

function changeButtonColor(e) {
    if (e.target != monthsOrYears) {
        calcButtons[0].style.backgroundColor = "white";
        calcButtons[0].style.color = "gray";
        calcButtons[1].style.backgroundColor = "white";
        calcButtons[1].style.color = "gray";
        e.target.style.backgroundColor = "gray";
        e.target.style.color = "white";
        monthsOrYears = e.target
    }
}