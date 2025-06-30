import React, { useState } from 'react';

const LikeButton = () => {
    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const clickFunction = () => {
        if (isLiked) {
            setLike(like - 1);
            document.querySelector('.fa-heart').style.color = 'white';
        } else {
            setLike(like + 1);
            document.querySelector('.fa-heart').style.color = 'red';
        }
        setIsLiked(!isLiked);
    };
    return (
        <div>
            <p>Like Button</p>
            <p>Like : {like}</p>
            <p><i class="fa-solid fa-heart" onClick={clickFunction}></i></p>
        </div>
    );
};

export default LikeButton;