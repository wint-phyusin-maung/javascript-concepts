for (let i = 0 ; i <= 5 ; i ++){
    for(let j = 0 ; j < i ; j++){
        console.log(i,j);
    }
   console.log("\n");
}


//ARRAY REVERSE

function arrays(nums){
    return nums.reverse();
}


console.log(arrays([1,2,3,4,5]));