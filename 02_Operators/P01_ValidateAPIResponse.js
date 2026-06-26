const statusCode = 201;
const responseTime = 2500;


if (statusCode === 200 && responseTime < 2000) {
    console.log("PASS");
} 

else if (statusCode === 200 && responseTime >= 2000) {
    console.log("SLOW");
}

else {
    console.log("FAIL");
}