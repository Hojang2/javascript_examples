window.onload = function() { // this function is called when is javascript fully loaded
    // getting elements by ID
    let button = document.getElementById("button"); // assign variable button to button in html
    let number1 = document.getElementById("number1"); // assign variable number1 to input with id number1 in html
    let number2 = document.getElementById("number2"); // assign variable number2 to input with id number2 in html
   
    button.onclick = function() { // this function is called when button is pushed
            alert(parseInt(number1.value) + parseInt(number2.value)); // alerting the result of sum number1 and number2
    };
};