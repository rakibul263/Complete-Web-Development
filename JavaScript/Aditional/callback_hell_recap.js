const h2 = document.querySelector('h2');


/* setTimeout(()=>{
    h2.style.color = 'blue';
},1000);

setTimeout(()=>{
    h2.style.color = 'green';
}, 2000);

setTimeout(()=>{
    h2.style.color = 'red';
}, 3000) */

function colorChanged(color, delay, nextColorChanged){
    setTimeout(()=>{
        h2.style.color = color;
        if(nextColorChanged) nextColorChanged();
    }, delay)
}

colorChanged('red', 1000, ()=>{
    colorChanged('green', 1000, ()=>{
        colorChanged('blue', 1000, ()=>{
            colorChanged('orange', 1000)
        })
    })
});
