const number = document.querySelectorAll('[data-number]');
const clearButton = document.getElementById("clear");






number.addEventListener("click", click());


function click() {
    console.log("hi");
}











clearButton.addEventListener("click", clearCalculator);
function clearCalculator() {
    window.location.reload();
}

