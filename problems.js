// =================================== My Daily Task ====================================
// ==============================Solve (1) Javascript problem============================

// problem-1: Write a function that tests if a number, n, is a prime number.

// const num = parseInt(prompt('Enter any number :'))
const num = 5;
let isPrime = true;

primeNumber(num);
function primeNumber(num) {
  if (num === 1) {
    console.log('Its positive divisors are 1 and itself.');
  }
  else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(num + ' is a prime number');
    }
    else {
      console.log(num + ' is not a prime number');
    }
  }
}