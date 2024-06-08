//QUESTION
//The function job must return a promise object 
//(you are in a NodeJS environment, you can use new Promise).
//The promise must resolve itself 2 seconds after the call to 
//job and must provide hello world in the data

const job = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
              resolve("hello world"); // call resolve if successful
            }
        }, 2000); // simulating a delay of 2 seconds
    });
}

job().then((message) => {
    console.log(message);
});

module.exports = job;