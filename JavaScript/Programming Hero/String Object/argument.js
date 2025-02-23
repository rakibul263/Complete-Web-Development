function add(num1, num2){
    console.log(num1 , num2);

    console.log(arguments[3]); //array like object
}

add(2, 3, 5, 6);