let name = "Wint Phyusin Maung";

if(1 === 1){
    name = "Khin";
    console.log(name);//khin
}
console.log(name);//khin

//let 
let item  = "pencil";

if(1 === 1){
    let item = 'books';
    console.log(item);//books
}
console.log(item);//pencil

//let 
var stuff  = "pencil";

if(1 === 1){
    var stuff = 'books';
    console.log(item);//pencil
}
console.log(item);//pencil


var myName = 'I, var,is a global variable';

let myname = 'I, let, is a local scope variable';

console.log(this.myName);
console.log(this.myname);

var x = 'global';
let y = 'global';
console.log(this.x); // expect result "global" but I got undefined
console.log(this.y); // undefined



