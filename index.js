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
var employee1 = { firstName: 'Ugra', lastName: 'Vellai' };
var employee2 = { firstName: 'Rithu', lastName: 'Vellai' };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}

invite.call(employee1, 'Hello', 'How are you?');
invite.call(employee2, 'Hello', 'How are you?');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
