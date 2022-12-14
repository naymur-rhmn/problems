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
        break;
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

// another way to calculate prime number
function isPrimeNumber(num) {
  // const sqrtNumber = Math.floor(Math.sqrt(num));
  let prime = num != 1;

  for (let i = 2; i < num; i++) {  //i < sqrtNumber
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
console.log(isPrimeNumber(1));

// another simple way to calculate prime number
function isPrimeNumb(n) {
  for (var i = 2; i < n; i++) { // it will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
    if (n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
  }
  return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
}
console.log(isPrimeNumb(2));



// Problem -2 : Get the passengers' names using the data provided 
// Bonus Part (a)- Return vegetarians/vegans
// Bonus Part (b)- Sort passengers by the number of connected flights in descending order

const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
  {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
  {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

// Main Question: Get the passengers' names using the data provided 
const passengerName = passengers.map(passenger => passenger.passengerName);
console.log(passengerName);


// Bonus Part (a)- Return vegetarians/vegans
const vegetarians = passengers.map(passenger => {
  if (passenger.isVegetarianOrVegan) {
    return passenger;
  }
})
console.log(vegetarians);


// Bonus Part (b)- Sort passengers by the number of connected flights in descending order
const discendingOrder = vegetarians.sort((passengerA, passengerB) => passengerB.connectedFlights - passengerA.connectedFlights);
console.log(discendingOrder);