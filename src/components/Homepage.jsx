import React from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic1 from '../assets/Yukitoshi4.png';

const Homepage = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/about');
    window.scrollTo({ top: 0 });
  };

  return (
    <section id="about" className="section bg-secondary pb-24">
      {' '}
      {/* Added padding-bottom to the section */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 mt-32">
          <div className="lg:w-1/3 flex justify-center sm:mt-[-60px] mt-[-100px] lg:mt-12">
            <img
              className="w-80 h-80" // Adjust the width and height as needed
              src={profilePic1}
              alt="Yukitoshi Imaizumi Zhou"
            />
          </div>

          <div className="lg:w-2/3 flex flex-col items-center text-center lg:items-start lg:text-left mt-[-60px] lg:mt-5">
            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-25 before:-top-[2rem] before:hidden before:lg:block">
              Yukitoshi Imaizumi Zhou
            </h2>
            <p className="text-accent">
              Full-stack Web Developer and Data Analyst
            </p>
            <hr className="mb-8 opacity-25 border-t-4 border-indigo-300 w-full" />
            <div className="mb-8 text-center lg:text-justify">
              <p>
                I'm a mathematics and statistics graduate from the University of
                Sydney, passionate about using data to drive insights. I've
                mastered full-stack web development through the university's
                coding bootcamp and completed a graduate certificate in data
                science, enhancing my analytical skills. I was one of the top
                100 candidates selected for the Amazon Summer School Machine
                Learning Bootcamp. At university, I held executive roles in
                various societies, developing leadership and collaboration
                skills. Professionally, I've worked in administrative and
                supervisory roles, taught primary school coding, and authored a
                Math Extension 1 textbook. My efforts have been recognised with
                awards, including life membership in the University of Sydney
                Union and the Data Society's Best Large Club award. This blend
                of education, practical experience, and leadership equips me to
                tackle challenges in data science and web development.
              </p>
              <button
                onClick={handleSeeMore}
                className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 mt-8" // Adjusted the margin-top to 8
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
