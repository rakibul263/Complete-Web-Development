let str = "I am currently learning Java, java is a programming language. JaVa is a popular language.";

let replacedJava = str.replace("Java", "JavaScript");
console.log(replacedJava);

let replacedJavaAll = str.replace(/java/gi, "JavaScript");
console.log(replacedJavaAll);

//replace all the number to the string 
let number = "1 2 3 4 5 6 7 8 9 1000";
let replaceNumber = number.replace(/\d/g, "X");
console.log(replaceNumber);

//Increase the number value
let price = "Price: 1000 taka";
let increasePrice = price.replace(/\d+/, m=>parseInt(m)+45);
console.log(increasePrice);

// console.log(str); //not change the original string