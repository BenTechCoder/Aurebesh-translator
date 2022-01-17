let outputEl = document.querySelector(".output-el");
//let clickContainer = document.querySelector(".click-container")
let clickContainerLength = document.querySelectorAll(".click-container").length;
let clickContainer = document.querySelector(".click-container")
let inputEl = document.getElementById("input-el")
let aOutput = document.getElementById("aurebesh-output")
let translateBtn = document.getElementById("translate-btn")


function renderOutput(str) {
    outputEl.innerHTML += str;
}

// Button refactor 9/14/2021
let alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
clickContainer.innerHTML = alphabetArr.map((str) => `<button onclick="renderOutput('${str}')" class="aurebesh aurebesh-btns">${str}</button>`).join("");

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

window.addEventListener("keydown", function(e) {
    if (e.key.includes('Enter')) {
        aOutput.innerHTML = inputEl.value;
        inputEl.value = ""
    }
  
})

