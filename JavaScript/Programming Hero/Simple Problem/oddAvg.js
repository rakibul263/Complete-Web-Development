function oddAvg(number){
    let countNumber = 0;
    // let oddArray = [];
    let oddSum = 0;
    for(let i=0;i<number.length;i++){
        if(number[i] % 2 != 0){
            countNumber++;
            oddSum+=number[i];
        }
    }
    // console.log(countNumber, oddArray);
    // console.log(oddSum);
    console.log('Average of the odd number is : ', oddSum/countNumber);
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
oddAvg(arr);