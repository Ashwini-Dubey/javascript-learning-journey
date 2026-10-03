// Create an arrow function that accepts an array and returns its length.

const countItems = (arr) =>
{
    
    return arr.length;
    
}

console.log("Length of the array: ",countItems(["Login", "Search", "Checkout", "Logout"]));

//Create an arrow function that accepts an array of numbers and returns the first element of the array.

const returnFirstEle = (arr) =>
{
    return arr[0];
}

console.log("First Element of the Array: ",returnFirstEle(["Login", "Search", "Checkout", "Logout"]));