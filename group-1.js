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

/**
 * myFilter creates a new array with only elements
 * that pass the test provided in the callback
 * 
 * @param callback A function to be executed on every element.
 * Takes three parameters:
 *      currentValue - the current element being processed
 *      index - the current index being processed
 *      array - the array this function was called on
 * @returns A new array with only the elements that pass the test.
 */
Array.prototype.myFilter = function (callback) {
    // create res array
    let res = [];
    // loop through every element
    for (let i = 0; i < this.length; i++) {
        // if the element passes the callback
        // add to res array
        if (callback(this[i], i, this))
            res.push(this[i]);
    }
    // return the result
    return res;
}