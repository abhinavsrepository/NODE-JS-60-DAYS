function f1() {
    console.log("f1 called");
    f2();
  }
  
  function f2() {
    console.log("f2 called");
  }
  
  f1(); // Output: f1 called, f2 called
  