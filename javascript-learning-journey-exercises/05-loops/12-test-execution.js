// Execute 20 fake test cases and count how many pass.

testPass = 0;
testCount=23;
for(i=1;i<=testCount;i++)
{
    if(i%2==0)
    {
        console.log("Test Passed!");
        testPass++;
    }
    else
    {
        console.log("Test Failed");
    }
}
console.log(testPass)