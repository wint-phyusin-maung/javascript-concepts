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

function add(total,currentvalue){
    return total + currentvalue;
}

let sum = nums.reduce(add);
//console.log(sum);

let array2  = [2,8,10];
const initialValue = 2;
const sumWithInitial = array2.reduce(
    (ac,cur) => ac + cur, initialValue
);
console.log(sumWithInitial); 


let stringsArr = ["khin","khin","is","smart"];
var sentence = stringsArr.reduceRight((ac,cu) => ac + cu);
console.log(sentence);



//Iterator Functions That Return a New Array

//map() and filter()

function curve(grade)
{
    return grade += 5;
}

var grade = [77,65,81,92,83];
var newGrades = grade.map(curve);
console.log(newGrades);