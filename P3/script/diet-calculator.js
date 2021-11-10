
let calcButtons = document.querySelectorAll("button");
let dietOutputTextEL = document.getElementById("dietOutputText");
let dietAgeEl = document.getElementById("dietAge");
let dietSizeEl = document.getElementById("dietSize");
let dietActivityEl = document.getElementById("dietActivity");
let monthsOrYears = calcButtons[1];
let foodNoneEl = document.querySelector("#foodNone");
let formEl = document.getElementById("dietCalcForm");

// Legger til event listener på knappene
calcButtons[0].addEventListener("click", changeButtonColor);
calcButtons[1].addEventListener("click", changeButtonColor);
calcButtons[2].addEventListener("click", runAnimation);

// Endrer fargen på knappene MONTHS og YEARS basert på om de er trykket på
function changeButtonColor(e) {
    calcButtons[0].className = "dietCalcButtonMonths";
    calcButtons[1].className = "dietCalcButtonMonths";
    e.target.className = "dietCalcButtonYears";
    monthsOrYears = e.target;
}

// Kjører animasjon når knappen create plan blir trykket på 
function runAnimation() {
    if (dietAgeEl.value != "" && dietSizeEl.value != "" && dietActivityEl.value != "") {
        dietOutputTextEL.innerHTML = "Creating plan...";
        foodNoneEl.id = "spinningFood";
        foodNoneEl.addEventListener("animationend", createPlan);
        formEl.addEventListener("change", createPlan);
        calcButtons[0].addEventListener("click", createPlan);
        calcButtons[1].addEventListener("click", createPlan);
    }
}

// Lager og viser planen etter animasjonen er ferdig
function createPlan() {
    dietOutputTextEL.innerHTML = "";
    foodNoneEl.id = "foodNone";
    let serving = 1;
    let dogAge = dietAgeEl.value;

    if (dietSizeEl.value == "medium") {
        serving *= 1.5;
    } else if (dietSizeEl.value == "large") {
        serving *= 1.75;
    } else if (dietSizeEl.value == "xlarge") {
        serving *= 2;
    }

    if (dietActivityEl.value == "active") {
        serving *= 1.25;
    } else if (dietActivityEl.value == "veryActive") {
        serving *= 1.5;
    } else if (dietActivityEl.value == "superActive") {
        serving *= 1.75;
    } 

    if (monthsOrYears.value == "years") {
        dogAge *= 12;
    }

    // Generer måltidene, som påvirkes av age og faktorene over 
    for (let i = 1; i < 5; i++) {
        // Lager div
        let mealDiv = document.createElement("div");
        mealDiv.className = "mealDivClass";
        dietOutputTextEL.appendChild(mealDiv);
        // Legger til bildet
        let foodCheckPhoto = document.createElement("img");
        foodCheckPhoto.src = "images/diet/dogFoodCheck.png";
        foodCheckPhoto.className = "foodCheckPhotoClass";
        mealDiv.appendChild(foodCheckPhoto);
        // Lager teksten
        let mealText = document.createElement("h4");
        mealDiv.appendChild(mealText);
        if (dogAge <= 12) {
            mealText.innerHTML = "Meal " + (i) + ": " + (serving*0.75).toPrecision(1) + "s with puppyfood";
        } else if (dogAge <= 100) {
            mealText.innerHTML =  "Meal " + (i) + ": " + (serving*1.5).toPrecision(1) + "s with dogfood";
            if (i == 3) {
                mealText.innerHTML =  "Snacks: 1s raw meat";
                break;
            } 
        } else {
            mealText.innerHTML = "Meal " + (i) + ": " + (serving*1.25).toPrecision(1) + "s with dogfood";
            if (i == 4) {
                mealText.innerHTML =  "Snacks: 1s raw meat";
                break;
            }
        }
        
    }
    // Legger til forklaring av s = serving på bunnen
    let mealServing = document.createElement("p");
    mealServing.className = "mealServingClass";
    dietOutputTextEL.appendChild(mealServing);
    mealServing.innerHTML =  "(1s = 1 serving = 50g)";
}



