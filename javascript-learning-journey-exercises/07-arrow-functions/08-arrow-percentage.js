// Create an arrow function that calculates percentage.

const calculatePercent = (totalTests, testsPassed) =>
{
    return (testsPassed/totalTests)*100;
}

console.log(calculatePercent(150,72));