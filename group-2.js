// Stacey Li

/**
Object.keys()

Without using the native “Object.keys()” method of JavaScript,
compose a function titled “grabKeys” that will take in an object and
return all of the keys of the key:value pairs of that object.

@params takes in an object
@returns all the keys in the object
**/

function grabKeys(obj){
  let keyArray = [];
  for (let key in obj){
    keyArray.push(key);
  }
  return keyArray;
}

/**
Object.values()

Without using the native “Object.values()” method of JavaScript,
compose a function titled “grabValues” that will take in an object and
return all of the values of the key:value pairs of that object.

@params takes in an object
@returns all the values in the object
**/

function grabValues(obj){
  let valArray = [];
  for (let key in obj){
    valArray.push(obj[key]);
  }
  return valArray;
}

/**
push()

Without using the native “Array.prototype.push” method of JavaScript,
compose a function titled “myPush” that will take in an array of elements
as well as an elementToAdd and append that element to the end of the array.

@params takes in an array of elements and an element to add
**/

function myPush(arr, elementToAdd){
  arr[arr.length] = elementToAdd
}

// TESTING
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const animals = ['pigs', 'goats', 'sheep'];
const animals1 = ['pigs', 'goats', 'sheep'];

myPush(animals, "cow");
myPush(animals, "tree");

/* native func */
animals1.push("cow");
animals1.push("tree");

console.log("Testing grabKeys");
console.log(Object.keys(person));   /* native func */
console.log(grabKeys(person));
console.log("Testing grabValues");
console.log(Object.values(person)); /* native func */
console.log(grabValues(person));
console.log("Testing myPush");
console.log(animals1);              /* native func */
console.log(animals);
