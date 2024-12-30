let remainder;
let sum = 0;
let str='Sum of numbers:';
for (i = 1; i <= 10; i++){
    remainder = i % 2;
    if (remainder != 0) {
        sum=sum+i
        str=str+' '+i;
        // console.log(i)
    }  

}
// console.log(sum)
str=str+' is :'+sum;
console.log(str)
