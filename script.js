// qus 1-- Create one function with zero parameter having a console statement;




function myName() {
    console.log("bhashkar");
  }
  myName();



  
  // qus 2---Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
  

  
  
  function sumNum(a, b) {
      let c = a + b;
      console.log(`Sum of ${a}, ${b} is ${c} `);
    }
    sumNum(3, 4);
    
    
    
    
    //qus 3 -- Create one arrow function.
    
    
    
    const arrowFun = () => {
        console.log("i am Arrow function");
    };
    arrowFun();


    
    
    // qus 7---- Write a function that accepts parameter n and returns factorial of n
    function factOrial(n) {
      let num = 1;
      for (let i = 1; i <= n; i++) {
        num = num * i;
      }
      console.log(num);
    }
    factOrial(10);


    
    
  //qus 4-- "Print output:

var x = 21;
var girl = function () {
    console.log(x);/// undefined
    var x = 20;
};
girl ();
  
  
  
 
  
  //qus 5---- "Print output


var x = 21;
girlOne ();
console.log(x)//21
function girlOne() {
    console.log(x);//undefined
    var x = 20;
};



///qus 6---"Print output


var x = 21;
a();
b();
console.log(a);///a is not defined
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

 
  