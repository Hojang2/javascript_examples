let my_table;
let x = 5;
let y = 3;

function create_cell(){
    let td = document.createElement("td");
    let td_input = document.createElement("input");

    td_input.type = "text";
    td_input.onfocus = function () {
        active_cell = this;
    }

    td.appendChild(td_input);

    return td;
}
function create_table(){
    my_table = document.createElement("table");
    document.body.appendChild(my_table);
    
    for (let i = 0; i < y; i++){
        let tr = document.createElement("tr");
        my_table.appendChild(tr);
        for (let ii = 0; ii < x; ii++){
            tr.appendChild(create_cell());
        }
    }
}

window.onload = function () {create_table();}


