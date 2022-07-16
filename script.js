'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => eurToUsd * mov);

// const movementsUSD = movements.map(function (mov) {
//   return eurToUsd * mov;
// });
// console.log(movements);
// console.log(movementsUSD);

const movementsDescriptions = movements.map(function (mov, i) {
  console.log(
    `Movement ${i + 1}: You have ${
      mov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(mov)}`
  );
});

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
// for (const [i, el] of movements.entries()) {
//   if (el > 0) {
//     console.log(`You have deposited ${el} dollars`);
//   } else {
//     console.log(`You have withdrewal ${Math.abs(el)} dollars`);
//   }
// }

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`${i + 1}: You have deposited ${mov} dollars`);
//   } else {
//     console.log(
//       `${i + 1}: You have withdrewal ${Math.abs(mov)} dollars ${arr}`
//     );
//   }
// });

/*
/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice() Not MUTATES
console.log(arr.slice(1, 4)); //"b","c","d"

// splice() Same as slice but this MUTATES and useful when removing arrays. Also last argument is the position of an element in array.
console.log(arr.splice(3)); //'d','e'

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

// reverse() It reverses the array and MUTATES the orginal
console.log(arr2.reverse());

// concat() Not MUTATES, adds two arrays together
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join() Not MUTATES, joins arrays and results in a strings
console.log(letters.join(' - '));
console.log(letters);

arr = [23, 11, 64];

// at() Not MUTATES, works on string as well.  Good for chaining method
console.log(arr.at(-1)); //63
console.log(arr.slice(-1)[0]);
console.log(arr[arr.length - 1]);
*/

/* Coding Challenge1 ----------------------------------------------
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];

const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

function checkDogs(dogsJulia, dogsKate) {
  const juliaCorrected = dogsJulia.slice().splice(1, 2);
  console.log(juliaCorrected);
  const dogs = juliaCorrected.concat(dogsKate);
  dogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adults, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy🐶`);
    }
  });
}

checkDogs(julia1, kate1);
checkDogs(julia2, kate2);
*/
