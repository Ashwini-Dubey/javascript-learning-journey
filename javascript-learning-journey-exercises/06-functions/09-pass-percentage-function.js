//Create a function that calculates test pass percentage.

function testPassPercent(totalTests,testsPassed) {
    passPercentage = (testsPassed/totalTests)*100;
    console.log(passPercentage)
}

testPassPercent(200,149);