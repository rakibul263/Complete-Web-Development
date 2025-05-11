import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <section className='flex'>
                <Special name='Aysha' asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;