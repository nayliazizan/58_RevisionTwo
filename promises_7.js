//Exercise 2: Convert a Callback to a Promise
//Convert the following callback-based function to a promise-based function.

function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John Doe", age: 30 };
        callback(null, data);
    }, 2000);
}

// Convert this function to return a promise
function fetchDataPromise() {
    return new Promise ((resolve, reject) => {
        fetchData((error, data) => {
        //The original fetchData function takes a callback and invokes it 
        //with null for no error and data after a delay.
            if (error) {
                reject(error); // Reject the promise if there's an error
            } else {
                resolve(data); // Resolve the promise with the data
            }
        });
    });
}

// Test the function
fetchDataPromise().then(data => {
    console.log(data); // { name: "John Doe", age: 30 }
}).catch(error => {
    console.error(error);
});
