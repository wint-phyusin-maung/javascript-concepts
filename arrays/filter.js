//filter

function isEven(num)
{
    return num % 2 === 0;
}   

function isOdd(num)
{
    return num % 2 != 0;
}

var nums = [];
for (var i = 0 ; i < 20 ; i++)
{
    nums[i] = i + 1;
}

var evens = nums.filter(isEven);
console.log(evens);

var odds = nums.filter(isOdd);
console.log(odds);


function passing(num)
{
    return num >= 60;
}

var grades = [];
for(var i = 0 ; i < 20 ; i++){
    grades[i] = Math.floor(Math.random() * 101);
}


var passGrades = grades.filter(passing);
console.log(passGrades);


//Creating two-dimensional arrays
//rows and columns 


Array.matrix = function(numrows,numcols,initial){
    var arr = [];
    for(var i = 0 ; i < numrows; i++){
        var columns = [];
        for(var j = 0 ; j < numcols ; j++){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}


var nums = Array.matrix(5,5,0);
console.log(nums[1][1]);
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
console.log(names[1][2]);







