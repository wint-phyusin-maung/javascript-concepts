function square(num)
{
    console.log(num,num + num);
}

function even(num){
    return num % 2 == 0;
}

var nums = [1,2,3,4,5];
nums.every(even);
if(even)
{
    console.log("all numbers are even");
}else{

    console.log("not all numbers are even");
}