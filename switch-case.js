let n = 12;
let remainder = n % 3;

switch (remainder) {
  case 0:
    console.log("The number is divisible by 3");
    break;
  case 1:
    console.log("The number is not divisible by 3");
    break;

  default:
    console.log("The number is not divisible by 3");
    break;
}
