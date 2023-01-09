var numbers = [3,7,12,22,100];
var sum = 0;
for(var i = 0 ; i < numbers.length ; i++){
   sum += numbers[i];
}
// console.log(sum);


function factorial(number){
    var product = 1;
    for(var i = number; i >= 1; --i){
        product *= i;
    }
    return product;
}

console.log(factorial(4));

//A subprocedure or void function in JavaScript
function curve(arr,amount){
    for(var i = 0 ; i < arr.length; ++i){
        arr[i] += amount;
    }
}

var addFive = [2,5,4];
curve(addFive,5);
console.log(addFive);