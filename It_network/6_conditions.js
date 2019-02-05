
let d = new Date(); // creating Date object

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

