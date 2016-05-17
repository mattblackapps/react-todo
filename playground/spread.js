// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Jes, John'];
// var groupB = ['Dingo'];
// var final = [...groupB, 3, ...groupA, ...groupB];
//
// console.log(final);

var personOne = ['Jizz', 23];
var personTwo = ['Dingo', 69];
var persons = [personOne, personTwo];

// Hi Jizz, you are 23

function greeting (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

persons.forEach((person) => {
  greeting(...person);
})


var names = ['Mike', 'Ben'];
var final = ['Matt', ...names];
// Hi Matt

final.forEach((name) => {
  console.log('Hi ' + name);
})
