import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const user  = useLoaderData();
    console.log(user);
    
    return (
        <div>
            
        </div>
    );
};

export default Users;