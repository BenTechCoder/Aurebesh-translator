let outputEl = document.querySelector(".output-el");
//let clickContainer = document.querySelector(".click-container")
let clickContainerLength = document.querySelectorAll(".click-container").length;
let clickContainer = document.querySelectorAll(".click-container")


function renderOutput(str) {
    let output = str;
    outputEl.textContent += output;
}

function deleteOutputAll() {
    outputEl.textContent = " ";
}

function backspace() {
   let currentstr = outputEl.innerHTML;
  let slicer = currentstr.substring(0, currentstr.length - 1);
   outputEl.textContent = slicer;
}

function space() {
    outputEl.textContent += " ";
}