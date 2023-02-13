function padIt(str,n){
    var num=0;
    while(num < n){
         num++;
         num % 2 == 0 ? str = str + "*" : str = "*" + str;
   }  
  return str;
}


console.log(padIt("a", 3));