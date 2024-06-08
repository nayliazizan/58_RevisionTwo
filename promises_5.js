//QUESTION
//Write a function which receives a string, and returns a Promise.
//The promise should resolve with the uppercase version of 
//the string, but should reject if the string is null.

function upperCaseAsync(s) {
    return new Promise ((resolve, reject) => {
        if (s.length === 0 || s === null) {
        	reject();
        } else {
           	resolve(s.toUpperCase());
        }
    })
}

upperCaseAsync("steve").then(console.log);
upperCaseAsync(null).catch((x) => {
    console.log("No string received!");
});