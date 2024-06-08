//Exercise 1: Array Iterator with Callback
//Write a function arrayIterator that takes an array and a callback function 
//as arguments. The function should iterate over each element in the array 
//and call the callback function with the current element as an argument.

function arrayIterator(array, callback) {
    // Your code here
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// Test the function
arrayIterator([1, 2, 3, 4], (element) => {
    console.log(element * 2); // This should log 2, 4, 6, and 8
});
