import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsSpotify,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';
import { SiHeroku } from 'react-icons/si';
import AvatarPic from '../assets/avatar.png';
import React, { useState } from 'react';

const Homepage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div
        className="flex flex-col flex-wrap lg:flex-row justify-center items-center from-blue-200 to-indigo-100  mt-7 lg:p-20 min-h-screen space-y-10 lg:space-x-10"
        style={{
          fontFamily: 'math',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 'inherit',
          marginBottom: '30px',
        }}
      >
        <div className="flex flex-col items-center w-full p-5 lg:w-1/2 space-y-5">
          <p className="text-2xl lg:text-4xl font-semibold text-indigo-700">
            👋 I'm Yukitoshi Imaizumi-Zhou
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold ">
            Full-stack Web Developer
          </h1>
          <hr className="border-t-4 border-indigo-300 w-full" />
          <p className="text-lg lg:text-xl leading-relaxed text-center">
            I'm a mathematics and statistics graduate from the University of
            Sydney, with a passion for leveraging data to drive meaningful
            insights. Through the university's coding bootcamp, I've mastered
            full-stack web development, adding a versatile skill set to my
            analytical toolbox. Whether it's crafting interactive web
            applications or diving deep into data analysis, I'm dedicated to
            delivering impactful solutions.
          </p>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2 relative">
          <img
            src={AvatarPic}
            alt="Yukitoshi Imaizumi-Zhou"
            className="relative z-10 rounded-full shadow-2xl border-8 border-white"
            style={{ width: '300px', height: '300px', opacity: 0.9 }}
          />
        </div>
        <div className="flex p-5 flex-col items-center w-full lg:w-1/2 space-y-5">
          <p className="text-3xl lg:text-4xl font-semibold text-indigo-700">
            Let's Connect
          </p>

          <div className="flex space-x-4 mb-7">
            <a
              href="https://github.com/yukitoshi12345"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub
                size={45}
                className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yukitoshi-imaizumi-zhou/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin
                size={45}
                className="text-blue-700 hover:text-blue-900 transition-all duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://www.instagram.com/yukitoshi3256/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram
                size={45}
                className="text-purple-600 hover:text-purple-800 transition-all duration-300 transform hover:scale-110"
              />
            </a>
            {showMore && (
              <>
                <BsFacebook
                  size={45}
                  className="text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-110"
                />
                <BsInstagram
                  size={45}
                  className="text-pink-600 hover:text-pink-800 transition-all duration-300 transform hover:scale-110"
                />
                <BsSpotify
                  size={45}
                  className="text-green-600 hover:text-green-800 transition-all duration-300 transform hover:scale-110"
                />
                <BsTwitter
                  size={45}
                  className="text-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
