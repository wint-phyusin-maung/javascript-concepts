let array = [];
for(let i = 0 ; i < 30 ; i++)// to get the number which can be divided by 8.
{
   array[i] =  i + 1;
   if(array[i] % 2 == 0)
   {
       if(array[i] % 4 == 0)
       {
          if(array[i] % 8 == 0)
          {
              //console.log(array[i]);
          }
       }
   }
}

//can use [] operator to get the element in the array
let difElements = [1,2,3,4,5,6,7,8,9,10];
// console.log(difElements[1]);
// console.log(difElements[3]);



//to sum all the element that can have in the array
for(let i = 0 ; i < difElements.length ; i++)
{
    difElements[i] = i;
    //console.log(difElements[i]);
}

//console.log(difElements);

//What about creating array from strings..haha
let string  = "The photo that I took yestersday was pictureque,if I do say so myself";
let stringToArray  = string.split(" ");
//console.log(stringToArray);

for(let i = 0  ; i < stringToArray.length ; i++)
{
    console.log(`Words' ${i} ${stringToArray[i]}`); 
}