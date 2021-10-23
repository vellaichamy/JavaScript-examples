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

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
