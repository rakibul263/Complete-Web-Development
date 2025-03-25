// call stack 
function hello(){
    console.log('Inside Hello Function.');
    console.log('Hello Function is Finished');
}

function demo(){
    console.log('Hello Function call.')
    hello();
    console.log('Hello Function call Finished.');
}

console.log('Demo Function call start.')
demo();
console.log('End of the call')
