function f1() {
    console.log("f1 called");
    f2();
  }
  
  function f2() {
    console.log("f2 called");
  }
  
  f1(); // Output: f1 called, f2 called
//   
//  the JavaScript call stack is like a stack of plates representing function calls. Each call adds a plate (stack frame) with function info. When a function finishes, its plate (frame) is removed, returning to the previous function. It helps keep track of nested functions and code execution order.

// Think of it as a temporary "to-do list" for functions in JavaScript. New tasks (functions) go on top, and once finished, they get "done" and removed.