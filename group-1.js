// Andy Mina

/**
 * myMap() creates a new array populated with the results of the
 * callback function called on every element.
 * 
 * @param callback A function to be executed on every element.
 * Takes three parameters:
 *      currentValue - the current element being processed
 *      index - the current index being processed
 *      array - the array this function was called on
 * @returns A new array where every element is the result of the
 * callback function.
 */
Array.prototype.myMap = function (callback) {
    // create a res array
    let res = [];
    // loop through every element
    for (let i = 0; i < this.length; i++) {
        // add the val returned by the callback
        // to the res array
        res.push(callback(this[i], i, this));
    }
    // return the new array
    return res;
}