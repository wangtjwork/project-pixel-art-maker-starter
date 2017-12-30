// Select color input
let penColor = 'black';

const colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener("change", choosePenColor, false);

function choosePenColor (event) {
  penColor = event.target.value;
}

// Select size input

const heightInput = document.querySelector('#input_height');
const widthInput = document.querySelector('#input_width');
const submitButton = document.querySelector('input[type="submit"]');
const pixelCanvas = document.querySelector('#pixel_canvas');

submitButton.addEventListener('click', makeGrid);

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
// Your code goes here!
  event.preventDefault();
  let height = heightInput.value;
  let width = widthInput.value;
  console.log(height + "," + width);
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }

  for (let i = 0; i < height; i++) {
    let newRow = document.createElement("tr");
    for (let j = 0; j < width; j++) {
      let newTd = document.createElement("td");
      newRow.appendChild(newTd);
    }
    pixelCanvas.append(newRow);
  }
}
