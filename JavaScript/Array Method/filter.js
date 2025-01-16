let number = [1,2,3,4,5,6,7,8,9,10];

let even = number.filter(
    (element) => {
        return element % 2 == 0
    }
)

console.log(even);