//Variable Scope
// var a  = 32;
// console.log(a);
// if(true){
//     var a = 98;
//     console.log(a);
// }
// console.log(a);

// function showScope()
// {
//     return scope;
// }

// var scope = "global";
// console.log(scope);
// console.log(showScope());

// function showScope(){
//     scope = "local";
//     return scope;
// }

// scope = "global";
// console.log(scope);
// console.log(showScope());

// //block scope
// for(var i = 1; i <= 10; i++){
//     console.log("Hello World!");
// }

//Recursion
function factorial(number)
{
    if(number == 1){
        return number;
    }
    else{
        return number * factorial(number-1);
    }
}
console.log(factorial(5));

/*
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1
5 * 4 * 3 * 2
5 * 4 * 6
5 * 24
120
 */