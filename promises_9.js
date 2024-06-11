//Exercise 9: Delay with a Promise
//Write a function delay that takes a number of milliseconds and returns 
//a promise that resolves after that amount of time.

function delay(milliseconds) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(); // resolve the promise with a value
        }, milliseconds);
    });
}

// Test the function
delay(2000).then(() => {
    console.log('Executed after 2 seconds');
});