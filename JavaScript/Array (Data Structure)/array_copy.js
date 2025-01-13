let arr = ['a', 'b', 'c', 'd', 'e'];
let copyArr = arr;

console.log(copyArr); // [ 'a', 'b', 'c', 'd', 'e' ]
copyArr.pop();
copyArr.shift();
console.log(copyArr); // [ 'b', 'c', 'd' ]
console.log(arr); // [ 'b', 'c', 'd' ] 