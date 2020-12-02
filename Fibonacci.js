// Dãy Fibonacci
var i;
var Fibonacci = [];
var A = [];
A[0] = 1;
A[1] = 1;
for (i=2;i<=10;i++)
{
    A[i] = A[i-1] + A[i-2];
}
Fibonacci.push(A);
console.log("Dãy Fibonacci: ");
console.log(Fibonacci);
