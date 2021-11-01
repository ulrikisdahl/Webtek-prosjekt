const input = document.querySelector("#age_calc_input");
const months_input = document.querySelector("#age_calc_months");
const years_input = document.querySelector("#age_calc_years");
const select_input = document.querySelector("#age_calc_select");
const submit_button = document.querySelector("#age_calc_submit");
const output_p = document.querySelector("#age_calc_output");

let age_type = "years";

function button_function(add, remove, type){
  add.classList.add("age_calc_selected");
  remove.classList.remove("age_calc_selected");

  age_type = type;
}

//form: onsubmit="return false"

function calculate_age(){
  output_p.style.padding = "15px";
  output_p.style.backgroundColor = "#FF4F4F";
  if(input.value == ""){
    output_p.innerHTML = `Select the age of your dog`;
  } else if(select_input.value == ""){
    output_p.innerHTML = `Select the size of your dog`;
  } else if(age_type == "years" && (input.value < 0 || input.value > 16)){
    output_p.innerHTML = `Select an age between 0 and 16 years`;
  } else if(age_type == "months" && (input.value < 0 || input.value > 192)){
    output_p.innerHTML = `Select an age between 0 and 192 months`;
  } else{
    let age_input;
    let age_output;

    output_p.style.backgroundColor = "#A2FF99";

    if(age_type == "months"){
      age_input = input.value / 12;
    } else if(age_type == "years"){
      age_input = input.value;
    }

    if(age_input <= 1){
      age_output = 15 * age_input;
    } else if(age_input <= 2){
      age_output = 9 * age_input + 6;
    } else if(age_input <= 16){
        if(select_input.value == "small"){
          age_output = 4 * age_input + 16;
        } else if(select_input.value == "medium"){
          age_output = 4.57 * age_input + 14.36;
        } else if(select_input.value == "big"){
          age_output = 5.46 * age_input + 11.4;
        }
    }

    output_p.innerHTML = `Your <b>${select_input.value}</b> sized dog is <b>${Math.floor(age_output)}</b> years in human years`;
    }
  }

/*

LITEN HUND
0-1: 15x
1-2: 9x + 6
2-16: 4x + 16

MEDIUM HUND
0-1: 15x
1-2: 9x + 6
2-16: 4.57x + 14.36

STOR HUND
0-1: 15x
1-2: 9x + 6
2-16: 5.46x + 11.4

*/