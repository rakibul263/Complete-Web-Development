function outerFunc(){
    let x = 5;
    let y = 10;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc();
}

outerFunc();