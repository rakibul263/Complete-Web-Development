const h1 = document.querySelector('h1');
/*
setTimeout(()=>{
    h1.style.color = 'red';
    console.log('Color changed successfully')
}, 1000)

setTimeout(()=>{
    h1.style.color = 'green';
    console.log('color change red to green successfully')
}, 2000)

setTimeout(()=>{
    h1.style.color = 'orange';
    console.log('color change green to orange successfully');
}, 3000)

 */

function colorChanged(color, delay){
    setTimeout(()=>{
        h1.style.color = color;
    }, delay)
}

colorChanged('red', 1000);
colorChanged('green', 2000);
colorChanged('blue', 2000);
