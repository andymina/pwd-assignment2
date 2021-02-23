// Rachel Tieu

/**
@func: myEach() takes in an array of elements and executes a callback function on each element in the array

@param: callback: a func that is applied to each element in the array
  callback is invoked with 3 arguments:
    1. value of the element
    2. the index of the element
    3. the Array object being traversed

@return myEach() returns undefined

**/

Array.prototype.myEach = function (callback){
  //iterate through the array
  for(let i = 0; i < this.length; i++){
    //apply callback function to each elem in the array
    callback(this[i], i, this);
  }
  return undefined;
}

/**
@func: mySome() will take in an array of elements and execute a call back function on each of the elements until it
      finds one where callback returns true

@param: callback: a func that is applied to each element in the array
  callback is invoked with 3 arguments:
    1. value of the element
    2. the index of the element
    3. the Array object being traversed

@return: returns true if the callback function returns true for at least one element in the array, otherwise
        it returns false
**/

Array.prototype.mySome = function (callback){
  //iterate through the array
  for(let i = 0; i < this.length; i++){
    //if the callback returned true, function immediately returns true
    if(callback(this[i], i, this)){
      return true;
    }
  }
  //if the callback doesnt return true for any element, return false
  return false;
}


/**
@func: myEvery() takes in an array of elements and execute a function on each of the elements in the array, until
      it finds one where callback returns a false value

@param: callback: a func that is applied to each element in the array
  callback is invoked with 3 arguments:
    1. value of the element
    2. the index of the element
    3. the Array object being traversed

@return: returns false if the callback function returns false for at least one element in the array, otherwise
        it returns true
**/

Array.prototype.myEvery = function (callback){
  //iterate through the array
  for(let i = 0; i < this.length; i++){
    //if the callback returned true, function immediately returns true
    if(!callback(this[i], i, this)){
      return false;
    }
  }
  //if the callback doesnt return false for any element, return true
  return true;
}

const arr = [1,2,3,4,5]
const arr1 = [2,4,10,6,8]
const arr2 = [1,3,5,7,9]

function isOddNumber(number){
  if(number % 2 == 0){
    return false;
  }
  else{
    return true;
  }
}

const cb = (x) => {
  console.log(isOddNumber(x));
};

//arr.myEach(cb);
console.log("TESTING myEach");
console.log(arr.myEach(cb));
console.log("------------------");

console.log("TESTING mySome");
console.log(arr1.mySome(isOddNumber));
console.log(arr2.mySome(isOddNumber));
console.log("------------------");

console.log("TESTING myEvery");
console.log(arr1.myEvery(isOddNumber));
console.log(arr2.myEvery(isOddNumber));
