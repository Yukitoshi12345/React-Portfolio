import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic1 from '../assets/Yukitoshi4.png';
import profilePic2 from '../assets/Yukitoshi5.png';

const Homepage = () => {
  const images = [profilePic1, profilePic2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const renderDots = () => {
    return images.map((_, index) => (
      <span
        key={index}
        className={`inline-block h-2 w-2 mx-1 rounded-full ${
          index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-400'
        }`}
      />
    ));
  };

  const handleSeeMore = () => {
    navigate('/about');
  };

  return (
    <>
      <section id="about" className="section bg-secondary">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24 mt-32">
            <div className="relative mt-20 lg:mt-40 lg:ml-[-2rem]">
              <div className="flex items-center justify-center">
                <button
                  onClick={handlePreviousImage}
                  className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-full p-2 shadow-md"
                >
                  &#9664;
                </button>
                <div className="mx-4">
                  <img
                    className="md:mx-auto lg:mx-0"
                    src={images[currentImageIndex]}
                    alt="Yukitoshi Imaizumi-Zhou"
                  />
                </div>
                <button
                  onClick={handleNextImage}
                  className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-full p-2 shadow-md"
                >
                  &#9654;
                </button>
              </div>
              <div className="flex justify-center mt-4">{renderDots()}</div>
            </div>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left mt-20 lg:mt-5">
              <div className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-25 before:-top-[2rem] before:hidden before:lg:block">
                  Yukitoshi Imaizumi-Zhou
                </h2>
                <p className="text-accent">
                  Full-stack Web Developer and Data Analyst
                </p>
                <hr className="mb-8 opacity-25 border-t-4 border-indigo-300 w-full" />
                <div className="mb-8 text-center lg:text-justify">
                  <p>
                    I'm a mathematics and statistics graduate from the
                    University of Sydney, passionate about using data to drive
                    insights. I've mastered full-stack web development through
                    the university's coding bootcamp and completed a graduate
                    certificate in data science, enhancing my analytical skills.
                    I was one of the top 100 candidates selected for the Amazon
                    Summer School Machine Learning Bootcamp. At university, I
                    held executive roles in various societies, developing
                    leadership and collaboration skills. Professionally, I've
                    worked in administrative and supervisory roles, taught
                    primary school coding, and authored a Math Extension 1
                    textbook. My efforts have been recognised with awards,
                    including life membership in the University of Sydney Union
                    and the Data Society's Best Large Club award. This blend of
                    education, practical experience, and leadership equips me to
                    tackle challenges in data science and web development.
                  </p>
                  <button
                    onClick={handleSeeMore}
                    className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 mt-4"
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
