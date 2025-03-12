const h1 = document.querySelector("h1");
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

/* function colorChanged(color, delay){
    setTimeout(()=>{
        h1.style.color = color;
    }, delay)
}

colorChanged('red', 1000);
colorChanged('green', 2000);
colorChanged('blue', 2000);
 */

function colorChanged(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve('color changed')
    },delay);
  });
}

colorChanged("red", 1000)
  .then((result) => {
    console.log("color changed to red");
    console.log(result);
    return colorChanged("green", 1000);
  })
  .then((result) => {
    console.log("color changed to green");
    console.log(result);
    return colorChanged('blue', 1000);
  })
  .then((result) => {
    console.log("color changed to blue");
    console.log(result);
  })

  .catch(() => {
    console.log("color cannot changed");
  });
