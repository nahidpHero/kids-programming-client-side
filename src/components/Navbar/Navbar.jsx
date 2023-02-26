import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar justify-between text-white bg-primary-focus">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary-focus text-wh rounded-box w-52">
        <li><a>Home</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Courses
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost  normal-case text-3xl">Kids Programming</a>
  </div>
  <div className="justify-end hidden  lg:flex">
    <ul className="menu menu-horizontal  px-1">
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <a>
          Courses
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Phython</a></li>
          <li><a>C programming</a></li>
          <li><a>Web digine</a></li>

        </ul>
      </li>
      <li tabIndex={0}>
        <a>
          Resources
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Blog</a></li>
          <li><a>Free Courses</a></li>

        </ul>
      </li>
      <li><a>About us</a></li>
      <li><a>Career</a></li>
      <li><a>Contact</a></li>

    </ul>
  </div>
  
</div>
    );
};

export default Navbar;