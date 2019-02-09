
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

function print_table(max_x, max_y){
    // prints table with values    
    // values are from 0 to max_x and max_y
    document.write('<table border="1">');
    for (let y = 0; y <= max_y; y++){
        document.write("<tr>");
        for (let x = 0; x <= max_x; x++){
            document.write("<td>");
            document.write(y+x);
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function my_pow(base, exponent){
    // returns powered base by exponent
    // using for loop
    let temp = 1;
    for (let i = 1; i <= exponent; i++){
        temp = temp * base; 
    }
    return temp;
}
function forever(){
    // This function prints forever Knock! and slows device
    // Just example of while true
    while (true){
        document.write("Knock!");
    }
}

// calling functions

document.write(my_pow(2, 3));
let max_x = get_x();
let max_y = get_y();
print_table(max_x, max_y);
