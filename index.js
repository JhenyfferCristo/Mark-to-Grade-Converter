/**
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program.
 * @author: Jhenyffer Cristo Marques.
 */
//Mark to Grade converter function
function convertGrade() {
  var grade = parseInt(document.getElementById("mark").value);

  if (isNaN(grade)) {
    document.getElementById("result").innerHTML =
      "Invalid input. Please enter a number between 0 and 100.";
    return;
  } else if (grade >= 90) {
    grade = "A";
  } else if (grade >= 80) {
    grade = "B";
  } else if (grade >= 70) {
    grade = "C";
  } else if (grade >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }
  document.getElementById("result").innerHTML = `Your grade is ${grade}`;
}

//Temperature Converter function
function convertTemperature() {
  const fahrenheit = parseFloat(document.getElementById("temp").value);
  const tempInCelcius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById(
    "tempCelcius"
  ).innerHTML = `Temperature in Celcius is: ${tempInCelcius}`;
  var tempInKelvin = tempInCelcius + 273.15;
  document.getElementById(
    "tempKelvin"
  ).innerHTML = `Temperature in Kelvin is: ${tempInKelvin}`;
}
