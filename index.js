// Import stylesheets
import './style.css';

// Write Javascript code!
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object1 = new Person('Ugra');
console.log('==========>', object1);

// A Singleton is an object
var object2 = new (function () {
  this.name = 'Ugra';
})();
console.log('==========>', object2);

// Call, Apply and Bind
var person1 = { firstName: 'Ugra', lastName: 'Vellai' };
var person2 = { firstName: 'Rithu', lastName: 'Vellai' };

// call
function funCall(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}

funCall.call(person1, 'Hello', 'How are you?');
funCall.call(person2, 'Hello', 'How are you?');

// Apply
function funcApply(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}

funcApply.apply(person1, ['Hello', 'How are you?']);
funcApply.apply(person2, ['Hello', 'How are you?']);

// Bind
function funcBind(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}

var bindPerson1 = funcBind.bind(person1);
var bindPerson2 = funcBind.bind(person2);
bindPerson1('Hello', 'How are you?');
bindPerson2('Hello', 'How are you?');

// First order function
const firstOrder = () => console.log('I am a first order function!');
firstOrder();

// Higher order function
const firstOrderFunc = () => console.log('Hello, I am a Higher order function');
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

// Unary function
const unaryFunction = (a) => console.log(a + 10);
unaryFunction(10);

// Currying function
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3));
const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
console.log(curryUnaryFunction(1));
console.log(curryUnaryFunction(1)(2)(8));
console.log(curryUnaryFunction(1)(2)(3));
console.log(curryUnaryFunction(2)(4)(6));

// Pure function
// Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);

// Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);
console.log(impureAddNumber(6));
console.log(numberArray);
console.log(pureAddNumber(7)(numberArray));
console.log(numberArray);

// Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords,  The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

function somemethod() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}

// somemethod();

// Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,

const memoizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log('Fetching from cache');
      return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
    } else {
      console.log('Calculating result');
      let result = value + 10;
      cache[value] = result;
      return result;
    }
  };
};

const addition = memoizAddition();
console.log(addition(10));
console.log(addition(10));

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
