/*
Create:

calculateDefectRate(totalDefects, totalTests)
*/

function calculateDefectRate(totalDefects, totalTests)
{
    defectRate = (totalDefects/totalTests)*100;
    return defectRate;
}

console.log("Defect Rate: ",calculateDefectRate(90,120),"%");