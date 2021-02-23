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
  for(let i = 0; i < this.length; i++){
    callback(array[i], i, this);
  }
  return undefined;
}
