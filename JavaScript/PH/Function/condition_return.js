function isEven(number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}

const result = isEven(13);
console.log('Number is Even: ', result);