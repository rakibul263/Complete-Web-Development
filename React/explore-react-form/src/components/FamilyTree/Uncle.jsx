import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name='Kobi'></Cousin>
                <Cousin name='Khalid'></Cousin>
                <Cousin name='Khaled'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;