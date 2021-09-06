function handlerClick () {

    console.log("Click");

    let input$ = document.createElement("input");
    input$.id = "input";
    input$.defaultValue = "Create new task...";

    document.querySelector("#add").textContent = "";
    document.querySelector ( "#add").appendChild(input$);

    input$.addEventListener("keydown", handlerKeyDown);

    document.querySelector("#add").removeEventListener("click", handlerClick);
}

function handlerKeyDown(e) {
    if (e.keyCode == 13) {
        console.log("handlerKeyDown")

        document.querySelector ( "#add" ).textContent = e.target.value;

        document.querySelector("#add").removeEventListener("keydown", handlerKeyDown);

        document.querySelector ( "#add" ).id = "";

        let newAdd$ = document.createElement("li");
        newAdd$.textContent = "Create new task...";
        newAdd$.id = "add";
        document.querySelector("ul").appendChild(newAdd$);
        newAdd$.addEventListener("click", handlerClick);
    }
}

let add$ = document.querySelector ( "#add" );
add$.addEventListener("click", handlerClick);

