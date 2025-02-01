// Promises is a powerful tool for handling asynchronous operations in a more readable and manageable way
// Simplify សម្រួល error handling and help avoid callback hell
// making code that relies on asynchronous data flow more predictable and maintainable
// asynchronous គឺ function មួយធ្វើការ​បាន​ច្រើន Global Action​ ** respond ម្តងទាំងអស់
// synchronous គឺ​function មួយធ្វើការ​បាន​ម្តងមួយ Block Action​ ** respond 
// Promise មាន​ states 3 : 
// - pending: initial states, neither fulfillied nor reject
// - fulfillied: meaning that the operation was completed successfully
// - rejected: meaning that the operation failed
// Chained Promises method are then(), catch(), finally()
// - then(onFulfillied, onRejected) add handlers for the fulfillied and rejected states
// - catch(onRejected) Add handlers for the rejected states
// - finally(onFinally) Add a handler that executes regardless of the promise's outcome

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success')
        console.log('Action 1 spend 1 second to completed');
    }, 1000)

    setTimeout(() => {
        resolve('Success')
        console.log('Action 2 spend 2 second to completed');
    }, 2000)

    setTimeout(() => {
        resolve('Success')
        console.log('Action 3 spend 3 second to completed');
    },3000)
})

const promise = new Promise((resolve, reject) => {
    // check state condiction
    const state = true
    if (state) {
        resolve('Success')
    } else {
        reject("Failed")
    }
})

promise
    .then((message) => {
        console.log(`Promise is resolved with message: ${message}`);
    })
    .catch((message) => {
        console.log(`Promise is rejected with message: ${message}`);
    })

console.log(promise);

//{ ********* API ******** }

// check status 
const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

// parse json
const json = (response) => {
    return response.json()
}

// fatch data
fetch('https://fakestoreapi.com/products')
    .then(json)
    .then((data) => {
        console.log('Request succeeded with JSON response', data);
    })
    .catch((error) => {
        console.log('Request Failed', error);
    })
