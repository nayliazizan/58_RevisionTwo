//Exercise 2: Fetch Data with Callback
//Write a function fetchData that simulates fetching data from a server. 
//The function should take a callback function as an argument and call it 
//with either an error or the fetched data after a delay. Use setTimeout 
//to simulate the delay.

function fetchData(callback) {
    // Your code here
    setTimeout(() => {
        const arr = ["sawako", "kazehaya", "yoshida", "ayane"]; //simuate no error
        //let arr; //prints error
        if (typeof arr === 'undefined') {
            callback("An error occurred", null); // Pass error as the first argument
        } else {
            callback(null, arr); // Pass result as the second argument
        }
    }, 2000);
}

// Test the function
fetchData((error, data) => {
    if (error) {
        console.error(error); // This should log an error message
    } else {
        console.log(data); // This should log the fetched data
    }
});
