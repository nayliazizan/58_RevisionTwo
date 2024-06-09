//Exercise 8: Sequential Promise Execution
//Write a function sequentialTasks that takes an array of functions 
//that return promises. The function should execute these functions in 
//sequence, waiting for each promise to resolve before starting the next 
//one. The function should return a promise that resolves with an array 
//of results from each promise.

function sequentialTasks(tasks) {
    //start with an already resolved promise and an empty results array
    let promiseChain = Promise.resolve();
    let newArr = [];

    //iterate through the tasks and chain the promises
    tasks.forEach(task => {
        promiseChain = promiseChain
            .then(() => task())
            .then(result => {
                newArr.push(result);
            });
    });

    //return the final promise that resolves with the results array
    return promiseChain.then(() => newArr);
    
}

// Test the function
const task1 = () => new Promise(resolve => setTimeout(() => resolve("Task 1 completed"), 1000));
const task2 = () => new Promise(resolve => setTimeout(() => resolve("Task 2 completed"), 2000));
const task3 = () => new Promise(resolve => setTimeout(() => resolve("Task 3 completed"), 1500));

sequentialTasks([task1, task2, task3]).then(results => {
    console.log(results); // ["Task 1 completed", "Task 2 completed", "Task 3 completed"]
});
