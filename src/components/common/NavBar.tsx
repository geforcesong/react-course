import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState<boolean>(false);

  const menus = useMemo(
    () => [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        subMenus: [
          { text: 'About us', link: '/about' },
          { text: 'License', link: '/license' },
        ],
      },
      {
        text: 'Demos',
        subMenus: [
          { text: 'Countries', link: '/countries' },
          { text: 'Calculator', link: '/helloworld' },
          { text: 'Zustand', link: '/zustand' },
          { text: 'ParentChild', link: '/parent-child' },
        ],
      },
      {
        text: 'Tests',
        subMenus: [
          { text: 'Form Test', link: '/tests/form' },
          { text: 'Temp Test', link: '/tests/temp-test' },
        ],
      },
    ],
    [],
  );

  const handleMobileClick = () => {
    setMobileMenuStatus((prev) => !prev);
  };

  return (
    <nav className='bg-white shadow-md font-semibold'>
      <div>
        <div className='flex justify-between bg-black'>
          <div className='flex'>
            <div>
              <a href='#' className='flex items-center py-4 px-2'>
                <span className='text-white text-lg'>React Course</span>
              </a>
            </div>
            <div className='hidden md:flex items-center'>
              {menus.map((menu) => {
                if (!menu.subMenus || !menu.subMenus.length) {
                  return (
                    <Link
                      key={menu.text}
                      to={menu.link!}
                      className='py-4 px-2 text-gray-100 hover:text-white hover:bg-green-500'
                    >
                      {menu.text}
                    </Link>
                  );
                }
                return (
                  <div
                    key={menu.text}
                    className='group relative py-4 px-2 text-gray-100 hover:text-white hover:bg-green-500'
                  >
                    <button>{menu.text}</button>
                    <div className='hidden flex-col group-hover:flex text-white bg-black absolute py-1 px-1 top-[55px] left-[0px]'>
                      {menu.subMenus.map((sm) => {
                        return (
                          <div
                            className='py-1 px-2 hover:bg-green-500 min-w-[80px]'
                            key={sm.text}
                          >
                            <Link
                              to={sm.link}
                              className='text-white whitespace-nowrap'
                            >
                              {sm.text}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-3 '>
            <a
              href=''
              className='py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300'
            >
              Log In
            </a>
            <a
              href=''
              className='py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300'
            >
              Sign Up
            </a>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              className='outline-none mobile-menu-button'
              onClick={handleMobileClick}
            >
              <i
                className={`${
                  mobileMenuStatus ? 'icon-close' : 'icon-view-list'
                } text-white text-xl mr-2`}
              ></i>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuStatus && (
        <div className='mobile-menu'>
          <ul className=''>
            {menus.map((menu) => {
              return (
                <li key={menu.text}>
                  <div>
                    <a href={menu.link} className='block text-sm px-2 py-2'>
                      {menu.text}
                    </a>
                    {menu.subMenus?.length &&
                      menu.subMenus.map((subMenu) => {
                        return (
                          <Link
                            key={subMenu.text}
                            to={subMenu.link}
                            className='block text-sm pl-8 py-2 whitespace-nowrap'
                          >
                            {subMenu.text}
                          </Link>
                        );
                      })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};
