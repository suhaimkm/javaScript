let n = 7; // 2 to 6
let prime = false;
let stop = n / 2;
for (let i = 2; i < n; i++) {
  let remainder = n % i;
  console.log(i);
  if (remainder == 0 ) {
    prime = false;
    break;
  } else if( i > stop){
    prime = true 
    break;
  }
}
if (prime) {
  console.log(`${n} is a prime number`);
} else {
  console.log(`${n} is not a prime number`);
}
