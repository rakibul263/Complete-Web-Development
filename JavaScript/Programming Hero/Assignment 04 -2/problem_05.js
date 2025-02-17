function calculateSleepTime(times) {
    for(const check of times) {
        if(typeof check != 'number') {
            return 'Invalid';  
        }
    }

    let sum = 0;
    for(const i of times) {
        sum += i;
    }

    let hour = Math.floor(sum / 3600);
    let minute = parseInt(((sum % 3600) / 60).toFixed(2));
    let second = sum % 60; 

    return { hour, minute, second };
}

const arr1 = [1000, 499, 519, 300];
console.log(calculateSleepTime(arr1));
const arr2 = [1000, 2000, 725];
console.log(calculateSleepTime(arr2));
const arr3 = [100, 3800];
console.log(calculateSleepTime(arr3));
const arr4 = [];
console.log(calculateSleepTime(arr4));
const arr5 = [5600];
console.log(calculateSleepTime(arr5));
const arr6 = [100, 3800, "90"];
console.log(calculateSleepTime(arr6));






