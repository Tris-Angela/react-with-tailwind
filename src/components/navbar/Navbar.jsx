import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [menubar, setMenubar] = useState(false)
    

    const navbarOptions = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Contact Us', link: '/contact' }
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
                <ul className= {`md:flex absolute  bg-gray-900 text-white p-4 font-bold text-2xl md:static ${menubar ? 'top-6' : '-top-48'}`}>
                {
                    navbarOptions.map(option => <Link
                        key={option.id}
                        option={option}
                    ></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;