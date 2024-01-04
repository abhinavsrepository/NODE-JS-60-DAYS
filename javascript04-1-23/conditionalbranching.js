let year = prompt('in which year was ecmascript')
if(year==2015)alert ('you were correct');

if (year == 2015){
    alert ('thats correct')
}
else{
    alert ('how can you be so wrong?')
}

// conditional operator ?
// let accessAllowed;
// let age = prompt('how old are yppoiu?')
// if (age>18){
//     accessAllowed =true;

// }else{
//     accessAllowed =false;

// }
alert(accessAllowed);
//let result =condition? value1:value2;
// let accessAllowed =(ahe>18)?true:falses;
let accessAllowed=age>18?true:false;
// multiplse ternary operator
let age =promp('age?',18);
let message =(age<3)?'Hi,everyone':(age<18)?'hello':(age<100)?'Greetings':
'what an unusual age!';
alert (message);