import React from 'react';
import { use } from 'react-router';

const Users2 = ({userPromise}) => {
    const users = use(userPromise);
    console.log(users);
    return (
        <div>
            
        </div>
    );
};

export default Users2;