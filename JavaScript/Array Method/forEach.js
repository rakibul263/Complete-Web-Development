let arr = [12, 13, 14, 15];
//normal function
console.log("For the Normal Function: ")
arr.forEach(
    function(element){
        console.log(element);
    }
)

// array function
console.log("For the Array Function: ")
arr.forEach(
    (element) => {
        console.log(element);
    }
)