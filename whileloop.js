let f=1;
let s=1;
let sum=s+f;
let str='';

// console.log(f);
// console.log(s);
// console.log(sum);
let i = 3;
while (i <= 10) {
    f=sum+s;
    str=str+' '+f;
    s=sum;
    sum=f;
    i++;
}
console.log(`1 1 2${str}`);