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

  console.log(age_type);
}

function calculate_age(){
  if(input.value == ""){
    output_p.innerHTML = `please select age`;
  } else if(select_input.value == ""){
    output_p.innerHTML = `please select size`;
  } else if(age_type == "years" && (input.value < 0 || input.value > 16)){
    output_p.innerHTML = `select an age between 0 and 16`;
  } else if(age_type == "months" && (input.value < 0 || input.value > 192)){
    output_p.innerHTML = `select an age between 0 and 192 months`;
  } else{
    let age_input;
    let age_output;

    if(age_type == "months"){
      age_input = input.value / 12;
    } else if(age_type == "years"){
      age_input = input.value;
    }

    if(select_input.value == "small"){
      if(age_input <= 1){
        age_output = 15 * age_input;
      } else if(age_input <= 2){
        age_output = 9 * age_input + 6;
      } else if(age_input <= 16){
        age_output = 4 * age_input + 16;
      }
    } else if(select_input.value == "medium"){
      if(age_input <= 1){
        age_output = 15 * age_input;
      } else if(age_input <= 2){
        age_output = 9 * age_input + 6;
      } else if(age_input <= 16){
        age_output = 4.57 * age_input + 14.36;
      }
    } else if(select_input.value == "big"){
      if(age_input <= 1){
        age_output = 15 * age_input;
      } else if(age_input <= 2){
        age_output = 9 * age_input + 6;
      } else if(age_input <= 16){
        age_output = 5.46 * age_input + 11.4;
      }
    }

    output_p.innerHTML = `Your ${select_input.value} sized dog is ${Math.floor(age_output)} years in human years :)`;
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