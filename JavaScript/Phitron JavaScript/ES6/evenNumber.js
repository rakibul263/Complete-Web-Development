const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

const oddEven = (array) => {
    let evenNumber = [];
    for(let i = 0; i < array.length; i++){
        const element  = array[i];

        if(element%2 == 0){
            evenNumber.push(element);
        }else{
            oddNumber.push(element);
        }
    }
    return evenNumber;
}

const result = oddEven(numbers)

console.log(result);