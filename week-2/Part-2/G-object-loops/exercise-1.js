// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };

function gradeMoreThan18(student){
  return Object.entries(student).filter( s => s[1] > 18)
}

gradeMoreThan18(studentGrades);

console.log(gradeMoreThan18(studentGrades))
  
  // Prints
  // TOM - 20
  // ABDUL - 19