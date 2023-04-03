import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [menubar, setMenubar] = useState(false)
    const items = [
        {
            id: 1,
            name: "Wireless Earbuds",
            brand: "Apple",
            model: "AirPods Pro",
            price: 249.00,
        },
        {
            id: 2,
            name: "Smart Watch",
            brand: "Samsung",
            model: "Galaxy Watch 4",
            price: 249.99,
        },
        {
            id: 3,
            name: "Fitness Tracker",
            brand: "Fitbit",
            model: "Charge 5",
            price: 179.95,
        },
        {
            id: 4,
            name: "Gaming Console",
            brand: "Sony",
            model: "PlayStation 5",
            price: 499.99,
        },
        {
            id: 5,
            name: "Robot Vacuum",
            brand: "iRobot",
            model: "Roomba i7+",
            price: 799.99,
        },
    ];


    return (
        <div>
            <div className='md:hidden' onClick={() => setMenubar(!menubar)}>
                <span>{menubar === true ?
                    <XMarkIcon className="h-6 w-6 text-blue-500" />
                    : <Bars4Icon className="h-6 w-6 text-blue-500" />
                }
                </span>

            </div>
                <ul className= {`md:flex absolute md:static ${menubar ? 'top-6' : '-top-48'}`}>
                {
                    items.map(item => <Link
                        key={item.id}
                        item={item}
                    ></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;