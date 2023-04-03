import React from 'react';

const Link = ({item}) => {
    console.log(item)
    return (
        <li className='mr-12'>
            <a href="#">{item.brand}</a>
        </li>
    );
};

export default Link;