let user ={
    firstName:"john",
    sayHi(){
        alert(`Hello,${this.firstName}1`);
    }
};
setTimeout(user.sayhi,1000);
//  timeout of the counting