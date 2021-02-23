// Stacey Li
//
// Object.keys()
//
// Without using the native “Object.keys()” method of JavaScript,
// compose a function titled “grabKeys” that will take in an object and
// return all of the keys of the key:value pairs of that object.
function grabKeys(obj){
  let keyArray = [];
  for (let key in obj){
    keyArray.push(key);
  }
  return keyArray;
}

// Object.values()
//
// Without using the native “Object.values()” method of JavaScript,
// compose a function titled “grabValues” that will take in an object and
// return all of the values of the key:value pairs of that object.

function grabValues(obj){
  let keyArray = [];
  for (let key in obj){
    keyArray.push(obj[key]);
  }
  return keyArray;
}

// push()
//
// Without using the native “Array.prototype.push” method of JavaScript,
// compose a function titled “myPush” that will take in an array of elements
// as well as an elementToAdd and append that element to the end of the array.

function myPush(arr, elementToAdd){
  arr[arr.length] = elementToAdd
}

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const animals = ['pigs', 'goats', 'sheep'];
// animals.push("cow");
myPush(animals, "cow");
myPush(animals, "tree");

const animals1 = ['pigs', 'goats', 'sheep'];
animals1.push("cow");
animals1.push("tree");

console.log(Object.keys(person));
console.log(grabKeys(person));
console.log(Object.values(person));
console.log(grabValues(person));
console.log(animals1);
console.log(animals);
