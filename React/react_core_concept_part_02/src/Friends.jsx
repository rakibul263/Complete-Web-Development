import React, { use } from 'react';
import Friend from './Friend';

const Friends = ({friendsPromise}) => {
    const friends = use(friendsPromise);
    return (
        <div className='card'>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;