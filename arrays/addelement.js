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
              console.log(array[i]);
          }
       }
   }
}

//can use [] operator to get the element in the array
let difElements = ['Khin Khin',true,2,0.235];
console.log(difElements[1]);
console.log(difElements[3]);