// Diet kalkulator
let calcButtons = document.querySelectorAll("button");
let dietOutputTextEL = document.getElementById("dietOutputText");
let dietAgeEl = document.getElementById("dietAge");
let dietSizeEl = document.getElementById("dietSize");
let dietActivityEl = document.getElementById("dietActivity");
let monthsOrYears = calcButtons[1];
let foodNoneEl = document.querySelector(".foodNone");
let dietFormEl = document.getElementById("dietCalcForm") 

calcButtons[0].addEventListener("click", changeButtonColor);
calcButtons[1].addEventListener("click", changeButtonColor);
dietFormEl.addEventListener("submit", runAnimation);

// Endrer fargen på knappene MONTHS og YEARS basert på om de er trykket på
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

// Kjører animasjon når knappen create plan blir trykket på 
function runAnimation() {
    dietOutputTextEL.innerHTML = "Creating plan...";
    foodNoneEl.className = "spinningFood";
    foodNoneEl.addEventListener("animationend", createPlan);
}

// Lager og viser planen etter animasjonen er ferdig
function createPlan() {
    dietOutputTextEL.innerHTML = "";
    foodNoneEl.className = "foodNone";
    let serving = 1;
    let dogAge = dietAgeEl.value;

    // Sjekker size
    if (dietSizeEl.value == "medium") {
        serving *= 1.5;
    } else if (dietSizeEl.value == "large") {
        serving *= 1.75;
    } else if (dietSizeEl.value == "xlarge") {
        serving *= 2;
    }
    // Sjekker activity
    if (dietActivityEl.value == "active") {
        serving *= 1.25;
    } else if (dietActivityEl.value == "veryActive") {
        serving *= 1.5;
    } else if (dietActivityEl.value == "superActive") {
        serving *= 1.75;
    } 

    // Sjekker age
    if (monthsOrYears.id == "dietCalcButtonYears") {
        dogAge *= 12;
    }

    // Generer måltidene, som påvirkes av age 
    for (let i = 1; i < 5; i++) {
        // Lager div
        let mealDiv = document.createElement("div");
        mealDiv.className = "mealDivClass";
        dietOutputTextEL.appendChild(mealDiv)
        // Legger til bildet
        let foodCheckPhoto = document.createElement("img");
        foodCheckPhoto.src = "images/diet/dogFoodCheck.jpeg";
        foodCheckPhoto.className = "foodCheckPhotoClass";
        mealDiv.appendChild(foodCheckPhoto);
        // Lager teksten
        let mealText = document.createElement("h4");
        mealDiv.appendChild(mealText);
        if (dogAge <= 12 && dogAge >= 0) {
            mealText.innerHTML = "Meal " + (i) + " : " + (serving*0.75).toPrecision(2) + "s with puppyfood";
        } else if (dogAge <= 100) {
            mealText.innerHTML =  "Meal " + (i) + " : " + (serving*1.5).toPrecision(2) + "s with dogfood";
            if (i == 2) {
                break
            } 
        } else {
            mealText.innerHTML = foodChecklist + "Meal " + (i) + " : " + (serving*1.25).toPrecision(2) + "s with dogfood";
            if (i == 3) {
                break
            }
        }
        
    }   
}


