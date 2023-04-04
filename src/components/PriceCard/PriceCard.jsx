import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-cyan-800 text-white p-4 mx-2 rounded-md my-4'>
            
            <h2 className=' text-center '><span className='text-emerald-400 text-4xl font-bold'>{price.price}</span> <span>/pc</span></h2>
            <h2 className='text-3xl font-semibold text-center my-2'>{price.name}</h2>
            <h2 className='text-xl font-semibold text-center'>{price.model}</h2>
            <p>Features:</p>
            {
                price.features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
             <button className='bg-gray-900 w-full text-white font-bold py-4 text-xl hover:bg-emerald-600'>Buy Now</button>
        </div>
    );
};

export default PriceCard;