console.log('Handeler File Added')

document.getElementById('button-update-title').addEventListener('click',
    function (){
        // console.log('button clicked')
        const pageTitleElement = document.getElementById('page-title')
        // console.log(pageTitleElement);
        pageTitleElement.innerText = 'Updated Page Title Text.'
        
    })


document.getElementById('btn-login').addEventListener('click',
    function() {
        // console.log('Login Button Clicked');
       const loginName =  document.getElementById('login-name');
       loginName.innerText = 'You are just log in your account.';
    })




document.getElementById('btn-update').addEventListener('click',
    function (){
        // console.log('update btn clicked');
        const inputName = document.getElementById('input-name');
        console.log(inputName);
        const name = inputName.value;
        console.log(name);

        const nameTitle = document.getElementById('name-title');
        nameTitle.innerText = name;
    })