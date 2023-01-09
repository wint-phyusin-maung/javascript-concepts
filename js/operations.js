// //Javascript is a loosely Typed language
// var a;
// console.log(typeof a);

// var i = 23;
// let j = 23;

// console.log(this.i);


for(let i = 0 ; i < 4 ; i++){
   for(let j = 0; j < 4 ; j++){
   // console.log('*');
   }
}

//Decision Constructs

var sum = 10;
var itemcost = 2;
if(sum %  itemcost === 0){
    console.log("This is truthy");
}

//if statment
var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if(current < mid){
    mid = (current - low) / 2 ;
}

//switch statements
var month = "January";
switch(month){
    case "January":
        console.log('This month is your birthday month.');
        break;
    case "October":
        console.log('This month is my birthday');
        break;
    default:
        console.log('I do not know your birthday.');
}

//while loop
var number = 1;
var sum = 0;
while(number < 11){
    sum += number;
    ++number;
}

console.log(sum);

let myValue;
console.log(myValue);

console.log(3 == "3");

let name = "Khin";
let age = 35;
let greet = `${name} and ${age}`;
console.log(greet);