//Accessor fuctions
var names = ["Khin","Hla","Aung","Kyaw",'Min'];
var name = "Hla"; 
var position = names.indexOf(name);
if(position >= 0)
{
    //console.log("Found " + name + " at position " + position)
}else{
    //console.log(name + " not found in array.");
}

var namestr = names.toString();
console.log(namestr);
console.log(names);