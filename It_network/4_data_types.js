
// String
    let s1 = "Some text";
    let s2 = "Another text";
    // If you want to use quotes in Strings
    let s3 = "Some quotes ' ' ' ' ' ' ' ";
    // or
    let s4 = "some quotes \" \" \" ";
    let s5 = "Special symbols: \a \b \f \n \r \t \v \\ \' \" \0 "

    // Indexex
    let x = "Text";
    document.write(x[0]); // Prints first index of x
    document.write(x[3]); // prints 4 index of x
    document.write("<br>");

    // length - returns length of String or list

    document.write(x.length + "<br>");
                

    // trim - removes all spaces before and after String

    x = "   Hello World   ";
    document.write(x.trim() + "<br>");
                    
    // replace - replace argument in String

    x = "PHP is best!";
    document.write(x + "<br>");
    x = x.replace("PHP", "JavaScript");
    document.write(x + "<br>");
                
    // toUpperCase and toLowerCase - change all symbols to lower/upper case

    let s = "String";
    document.write("uppercase: " + s.toUpperCase() + "<br>");
    document.write("lowercase: " + s.toLowerCase() + "<br>");

    // concat - sum two Strings

    s1 = "Hello ";
    s2 = "World";
                
    // Same result as s1 + s2
    document.write(s1 + s2 + "<br>");
    document.write(s1.concat(s2) + "<br>");

    // substring and substr - returns substrings

    s = "Some Sting";
    document.write(s.substr(2, 6) + "<br>"); // returns 6 symbols from index 2
    document.write(s.substring(2, 6) + "<br>"); // returns symbols from index 2 to 6

    // split - splits String by argument and returns list

    s = "Some text with spaces";
    document.write(s.split(" ") + "<br>");
                
    // IndexOf - returns first index of argument in String

    document.write("First index of e:" +s.indexOf("e") + "<br>");

    // lastIndexOf - returns last index of argument in String

    document.write("Last index of e:" + s.lastIndexOf("e") + "<br>");

    // search - returns the index of argument at itnetwork there is poor description

    document.write("Return the index of argument:" + s.search("te") + "<br>");

// Number
    // 2 methods how to write numbers

    let n1 = 10;
    let n2 = 10e5;

    document.write("First method: " + n1 + "<br>");
    document.write("Second method: " + n2 + "<br>");
                

    // isNan(is Not a Number) - returns true of false if object isn't number

    // two examples

    document.write("First example of String:" + isNaN("Some String") + "<br>");
    document.write("First example of Number:" + isNaN(58e15) + "<br>");

    // toPrecision - remove unnecesarry values set by argument

    let n = 50.42424
    document.write("Before toPrecision:" + n + "<br>");
    document.write("After toPrecision:" + n.toPrecision(2) + "<br>");


    // toString - returns value as String

    n = 100;
    document.write("200" + n.toString() + "<br>");

    // toExponential - returns exponential Number

    document.write("Normal number: " + n + "<br>");
    document.write("Exponential number: " + n.toExponential() + "<br>");

    // Number.MAX_VALUE - returns biggest number in JavaScript

    document.write("Biggest number in JavaScript: " + Number.MAX_VALUE + "<br>");

    // Number.MIN_VALUE - returns smallest number in JavaScript

    document.write("Smallest number in JavaScript: " + Number.MIN_VALUE + "<br>");
            
// Boolean - only true or false

// Null - not created object

// Undefined - not a object