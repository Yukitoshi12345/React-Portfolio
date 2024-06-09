import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer
      className="font-roboto w-full p-4 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-100 flex flex-col items-center justify-between fixed bottom-0 md:flex-row"
      style={{ fontFamily: 'math' }}
    >
      <div className="flex space-x-4 mb-2 md:mb-0">
        <a
          href="https://github.com/yukitoshi12345"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub
            size={35}
            className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110 md:size-45"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yukitoshi-imaizumi-zhou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            size={35}
            className="text-blue-700 hover:text-blue-900 transition-all duration-300 transform hover:scale-110 md:size-45"
          />
        </a>
        <a
          href="https://www.instagram.com/yukitoshi3256/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            size={35}
            className="text-purple-600 hover:text-purple-800 transition-all duration-300 transform hover:scale-110 md:size-45"
          />
        </a>
      </div>
      <div className="text-center text-sm md:text-base">
        © {new Date().getFullYear()} Yukitoshi Imaizumi-Zhou. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
