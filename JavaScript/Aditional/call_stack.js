function hello(){
    console.log('Hello k call kora hoyeche');
}

function demo(){
    console.log('demo k call kora hoyeche');
    hello();
}

demo(); 


function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let result = two() + one();
    console.log(result);
}

three();