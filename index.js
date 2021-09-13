let outputEl = document.querySelector(".output-el");
//let clickContainer = document.querySelector(".click-container")
let clickContainerLength = document.querySelectorAll(".click-container").length;
let clickContainer = document.querySelectorAll(".click-container")
let inputEl = document.getElementById("input-el")
let aOutput = document.getElementById("aurebesh-output")
let translateBtn = document.getElementById("translate-btn")
function renderOutput(str) {
    let output = str;
    outputEl.innerHTML += output;
}

function deleteOutputAll(elem) {
    elem.textContent = " ";
}

function backspace() {
   let currentstr = outputEl.innerHTML;
  let slicer = currentstr.substring(0, currentstr.length - 1);
   outputEl.textContent = slicer;
}

function space() {
    outputEl.textContent += " ";
}

translateBtn.addEventListener("click", function() {
    aOutput.innerHTML = inputEl.value;
    inputEl.value = ""
})