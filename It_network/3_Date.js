let d = new Date(); // creates variable d with Date object inside

document.write("Day in month: " + d.getDate() + "<br>"); // prints what day in month is
document.write("Month: " + (d.getMonth()+1) + "<br>"); // prints what month
document.write("Year: " + d.getFullYear() + "<br>"); // prints year
document.write("Hours: " + d.getHours() + "<br>"); // prints hours
document.write("Minutes: " + d.getMinutes() + "<br>"); // prints minutes
document.write("Seconds: " + d.getSeconds() + "<br>"); // prints seconds
document.write("Miliseconds from 1.1.1970: " + d.getTime() + "<br>"); // prints how many miliseconds have passed from 1.1.1970
document.write("Full date: " + d + "<br>"); // Prints full date
