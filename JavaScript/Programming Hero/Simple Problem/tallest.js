const height = [65,66,68,72,78,60];

let max1 = Number.MIN_SAFE_INTEGER;
// console.log(max1);

for(const item of height){
    if(item > max1){
        max1 = item;
    }
}

console.log(max1);