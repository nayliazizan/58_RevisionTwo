//QUESTION
//In this code, your function receives a parameter data. 
//You must modify the code below based on the following rules:
//Your function must always return a promise.
//If data is not a number, return a promise rejected 
//instantly and give the data "error" (in a string).
//If data is an odd number, return a promise resolved 
//1 second later and give the data "odd" (in a string).
//If data is an even number, return a promise rejected 
//2 seconds later and give the data "even" (in a string).

const job = data => {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject("error"); // reject instantly if data is not a number
        } else {
            if (data % 2 === 1) {
                setTimeout(() => {
                    resolve("odd"); // resolve after 1 second if data is odd
                }, 1000);
            } else {
                setTimeout(() => {
                    reject("even"); // reject after 2 seconds if data is even
                }, 2000);
            }
        }
    });
}

// test the function with different values
job(1).then((message) => {
    console.log(message); // this should print "odd" after 1 second
}).catch((error) => {
    console.log(error);
});

job(2).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error); // this should print "even" after 2 seconds
});

job('test').then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error); // this should print "error" instantly
});

module.exports = job;


