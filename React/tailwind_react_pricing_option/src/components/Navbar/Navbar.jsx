import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog"
    }
  ];
  

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = navigationData.map(link => <Link key={link.id} link={link}></Link>);
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex gap-3' onClick={() => setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute bg-amber-200 ${open ? 'top-16' : '-top-96'} left-0 p-5 rounded-lg shadow-lg transition-all duration-1000`}>
                    {links}
                </ul>
                <h3>My Navbar</h3>
            </span>
            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">About</a></li>
                <li className='mr-10'><a href="/">Blog</a></li>
                <li className='mr-10'><a href="/">Home</a></li>
            </ul> */}

            {/* <ul className='flex'>
                {
                navigationData.map(route => (
                    <li key={route.id} className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                    </li>
                ))
                }
            </ul> */}

            <ul className='md:flex gap-10 hidden'>
            {
                links
            }
            </ul>

        </nav>
    );
};

export default Navbar;