//Create a promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();

        if(randomNumber > 0.5) 
        {
            resolve(randomNumber);// Resolve with a value
        
        }else{
            reject(new Error("Random number is too small")); //Reject with a error
        }

    },1000); //Simulate 1 second delay
});

// Consuming the promise
myPromise
.then(result => {
    console.log('Resolve :',result);
    console.log(result);
})
.catch(error => {
   
    console.error('Rejected :', error.message);
    
});
