import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(()=>{
        fetch('sources.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }, [])

    return (
        <div>
            <h3 className='text-3xl bg-emerald-400 p-4 text-center font-semibold italic'>your personal online gadget store</h3>
            <div className='grid md:grid-cols-3 gap-5'>
            {
                prices.map(price => <PriceCard 
                    key={price.id}
                    price={price}
                    ></PriceCard>)
            }
            </div>
           
        </div>
    );
};

export default PriceList;