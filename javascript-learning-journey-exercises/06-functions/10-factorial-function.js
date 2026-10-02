//Create a function that calculates factorial.
fact = 1;
function factorial(num)
{
    for (i=1;i<=num;i++)
    {
        fact=fact*i
    }
    console.log(fact)
}

factorial(6);