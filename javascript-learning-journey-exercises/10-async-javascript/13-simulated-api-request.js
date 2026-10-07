// Simulate an API request using Promise.

function getData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Response Code: 200");
            resolve("API Response")
        },2000);
    });
};

getData().then(function(result){
    console.log(result);
})