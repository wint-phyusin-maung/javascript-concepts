function objOne(){
    this.add  = add;
    this.arr = [];
    this.loopArr = loopArr;
}

function add(number){
      this.arr.push(number);
}

var myObj = new objOne();

myObj.add(32);
myObj.add(12);
myObj.add(35);

function loopArr(){
    for(let i=0 ; i < this.arr.length ; i++){
        console.log(this.arr[i]);
    }
}

myObj.loopArr();