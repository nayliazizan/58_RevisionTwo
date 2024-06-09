//Promises are a way to handle asynchronous operations in JavaScript. 
//A promise is an object that represents a value that may be available now,
//in the future, or never. Promises provide a cleaner, more readable, and 
//more maintainable way to handle async code compared to callbacks.

//1.1 creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation
    let success = false; // Simulate success or failure

    if (success) {
        resolve("Operation was successful!"); // Resolve the promise with a value
    } else {
        reject("Operation failed!"); // Reject the promise with an error message
    }
});

//1.2 handle result of promise
myPromise
    .then(result => {
        console.log(result); // "Operation was successful!"
    })
    .catch(error => {
        console.error(error); // "Operation failed!"
    })
    .finally(() => {
        console.log("Operation completed"); // Always executed
    });

//2 chaining promise
const myPromise2 = new Promise((resolve, reject) => {
    resolve(1);
});

myPromise2
    .then(result => {
        console.log(result); // 1
        return result * 2;
    })
    .then(result => {
        console.log(result); // 2
        return result * 2;
    })
    .then(result => {
        console.log(result); // 4
    })
    .catch(error => {
        console.error(error);
    });

//3 handling multiple promises
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
//waits for all promises to resolve and returns an array of their results
    .then(results => {
        console.log(results); // [1, 2, 3]
    })
    .catch(error => {
        console.error(error);
    });

Promise.race([promise1, promise2, promise3])
//returns the result of the first promise to resolve or reject
    .then(result => {
        console.log(result); // 1
    })
    .catch(error => {
        console.error(error);
    });
