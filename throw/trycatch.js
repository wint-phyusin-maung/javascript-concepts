const prompt = require('prompt-sync')();


try{
    let age = prompt('Your age: ');

    if(age < 18) throw "You are not allowed!";

    console.log('hello');
} catch(error)
{
    console.log(error);
}
finally{
    console.log('Thanks for visiting!');
}