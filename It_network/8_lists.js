// crating get_x and get_y functions 

function get_x(){
    // returns max_x from user
    let max_x;
    do {
        max_x = prompt("write maximum of colums: ");
        } while(isNaN(max_x) || max_x < 0);
    return max_x
}

function get_y(){
    // returns max_y from user
    let max_y;
    do {
        max_y = prompt("write maximum of rows: ");
        } while(isNaN(max_y) || max_y < 0);
    return max_y;
}

let bitmap = new Array(); // declaring bitmap variable
let temp;   // declaring temp variable

let max_x = get_x(); // getting max_x from user
let max_y = get_y(); // getting max_y from user

for (let i = 0; i <= max_y; i++){
    temp = new Array();
    for (let ii = 0; ii <= max_x; ii++){
        temp[ii] = Math.round(Math.random());
    }
    bitmap[i] = temp;
}

// printing content of bitmap list into table

document.write('<table border="1">');
for (let i = 0; i <= bitmap.length - 1; i++){
    document.write("<tr>");
    for (let ii = 0; ii <= bitmap[i].length - 1; ii++){
        document.write("<td>");
        document.write(bitmap[i][ii]);
        document.write("</td>"); 
    }
    document.write("</tr>");
}
document.write("</table>");

let numbers = [5, 53, 33]; // creating list with values [5, 53, 33]
numbers.push("New value on end"); // adding value "New value on end" to end of the list
numbers.unshift("New value on start"); // adding value "New value on start" to start of the list

document.write(numbers + "<br>"); // printing list with 2 new values

numbers.splice(1, 3); // deleating values from 1 to 3 index

document.write(numbers + "<br>"); // printing list with deleated values

numbers = [5, 3, 2, 1, 4, 6, 8, 7]; // giving to numbers new values

document.write(numbers + "<br>"); // printing list

numbers.sort(); // sorting list

document.write("sorted list: " + numbers + "<br>"); // printing sorted list

numbers.reverse(); // reversing list

document.write("reversed list: " + numbers + "<br>"); // printing reversed list
