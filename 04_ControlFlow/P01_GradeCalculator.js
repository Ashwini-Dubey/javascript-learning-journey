/*
Given a score variable (try different values), use if / else if / else to log the grade: 90–100 -> "A", 75–89 -> "B", 60–74 -> "C", below 60 -> "F". 
Test with scores: 95, 80, 65, 40.
*/

const studentGrade = 40;

if (studentGrade >= 90) {
    console.log("You got an A!");
} 
else if (studentGrade >= 75 && studentGrade < 90) {
    console.log("You got a B!");
} 
else if (studentGrade >= 60 && studentGrade < 75) {
    console.log("You got a C!");
}  
else {
    console.log("You got an F!");
}