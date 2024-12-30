let f=1;
let s=1;
let sum=s+f;
let str='First 10 fibonacci number are:'+f+' '+s+' '+sum;

// console.log(f);
// console.log(s);
// console.log(sum);
for (let i = 0; i <= 10; i++) {
    f=sum+s;
    str=str+' '+f;
    s=sum;
    sum=f;
}
console.log(str);