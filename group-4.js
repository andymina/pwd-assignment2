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

Array.protototype.myEach = function (callback){
  //iterate through the array
  for(let i = 0; i < this.length; i++){
    //apply callback function to each elem in the array
    callback(array[i], i, this);
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
    //apply callback function to each elem in the array
    callback(array[i], i, this);
    //if the callback returned true, function immediately returns true
    if(callback(array[i], i, this)){
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
    //apply callback function to each elem in the array
    callback(array[i], i, this);
    //if the callback returned true, function immediately returns true
    if(!callback(array[i], i, this)){
      return false;
    }
  }
  //if the callback doesnt return true for any element, return false
  return true;
}
