// Variable for calculator text elem
const calc_text = document.querySelector(".calc-text");

// List for number button elems
const number_buttons = document.querySelectorAll(".nummer")
// Add event listeners for each number button elem
number_buttons.forEach(elem => {
    elem.addEventListener("click", () => {
        // Number button event handlers
        leggTil(elem.innerHTML);
    })
})
// Variable for equals button elem
const equals_button = document.querySelector(".er-lik")
// Add event listeners to the equals button
equals_button.addEventListener("click", () => {
    // Number button event handlers
    evaluerInput();
})

// Variable for CE button elem
const ce_button = document.querySelector(".fjern-alt")
// Add event listeners to the equals button
ce_button.addEventListener("click", () => {
    // C button event handlers
    fjernAlt();
})

// Variable for back button elem
const back_button = document.querySelector(".tilbake")
// Add event listeners to the equals button
back_button.addEventListener("click", () => {
    // Back button event handlers
    gåTilbake();
})


function leggTil(char){
    if(calc_text.innerHTML != 0){
        calc_text.innerHTML += char;
        return
    }
    calc_text.innerHTML = char;
}

function evaluerInput(){
    calc_text.innerHTML = eval(calc_text.innerHTML)
}

function fjernAlt(){
    calc_text.innerHTML = "0";
}

function gåTilbake(){
    calc_text.innerHTML = calc_text.innerHTML.slice(0, -1);
}


// funksjoner:
// - leggTil
// C - Fjern alt
// x - regneUt
// <- backspace
// CE - fjernSisteOperasjon