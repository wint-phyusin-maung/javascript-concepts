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









