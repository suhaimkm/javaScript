let marks = 70;
let grade;
let result;

if (marks >= 90) {
  grade = "A";
  result = `${marks}. you scored distinctoin`;
} else if (marks >= 70) {
  grade = "B";
  result = `${marks}. you scored first class`;
} else if (marks >= 50) {
  grade = "C";
  result = `${marks}. you scored second class`;
} else if (marks >= 40) {
  grade = "D";
  result = `${marks}. you scored third class`;
} else {
  result = `${marks}. you failed`;
}
switch (grade) {
  case "A":
    console.log(result);
    break;
  case "B":
    console.log(result);
    break;
  case "C":
    console.log(result);
    break;
  case "D":
    console.log(result);
    break;
  default:
    console.log(result);
    break;
}
