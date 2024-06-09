//A callback is a function that is passed as an argument to another function 
//and is executed after some operation has been completed. Callbacks are 
//essential for handling asynchronous operations, like reading files, 
//making network requests, or responding to user events.

//basic example of a callback
function doTask(callback) {
    console.log("Task is being done...");
    setTimeout(() => {
        callback(); // Call the callback after 2 seconds
    }, 2000);
}

function onTaskComplete() {
    console.log("Task completed!");
}

doTask(onTaskComplete);

//passing arguments to callbacks
function doTask(callback) {
    console.log("Task is being done...");
    setTimeout(() => {
        callback("Task completed successfully!"); // Pass a message to the callback
    }, 2000);
}

function onTaskComplete(message) {
    console.log(message);
}

doTask(onTaskComplete);

//handling errors w callbacks
function doTask(callback) {
    console.log("Task is being done...");
    setTimeout(() => {
        const error = false; // Simulate no error
        if (error) {
            callback("An error occurred", null); // Pass error as the first argument
        } else {
            callback(null, "Task completed successfully!"); // Pass result as the second argument
        }
    }, 2000);
}

function onTaskComplete(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
}

doTask(onTaskComplete);

//nesting callbacks aka callback hell
function firstTask(callback) {
    setTimeout(() => {
        console.log("First task done");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Second task done");
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log("Third task done");
        callback();
    }, 1000);
}

firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log("All tasks completed");
        });
    });
});
