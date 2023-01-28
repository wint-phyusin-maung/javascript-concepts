function square(num)
{
    console.log(num,num + num);
}

function even(num){
    return num % 2 == 0;
}

var nums = [1,2,3,4,5];
nums.some(even);
if(even)
{
    console.log("some numbers are even");
}else{

    console.log("not all numbers are even");
}