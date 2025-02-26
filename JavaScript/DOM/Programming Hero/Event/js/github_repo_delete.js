document.getElementById('input-box')
.addEventListener('keyup', function(event){
    // console.log("hello shuvo", event);
    const text = event.target.value;
    const btnDelete = document.getElementById('btn-delete');
    // console.log('Typing: ', text)
    if(text === 'delete'){
        // console.log('Delete Typed')
        btnDelete.removeAttribute('desabled');

    }else{
        // console.log('somethig else')
        btnDelete.setAttribute('desabled', true);
    }
})