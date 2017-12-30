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

submitButton.addEventListener('click', makeGrid);

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
// Your code goes here!
  event.preventDefault();
  let height = heightInput.value;
  let width = widthInput.value;
  console.log(height + "," + width);
}
