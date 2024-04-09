// RGB Colors

//Variables to Store HTML Elements
let previewBtnE1 = document.getElementById("previewBtn");
let redInE1 = document.getElementById("redIn");
let greenInE1 = document.getElementById("greenIn");
let blueInE1 = document.getElementById("blueIn");
let rgbStringOutE1 = document.getElementById("rgbStrOut");
let displayE1 = document.getElementById("display");
let widthInE1 = document.getElementById("widthIn");
let heightInE1 = document.getElementById("heightIn");

// Event Listeners
// document.getElementById("previewBtn").addEventListener("click", rgbPreview);
redInE1.addEventListener("change", rgbPreview);
greenInE1.addEventListener("change", rgbPreview);
blueInE1.addEventListener("change", rgbPreview);
widthInE1.addEventListener("change", changeSize);
heightInE1.addEventListener("change", changeSize);

// Event Function
function changeSize() {
  // Input: width and height
  let wValue = +widthInE1.value;
  let hValue = +heightInE1.value;

  // Validate
  // Check wValue
  if (wValue < "50px") {
    wValue = 50;
    widthInE1.value = 50;
  } else if (wValue > 200) {
    wValue = 200;
    widthInE1.value = 200;
  }

  // Check hValue
  if (hValue < 50) {
    hValue = 50;
    heightInE1.value = 50;
  } else if (hValue > 200) {
    hValue = 200;
    heightInE1 = 200;
  }

  // Process

  // Output
  displayE1.style.width = widthInE1.value;
  displayE1.style.height = heightInE1.value;
}
function rgbPreview() {
  // Input: get red green blue values
  let rValue = +redInE1.value;
  let gValue = +greenInE1.value;
  let bValue = +blueInE1.value;

  // Validate Colors (constrain colors between 0 -255)
  // Chack rValue
  if (rValue < 0) {
    rValue = 0;
    redInE1.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInE1.value = 255;
  }

  // Check gValue
  if (gValue < 0) {
    gValue = 0;
    greenInE1.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInE1.value = 255;
  }

  // Check bValue
  if (bValue < 0) {
    bValue = 0;
    blueInE1.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInE1.value = 255;
  }

  // Process: build rgb string rbg(___, ___, ___)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output: display rgb string and update the color preview
  rgbStringOutE1.innerHTML = rgbString;
  displayE1.style.background = rgbString;
}
