function  calculateVAT(price){
    if(price >= 0 && typeof price == 'number'){
        let result = price * (7.5/100);
        console.log(result);
    }else{
        console.log('Invalid');
    }
}

calculateVAT(1500);
calculateVAT(200);
calculateVAT(999);
calculateVAT(-500);
calculateVAT("101");
calculateVAT("foo");