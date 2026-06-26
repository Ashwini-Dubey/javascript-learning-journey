/*
Write a switch that takes a statusCode and logs its meaning: 200 -> "OK", 201 -> "Created", 400 -> "Bad Request", 401 -> "Unauthorized", 404 -> "Not Found", 500 -> "Server Error", anything else -> "Unknown status".
*/

statusCode = 500; // You can change this value to test different cases

switch (statusCode) {

    case 200:
        console.log("OK");
        break;
    case 201:
        console.log("Created");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Server Error");
        break;
    default:
        console.log("Unknown status");
}