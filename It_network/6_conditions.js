
function show_date_example(){
    let d = new Date(); // creating Date object

    document.write(d);
    // Prints the age of code

    if (d.getFullYear > 2019)
        document.write("This code is more than one year old <br>");
    else
        document.write("This code is not so old <br>")

    if ((d.getDate() == 1) && (d.getMonth() + 1 == 1)){
        document.write("Happy new year! <br>");
    } else {
        document.write("Today in usual day. <br>");
    }
}

function calculate_bmi(){

    let height;
    let weight;
    
    // getting height and weight from user by prompt

    do {
        height = prompt("Write your height in meters: ");
    } while (isNaN(height));

    do {
        weight = prompt("Write your weight in kilograms: ");
    } while (isNaN(weight));

    // calculating BMI

    let bmi = weight / Math.pow(height, 2);

    // printing height, weight and BMI

    document.write("Your height in centimeters: " + height + "<br>");
    document.write("Your weight in kilograms: " + weight + "<br>");
    document.write("Your BMI: " + bmi + "<br>");
    document.write("Your state: ");

    // deciding your state

    if (bmi < 15){
            document.write("Very severely underweight ");
    } else if  (15 <= bmi && bmi < 16){
            document.write("Severely underweight ");
    } else if  (16 <= bmi && bmi < 18.5){
            document.write("Underweight ");
    } else if  (18.5 <= bmi && bmi < 25){
            document.write("Normal (healthy weight) ");
    } else if ( 25 <= bmi && bmi < 30){
            document.write("Overweight ");
    } else if  (30 <= bmi && bmi < 35){
            document.write("Obese Class I (Moderately obese) ");
    } else if  (35 <= bmi && bmi < 40){
            document.write("Obese Class II (Severely obese) ");
    } else if  (40 <= bmi && bmi < 45){
            document.write("Obese Class III (Very severely obese)");
    } else if ( 45 <= bmi && bmi < 50){
            document.write("Obese Class IV (Morbidly Obese) ");
    } else if( 50 <= bmi && bmi <= 60){
            document.write("Obese Class V (Super Obese) ");
    } else if  (60 < bmi){
            document.write("Obese Class VI (Hyper Obese) ");
    } else {
            document.write("Some not handlet error for BMI " + bmi);
    }           
}
function menu(){
    // menu example
    let choice;
    // getting input from user and casting to Number
    do{
        choice = Number(prompt("Choose your action: \n 1. show date \n 2. run BMI program"));
        // Controling that choice is number
        if (!isNaN(choice)){ 
            // Controling that choice is 1 or 2
            if (choice == 1 | choice == 2){
                break;}}

    }while(true);
    // example of switch, choice is responsible for what function will be called
    switch(choice){
        case 1:{
            calculate_bmi();
        }
        case 2:{
            show_date_example();
        }
    }
}

menu(); // calling menu function