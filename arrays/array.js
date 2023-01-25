var numbers = [2,2];
console.log(numbers.length);

//array constructor
var num = new Array();


//array define
var alGeNum = new Array(2,5,9,9);

var defineArray = new Array(10);


var differentTypes = ['Heloa','more',false,33,2.25];

//verify array
var nums = 3;
var array = [3,52,1];
console.log(Array.isArray(nums));
console.log(Array.isArray(array));

//accessing and writing array elements
var mynums = [];
for(var i = 0 ; i < 100; i++){
    mynums[i] = i + 1;
}
console.log(mynums);

//my examples 
var othernums = [];
var count = 35;
if(count > 21){
    for(let i = 0 ; i < 32 ; i ++){
        othernums[i] = i * 2;
    }
}
console.log(othernums);

