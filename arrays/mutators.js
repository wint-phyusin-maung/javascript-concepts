//the contents of an array without refering the individual elements
//shift()|push()
var array = new Array();
for(let a = 0 ; a < 20 ; a ++)
{
    if(a % 2 == 0)
    {
        array[a] = a;
        //console.log(array.push(20));//why I get 2,4,6,8,10,12,14,16,18,20
    }
}

// console.log(array);
// [ 0 ]
// [ 0, <1 empty item>, 2 ]
// [ 0, <1 empty item>, 2, <1 empty item>, 4 ]
// [ 0, <1 empty item>, 2, <1 empty item>, 4, <1 empty item>, 6 ]
// [
//   0,
//   <1 empty item>,
//   2,
//   <1 empty item>,
//   4,
//   <1 empty item>,
//   6,
//   <1 empty item>,
//   8
// ]
// [
//   0,  <1 empty item>,
//   2,  <1 empty item>,
//   4,  <1 empty item>,
//   6,  <1 empty item>,
//   8,  <1 empty item>,
//   10
// ]
// [
//   0,  <1 empty item>,
//   2,  <1 empty item>,
//   4,  <1 empty item>,
//   6,  <1 empty item>,
//   8,  <1 empty item>,
//   10, <1 empty item>,
//   12
// ]
// [
//   0,  <1 empty item>,
//   2,  <1 empty item>,
//   4,  <1 empty item>,
//   6,  <1 empty item>,
//   8,  <1 empty item>,
//   10, <1 empty item>,
//   12, <1 empty item>,
//   14
// ]
// [
//   0,  <1 empty item>,
//   2,  <1 empty item>,
//   4,  <1 empty item>,
//   6,  <1 empty item>,
//   8,  <1 empty item>,
//   10, <1 empty item>,
//   12, <1 empty item>,
//   14, <1 empty item>,
//   16
// ]
// [
//   0,  <1 empty item>,
//   2,  <1 empty item>,
//   4,  <1 empty item>,
//   6,  <1 empty item>,
//   8,  <1 empty item>,
//   10, <1 empty item>,
//   12, <1 empty item>,
//   14, <1 empty item>,
//   16, <1 empty item>,
//   18
// ]

var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for(var i = N ; i >= 0 ; --i)
{
    nums[i] = nums[i - 1];
}
nums[0] = newnum;
// console.log(nums);

//adding elements to array
nums.push(6);
nums.unshift(0);
//removing
//nums.pop();
//console.log(nums);

//removing an array element without mutator functions
console.log(nums);
for(var i  = 0 ; i < nums.length ; ++i){
    nums[i] = nums[i+1];
    console.log(nums[i]);
}

var arrays = [1,2,3,4,5];
var newElements = [9,10,11];
arrays.concat(newElements);
console.log(arrays);
console.log(arrays.reverse());

var names = ['Maung','Khin','Aung','Sein'];
console.log(names.sort());
//sort() does not work so well
var numbers = [100,2352,1,50];
console.log(numbers.sort());


function compare(num1,num2)
{
    return num1 - num2;
}

var numS = ['Argument',3,1,2,100,'',4,200];
numS.sort(compare);
console.log(numS);