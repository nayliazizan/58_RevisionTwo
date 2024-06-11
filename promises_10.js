//Exercise 10: Promise All with Delays
//Write a function delayedMessages that takes an array of message-delay pairs 
//and returns a promise that resolves with an array of messages after all 
//delays have completed. Each pair is an object with message and delay 
//properties.

function delayedMessages(pairs) {
    //step 1: create an array of promises for each message-delay pair
    const promises = pairs.map(pair => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(pair.message); // resolve the promise with the message after the delay
            }, pair.delay);
        });
    });

    //step 2: use Promise.all to wait for all promises to resolve.
    //this returns a single promise that resolves with an array of 
    //resolved values (messages)
    return Promise.all(promises);
}

// Test the function
const pairs = [
    { message: 'Message 1', delay: 1000 },
    { message: 'Message 2', delay: 2000 },
    { message: 'Message 3', delay: 1500 }
];

delayedMessages(pairs).then(results => {
    console.log(results); // ["Message 1", "Message 3", "Message 2"]
});
