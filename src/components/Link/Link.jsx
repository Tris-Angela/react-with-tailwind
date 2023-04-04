import React from 'react';

const Link = ({option}) => {
    return (
        <li className='mr-12'>
            <a href={option.Link}>{option.name}</a>
        </li>
    );
};

export default Link;