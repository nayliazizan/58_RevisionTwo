//Exercise 9: Fetch Data with Error Handling
//Write a function fetchDataWithRetries that fetches data from an API 
//and retries the request a specified number of times if it fails. The 
//function should take two arguments: the URL to fetch data from and the 
//number of retries. It should return a promise that resolves with the 
//fetched data or rejects if all retries fail.

function fetchDataWithRetries(url, retries) {
    // Your code here
}

// Test the function
fetchDataWithRetries('https://jsonplaceholder.typicode.com/posts/1', 3)
    .then(data => {
        console.log(data); // Fetched data from the API
    })
    .catch(error => {
        console.error('Failed to fetch data after 3 retries:', error);
    });
