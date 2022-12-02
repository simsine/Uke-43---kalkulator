// Variable for calculator text elem
const calc_text = document.querySelector(".kalk-text");

// List for button elems
const buttons = document.querySelectorAll("button");
// Add event listeners for each button elem
buttons.forEach(button => {
    button.addEventListener("click", () => {
		switch(button.innerHTML){
			case 'CE':
				fjernAlt();
				break;
			case 'C':
				//
				break;
			case '⌫':
				gåTilbake();
				break;
			case '✕':
				leggTil('*');
				break;
			case '+/-':
				//
				break;
			case '=':
				evaluerInput();
				break;
			default:
				leggTil(button.innerHTML);
		}
    })
})

// Function to add a character to the text field
function leggTil(char){
    if(calc_text.innerHTML != 0){
        calc_text.innerHTML += char;
        return
    }
    calc_text.innerHTML = char;
}
// Function to evaluate the text field
function evaluerInput(){
    calc_text.innerHTML = eval(calc_text.innerHTML)
}
// Function that clears text field
function fjernAlt(){
    calc_text.innerHTML = "0";
}
// Function to remove last input
function gåTilbake(){
    if (calc_text.innerHTML !== "" || calc_text.innerHTML != "0"){
        calc_text.innerHTML = calc_text.innerHTML.slice(0, -1);	
		return
    }
	if (calc_text.innerHTML === "") {
		calc_text.innerHTML = "0"
	}
}