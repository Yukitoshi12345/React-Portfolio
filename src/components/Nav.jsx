import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import logo from '../assets/logos/logo10.png';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleCloseMenu = () => {
    setToggle(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 975) {
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100"
      style={{ fontFamily: 'math' }}
    >
      <div className="flex items-center justify-between p-6 lg:p-10 lg:flex-row">
        <div className="flex items-center space-x-2 font-serif text-3xl tracking-wider">
          <Link to="/" className="flex items-center ml-[-28px] lg:ml-0">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 lg:w-16 lg:h-16 ml-2 sm:-ml-2"
            />
            <span className="ml-4 lg:ml-8 text-indigo-600 dark:text-indigo-400 sm:ml-2">
              <span className="block text-2xl lg:hidden">Yukitoshi</span>
              <span className="hidden lg:block text-3xl">
                Yukitoshi Imaizumi-Zhou
              </span>
            </span>
          </Link>
        </div>

        <div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(false)}
              size="1.5em"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 lg:hidden transform -translate-x-[0.8cm]"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setToggle(true)}
              size="1.5em"
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 lg:hidden transform -translate-x-[0.8cm]"
            />
          )}
          <div className="hidden lg:flex space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'rounded-full px-5 py-2 text-xl cursor-pointer bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold transition duration-300 ease-in-out flex items-center space-x-2'
                  : 'rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 dark:text-gray-300 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2'
              }
            >
              <span>About Me</span>
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? 'rounded-full px-5 py-2 text-xl cursor-pointer bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold transition duration-300 ease-in-out flex items-center space-x-2'
                  : 'rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 dark:text-gray-300 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2'
              }
            >
              <span>Portfolio</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'rounded-full px-5 py-2 text-xl cursor-pointer bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold transition duration-300 ease-in-out flex items-center space-x-2'
                  : 'rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 dark:text-gray-300 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2'
              }
            >
              <span>Contact</span>
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? 'rounded-full px-5 py-2 text-xl cursor-pointer bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold transition duration-300 ease-in-out flex items-center space-x-2'
                  : 'rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 dark:text-gray-300 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2'
              }
            >
              <span>Resume</span>
            </NavLink>
          </div>
        </div>
      </div>

      {toggle && (
        <div className="font-roboto bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg p-5 pt-0">
          <NavLink
            to="/"
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              isActive
                ? 'block px-5 py-2 text-xl bg-gradient-to-r rounded-full from-purple-600 via-indigo-600 to-blue-600 text-white transition duration-300 ease-in-out'
                : 'block px-5 py-2 text-xl text-gray-800 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-400 hover:to-blue-400 transition duration-300 ease-in-out rounded-full'
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              isActive
                ? 'block px-5 py-2 text-xl bg-gradient-to-r rounded-full from-purple-600 via-indigo-600 to-blue-600 text-white transition duration-300 ease-in-out'
                : 'block px-5 py-2 text-xl text-gray-800 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-400 hover:to-blue-400 transition duration-300 ease-in-out rounded-full'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              isActive
                ? 'block px-5 py-2 text-xl bg-gradient-to-r rounded-full from-purple-600 via-indigo-600 to-blue-600 text-white transition duration-300 ease-in-out'
                : 'block px-5 py-2 text-xl text-gray-800 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-400 hover:to-blue-400 transition duration-300 ease-in-out rounded-full'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            onClick={handleCloseMenu}
            className={({ isActive }) =>
              isActive
                ? 'block px-5 py-2 text-xl bg-gradient-to-r rounded-full from-purple-600 via-indigo-600 to-blue-600 text-white transition duration-300 ease-in-out'
                : 'block px-5 py-2 text-xl text-gray-800 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-400 hover:to-blue-400 transition duration-300 ease-in-out rounded-full'
            }
          >
            Resume
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
