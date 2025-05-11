import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousin name='Parul'></Cousin>
                <Cousin name='Pooja'></Cousin>
                <Cousin asset={asset} name='Priya'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;