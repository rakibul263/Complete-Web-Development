function willSuccess(marks){
    let count_pass = 0;
    let count_fail = 0;
    if(typeof marks == 'object'){
        for(const i of marks){
            if(i>=50){
                count_pass++;
            }else{
                count_fail++;
            }
        }
        if(count_pass > count_fail){
            return true;
        }else{
            return false;
        }
    }else{
        return 'Invalid';
    }
}

const arr1 = [60, 70, 80, 40, 30];
console.log(willSuccess(arr1));
const arr2 = [48 , 48 , 92 , 100 ];
console.log(willSuccess(arr2));
const arr3 = [48, 48, 50, 50, 100];
console.log(willSuccess(arr3));
const arr4 = [ ];
console.log(willSuccess(arr4));
const arr5 = [90];
console.log(willSuccess(arr5));
const arr6 = [ 90 ,  99 , 87 , 48 , 34 , 49 ];
console.log(willSuccess(arr6));
const arr7 = "100 , 100";
console.log(willSuccess(arr7));
const arr8 = 90;
console.log(willSuccess(arr8));