// defining functions

function hello_world(){
    document.write("Hello World!" + "<br>");
}
function hello_user(user){
    document.write("Hello " + user + "<br>");
}
function get_String(){
    return "Some string to be returned.";
}
function print(a, b){
    document.write("a: " + a + "<br>");
    document.write("b: " + b + "<br>");
}

hello_world(); // calling function hello_world
hello_user("Petr"); // calling function hello_user with argument "Petr"
document.write(get_String() + "<br>"); // printing value that has been returned
print(7, 9); // calling function print that takes 2 arguments
print(12); // calling same function, but only with one argument

// function in variable

let variable_with_function = hello_world; // setting function as value of variable

variable_with_function(); // calling variable with function

// anonymous function

variable_with_function = function(name){  // this function hasn't name
    return "Hello " + name + "<br>";
}
document.write(variable_with_function("Petr")); // calling anonymous function

// callback function

function callback_function(func) {
    func(); // calling function from function
}

callback_function(print(12)); // calling callback function