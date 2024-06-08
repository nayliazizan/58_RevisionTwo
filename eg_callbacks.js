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
