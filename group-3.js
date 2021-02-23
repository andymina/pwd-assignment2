// Hashir Khan

// indexOf()
// Without using the native “Array.prototype.indexOf”
// method of JavaScript, compose a function titled
// “myIndexOf” that will take in an array of elements
// and returns the index of the first encounter of a
// target element (if it is found) or -1 if that
// element does not exist within the input array.

Array.prototype.myIndexOf = function(value) {
  for (var i = 0; i < this.length; i++) {
    if (arr[i] == value)
      return i;
  }
  return -1;
}

// lastIndexOf()
// Without using the native “Array.prototype.lastIndexOf”
// method of JavaScript, compose a function titled
// “myLastIndexOf” that will take in an array of elements
// and returns the index of the last encounter of a target
// element (if it is found) or -1 if that element does not
// exist within the input array.

Array.prototype.lastIndexOf = function(value) {
  let last_index = -1
  for (var i = 0; i < this.length; i++) {
    if (this[i] == value)
      last_index = i;
  }
  return i;
}

// includes()
// Without using the native “Array.prototype.includes” method
// of JavaScript, compose a function titled “myIncludes” that
// will take in an array of elements and indicate whether or
// not a target element is contained within the input array.
// This returns a boolean.

Array.prototype.myIncludes = function(value) {
  for (var i = 0; i < this.length; i++) {
    if(this[i] == value){
      return true;
    }
  }
  return false;

}
