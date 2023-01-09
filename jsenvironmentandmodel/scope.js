//Variable Scope
var a  = 32;
console.log(a);
if(true){
    var a = 98;
    console.log(a);
}
console.log(a);

// function showScope()
// {
//     return scope;
// }

// var scope = "global";
// console.log(scope);
// console.log(showScope());

function showScope(){
    scope = "local";
    return scope;
}

scope = "global";
console.log(scope);
console.log(showScope());

//block scope
for(var i = 1; i <= 10; i++){
    console.log("Hello World!");
}
