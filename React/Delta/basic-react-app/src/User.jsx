import React from 'react';
import './User.css';

const User = ({ user, color }) => {
    let style = { backgroundColor: color };

    return (
        <div className='user' style={style}>
            <h3 id='name'>Hello, {user}</h3>
            <p>Color : {color}</p>
        </div>
    );
};

export default User;
