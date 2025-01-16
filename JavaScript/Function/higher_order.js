function multipleGreet(func, count){
    for(let i = 0; i < count; i++){
        func();
    }
}
let greet = function(){
    console.log('Hello World!');
}


multipleGreet(greet, 100); // 'Hello World!' 5 times