import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <nav className='navbar navbar-expand navbar-dark bg-dark mb-4'>
    <div className='container'>
      <img src='/bitcoin.png' alt='logo' width='30' />
      <a href='#' className='navbar-brand pl-2'>
        BitzPrice
      </a>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'>Home</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-link'>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  // For styling individual pages
  // {/* <style jsx>{`
  //   ul {
  //     background: #333;
  //     color: #fff;
  //     list-style: none;
  //     display: flex;
  //   }

  //   ul li {
  //     font-size: 18px;
  //     margin-right: 20px;
  //   }

  //   ul li a {
  //     color: #fff;
  //     text-decoration: none;
  //   }
  // `}</style> */}
);

export default Navbar;
