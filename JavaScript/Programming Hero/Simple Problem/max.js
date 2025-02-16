const disha = 56;
const salman = 95;

if(disha > salman){
    console.log("Disha will get the strawberry.")
}else{
    console.log('Salman will eat the strawberry.')
}


// inside a function 
function getMax (num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

const max = getMax (56, 86);
console.log('max of two is : ', max);


console.log();
console.log();
console.log();

const jim = 56;
const tim = 89;
const kim = 68;


if(jim > tim && jim > kim) {
    console.log('Jim is the ultimate boss.');
}else if(tim > jim && tim > kim){
    console.log('Tim is the ultimate boss');
}else{
    console.log('Kim is the ultimate boss.');
}