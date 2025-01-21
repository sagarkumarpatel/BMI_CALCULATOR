// script.js
document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get weight and height input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  
    // Check if inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').innerText = 'Please enter valid inputs.';
      return;
    }
  
    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);
  
    // Display the result with a category
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
  
    document.getElementById('result').innerText = `Your BMI is ${bmi} (${category}).`;
  });
  