document.getElementById('btn-post-comment').addEventListener('click', function (){
    console.log('post btn clicked');

    const commentTextBox = document.getElementById('comment-text-box');
    // console.log(commentTextBox);
    const newComment = commentTextBox.value;
    console.log(newComment);


    const commentContainer = document.getElementById('comment-container');
    // console.log(commentContainer);
    const commentP = document.createElement('p');
    commentP.classList.add('comment');
    commentP.innerText = newComment;

    commentContainer.appendChild(commentP);


    // clean text area
    commentTextBox.value = '';
})