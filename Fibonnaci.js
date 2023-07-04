//Given a number 'n', find the first 'n' elements of the fibonnacci sequence
function fibonnacci(n) {
const fibo = [0,1]
for (let i = 2; i<=n; i++) { //populate the remaining number of n elements from the 3rd element till n while satisfying the condition that every number shoulbe the sum of the 2 previous numbers
    fibo[i] = fibo[i-1] + fibo[i-2]
}
return fibo
}

console.log(fibonnacci(5))
console.log(fibonnacci(8))