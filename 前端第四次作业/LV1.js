// 循环
var n=prompt('Enter a last number');
function sumTo(n){
    let sum1 = 0;
    for (let i = 0;i <= n;i++){
        sum1 += i;
    }
    return sum1;
}
console.log(sumTo(n));

// 递归
const sumTo = n =>(n == 1) ? n : (n+sumTo(n-1));
console.log(sumTo(/*这里写进一个数可以正常运行，但是如果用prompt接收用户输入的数n则会出bug*/));