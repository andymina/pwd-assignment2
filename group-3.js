// Hashir Khan

// indexOf()
// Without using the native “Array.prototype.indexOf”
// method of JavaScript, compose a function titled
// “myIndexOf” that will take in an array of elements
// and returns the index of the first encounter of a
// target element (if it is found) or -1 if that
// element does not exist within the input array.

Array.prototype.indexOf = function(value) {
  for (var i = 0; i < this.length; i++) {
    if (arr[i] == value)
      return i;
  }
  return -1;
}
