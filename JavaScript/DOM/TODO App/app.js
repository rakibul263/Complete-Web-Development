let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener('click', function(){
    let item = document.createElement('li');
    item.innerText = input.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('button');

    item.appendChild(delBtn); 
    ul.appendChild(item); 
    console.log(input.value);
    input.value = '';
});

ul.addEventListener('click', function(event){
    console.log(event.target.nodeName);
    // console.log('button clicked');
});