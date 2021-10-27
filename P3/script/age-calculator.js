const input = document.querySelector("#age_calc_input");
const months_input = document.querySelector("#age_calc_months");
const years_input = document.querySelector("#age_calc_years");
const select_input = document.querySelector("#age_calc_select");
const submit_button = document.querySelector("#age_calc_submit");
const output_p = document.querySelector("#age_calc_output");

let age_type = "months";

//months_input.onclick = button_function(months_input, years_input, "months");

//years_input.onclick = button_function(years_input, months_input, "years");

months_input.addEventListener("click", button_function(months_input, years_input, "months"));

years_input.addEventListener("click", button_function(years_input, months_input, "years"));


function button_function(add, remove, type, event){
  add.classList.add("age_calc_selected");
  remove.classList.remove("age_calc_selected");

  age_type = type;

  console.log(age_type);

  event.preventDefault();
}