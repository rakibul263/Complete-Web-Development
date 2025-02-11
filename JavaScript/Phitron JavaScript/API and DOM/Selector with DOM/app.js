// console.log(document.getElementsByTagName("h1"));
// const target = document.getElementsByClassName('title');
// console.log(target[0]);

const target = document.getElementById("title");
// console.log(target)
target.style.color = "green";

const allBox = document.getElementsByClassName("box");

for(let i = 0; i<allBox.length; i++){
    let element = allBox[i];

    element.style.backgroundColor = "green";

    if(element.innerText == 'Box-05'){
        element.style.backgroundColor = 'blue';
    }
}