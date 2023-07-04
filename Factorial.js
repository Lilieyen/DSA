//Given an Integer 'n', find the factorial of that integer
function factorial(n) {
    let result = 1 // both factorial of 0 and 1 is 1
    for (let i = 2; i<=n; i++) { //get product of all number less than or equal to n
        result = result * i // in each iteration we multiply the current result with i
    }
    return result
}

console.log(factorial(5))
console.log(factorial(10))
console.log(factorial(4))