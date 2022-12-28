console.log('start');

setTimeout(() => {
  console.log('call back')
},1000);

console.log('continue at the same time');

const request = new XMLHttpRequest(); //request object

request.addEventListener('readystatechange',() => {
      console.log(request,request.readyState);
      //state 4 means open,send,loading,done 
      if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
      }else if(request.readyState === 4){
        console.log('Fetching data was wrong.Try again.')
      }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/');


request.send();