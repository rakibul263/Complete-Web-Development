function hello(){
    console.log("Hello World");
}

function functionName(){
    console.log("This is a function");
}

function print1to10(){
    for(let i=1; i<=10; i++){
        console.log(i); 
    }
}

function sum(a, b){
    console.log(`sum of ${a} and ${b} is ${a+b}`);
}

// sum(10, 20);

function avg(a, b, c){
    console.log(`average of ${a}, ${b} and ${c} is ${(a+b+c)/3}`);
}

avg(10, 20, 30);

// hello();
// functionName();
// print1to10();