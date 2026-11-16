
// Synchronous Execution
function sync() {
    let output = document.getElementById("output");
    output.innerHTML = "";

    output.innerHTML += "First Task<br>";
    output.innerHTML += "Second Task<br>";
    output.innerHTML += "Third Task<br>";
}

// Asynchronous using Promise
function asyncPromise() {
    let output = document.getElementById("output");
    output.innerHTML = "Start<br>";

    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise Completed");
        }, 2000);
    });

    promise.then(result => {
        output.innerHTML += result + "<br>";
        output.innerHTML += "End";
    });
}

// Asynchronous using async/await
async function asyncAwait() {
    let output = document.getElementById("output");
    output.innerHTML = "Start<br>";

    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });

    output.innerHTML += "Async/Await Completed<br>";
    output.innerHTML += "End";
}
