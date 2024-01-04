let userdf ={
    name :"john",
    age:30 
};
// method examples 
let user1 ={
    name :"john",
    age:30
}
user1.sayHI=function (){
    alert ("hello!");

}

// this in method common object method needs to access the information stored un the object to do its jobs 
// acces the mehtod can use the this keyword 
// the values of this is the object "before dot" the one used to call the method

let user3 ={
    name :"John",
    age:30,
    sayHi(){
        alert(this.name);// this is the current object
    }
};
user1.sayHi();
//  but code above is unrelaiable because of large program doesnt use it 
let user4 ={
    name :"John",
    age:30,
    sayHi(){
        alert (user.name);

    }


}
let admin = user ;
// user = null ;overwrite to make things obviuous 
admin.sayHi();
// this doesntot behave properly like other programming language 
//  calling without an object : 
this == undefined

//  arrrow function have no this 
let users ={
    firstName : "Ilya",
    sayHi(){
        let arrow =() =>alert(this.firstName);
        arrow();
    }
};
user.sayHi();

// Summary 
// function that can stored in object
function makeUser(){
    return {
        name:"john",
        ref:this
    };
}
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?

