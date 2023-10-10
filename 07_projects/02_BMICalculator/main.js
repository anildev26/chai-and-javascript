const form = document.querySelector('form');

form.addEventListener('submit', function (myclick) { // Important - Using submit event inside form
  myclick.preventDefault(); // Preventing anything that defaulty happens when you click on submit such as data get sent on get/post method and to stop that for while we use this function

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `<span>Please enter valid height not ${height}</span>`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span>Please enter valid weight not ${weight}</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>You are Under Weight: ${bmi}</span>`;
    } else if (bmi < 18.6 && bmi > 24.9) {
      result.innerHTML = `<span>You are in Normal Range: ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>You are Overweight: ${bmi}</span>`;
    }
    // result.innerHTML = `<span>Your BMI = ${bmi}</span>`;
  }
});
