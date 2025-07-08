import React, { use } from 'react';

const Users = ({fetchUsers}) => {
    const users = use(fetchUsers);
    return (
        <div className='card'>
            <h3>Users : {users.length}</h3>
        </div>
    );
};

export default Users;