import React from 'react';

const Link = ({link}) => {
    return (
        <li className='px-4 lg:mr-10 hover:bg-amber-500'>
            <a href="{link.path}">{link.name}</a>
        </li>
    );
};

export default Link;