// I used the Metric System to calcuate the BMI
function BMIcalculator(weightKg, heightCm) {
  let heightMeters = heightCm / 100;

  let bmi = weightKg / (heightMeters * heightMeters); 

  return bmi.toFixed(2);
}

// I used my actual height and weight here 😁
let bmi = BMIcalculator(43.9, 149.86);

console.log(`Body Mass Index: ${bmi}`);
// output is BMI: 19.55