console.log('start');

setTimeout(() => {
  console.log('call back')
},1000);

console.log('continue at the same time');

const request = new XMLHttpRequest(); //request object

request.addEventListener('readystatechange',() => {
      console.log(request,request.readyState);
      //state 4 means open,send,loading,done
      if(request.readyState === 4){
        console.log(request.responseText);
      }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/');


request.send();