/*
let h1_tags = document.getElementsByTagName("h1"); // getting all elements with h1 tag
let some_ids = document.getElementById("some");
let some_class = document.getElementsByClassName("some_class");
let name = document.getElementsByName("down");
let name2 = document.getElementsByTagNameNS("down");

function for_each(list){ 
    for (item of list){
        document.write(item.innerText + ", ");
        document.write(item.hasAttributes());
        }
    document.write("<br>");
    }

document.write("******************<br>");
for_each(h1_tags);
for_each(some_ids);
for_each(some_class);
*/

function Click(){
    if (document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "green";
        //document.getElementById("button").style.backgroundColor="black";
        document.getElementById("button").innerHTML = '<img src="images/light_on.jpg" height=300px width=300px>';
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        //document.getElementById("button").style.backgroundColor= "white";
        document.getElementById("button").innerHTML = '<img src="images/light_off.jpg" height=300px width=300px>';
    }
}


