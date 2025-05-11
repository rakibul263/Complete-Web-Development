import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Priya' && <Special asset={asset} name='Nafiz'></Special>
            }
            {
                name === 'Pooja' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;