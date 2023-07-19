/**
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program.
 * @author: Jhenyffer Cristo Marques.
 */
function convertGrade() {
  var grade = parseInt(document.getElementById("mark").value);
  console.log(grade);

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
