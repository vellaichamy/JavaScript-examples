// Import stylesheets
import './style.css';

// Write Javascript code!
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person('Ugra');
console.log('==========>', object);

// A Singleton is an object
var object = new function(){
  this.name = "Ugra";
}
console.log('==========>', object);


const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
