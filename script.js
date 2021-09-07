function handlerClick () {

    console.log("Click");

    let input$ = document.createElement("input");
    input$.id = "input";

    document.querySelector("#add").textContent = "";
    document.querySelector ( "#add").appendChild(input$);
    input$.focus();

    input$.addEventListener("keydown", handlerKeyDown);

    document.querySelector("#add").removeEventListener("click", handlerClick);
}

function handlerKeyDown(e) {
    if (e.keyCode === 13) {
        console.log("handlerKeyDown")

        document.querySelector ( "#add" ).textContent = e.target.value;

        document.querySelector("#add").removeEventListener("keydown", handlerKeyDown);
        document.querySelector("#add").addEventListener("click", handlerClickOnTask);

        document.querySelector ( "#add" ).id = "";

        let newAdd$ = document.createElement("li");
        newAdd$.textContent = "Click to create a new task...";
        newAdd$.id = "add";
        document.querySelector("ul").appendChild(newAdd$);

        newAdd$.addEventListener("click", handlerClick);
    }
}

let add$ = document.querySelector ( "#add" );
add$.addEventListener("click", handlerClick);

function handlerClickOnTask(e) {
    if (e.target.className === "del" || e.target.className === undefined) {
        e.target.className = "";
    } else {
        e.target.className = "del"
    }

}

