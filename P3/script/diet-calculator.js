// Diet kalkulator
let calcButtons = document.querySelectorAll("button");
let dietOutputTextEL = document.getElementById("dietOutputText");
let dietAgeEl = document.getElementById("dietAge");
let dietSizeEl = document.getElementById("dietSize");
let dietActivityEl = document.getElementById("dietActivity");
let monthsOrYears = calcButtons[1];
let foodNoneEl = document.querySelector(".foodNone");

calcButtons[0].addEventListener("click", changeButtonColor);
calcButtons[1].addEventListener("click", changeButtonColor);
calcButtons[2].addEventListener("click", runAnimation);

function changeButtonColor(e) {
    if (e.target != monthsOrYears) {
        calcButtons[0].style.backgroundColor = "white";
        calcButtons[0].style.color = "gray";
        calcButtons[1].style.backgroundColor = "white";
        calcButtons[1].style.color = "gray";
        e.target.style.backgroundColor = "gray";
        e.target.style.color = "white";
        monthsOrYears = e.target;
        console.log(monthsOrYears.id);
    }
}

function runAnimation() {
    dietOutputTextEL.innerHTML = "";
    foodNoneEl.className = "spinningFood";
    foodNoneEl.addEventListener("animationend", createPlan);
    console.log("halla");
}

function createPlan() {
    foodNoneEl.className = "foodNone";
    let serving = 1;
    let dogAge = dietAgeEl.value;

    if (monthsOrYears.id == "dietCalcButtonYears") {
        dogAge *= 12;
    }

    for (let i = 1; i < 5; i++) {
        var mealText = document.createElement("h4");
        mealText.className = "mealTextClass";
        dietOutputTextEL.appendChild(mealText);
        if (dogAge <= 12) {
            mealText.innerHTML = "Meal " + (i) + " : " + serving + " serving with puppyfood";
        } else if (dogAge <= 100) {
            mealText.innerHTML = "Meal " + (i) + " : " + serving + " serving with dogfood";
            if (i == 2) {
                break
            } 
        } else {
            mealText.innerHTML = "Meal " + (i) + " : " + serving + " serving with dogfood";
            if (i == 3) {
                break
            }
        }
        
    }   
}


