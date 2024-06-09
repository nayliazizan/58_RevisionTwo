//Exercise 6: Create and Resolve a Promise
//Write a function delayedResolve that returns a promise that resolves 
//with the message "Resolved after delay" after a delay of 3 seconds.

const delayedResolve = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved after delay"); // Resolve the promise with a value
        }, 3000);
    });
}

// Test the function
delayedResolve().then(message => {
    console.log(message); // "Resolved after delay"
});
