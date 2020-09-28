// create a function to do the math based on the service
function converted(feet, inches) {
  let meters = feet * 0.3048 + inches * 0.0254;
  meters = meters.toFixed(2);
  return meters;
}

// create a function to click/convert
function clicked() {
  console.log('clicked');

  let feet_value = feet_field.value;
  feet_value = parseFloat(feet_value);

  let inches_value = inches_field.value;
  inches_value = parseFloat(inches_value);

  meters = converted(feet_value, inches_value);
  meters_field.value = meters;
}

// Get fields
const feet_field = document.querySelector('.feet');
const inches_field = document.querySelector('.inches');
const meters_field = document.querySelector('.meters');
const convert = document.querySelector('.button');

// listen for changes
convert.addEventListener('click', clicked);
