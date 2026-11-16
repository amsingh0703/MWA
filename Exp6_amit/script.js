
let fruits = ["Apple", "Banana"];

function display() {
    document.getElementById("array").innerHTML =
        "Array: " + fruits.join(", ");
}

function addEnd() {
    fruits.push("Mango");
    display();
}

function removeEnd() {
    fruits.pop();
    display();
}

function removeStart() {
    fruits.shift();
    display();
}

function addStart() {
    fruits.unshift("Orange");
    display();
}
