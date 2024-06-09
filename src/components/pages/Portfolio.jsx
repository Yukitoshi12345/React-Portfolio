import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import Coding_Quiz from '../../assets/projects/Coding_Quiz.png';
import Gaming_University from '../../assets/projects/Gaming_University.png';
import Lets_Brag from '../../assets/projects/Lets_Brag.png';
import Pet_Palace from '../../assets/projects/Pet_Palace.png';
import USYDCyber from '../../assets/projects/USYDCyber.png';
import Weather_Dashboard from '../../assets/projects/Weather_Dashboard.png';

export default function Portfolio() {
  const portfolio = [
    {
      title: 'Pet Palace',
      img: Pet_Palace,
      desc: 'I developed a MERN stack Pet Adoption Platform with two teammates, styled with Tailwind CSS and daisyUI. This responsive, installable web app features dynamic',
      extraInfo:
        'pet listings, user authentication, Stripe for secure donations, and EmailJS for seamless communication, enhancing engagement with animal shelters.',
      url: '#',
      herokuUrl: 'https://pet-palace-syll.onrender.com/',
    },
    {
      title: 'Lets Brag',
      img: Lets_Brag,
      desc: "I developed Let's Brag, a social media platform with three teammates, using Node.js, Express.js, Handlebars.js, and MySQL, and incorporating multer for file handling. Styled with",
      extraInfo:
        'Tailwind CSS, DaisyUI and deployed on Heroku, the platform provides a dynamic, interactive space for users to share and celebrate achievements.',
      url: '#',
      herokuUrl: 'https://lets-brag-b258984e3793.herokuapp.com/',
    },
    {
      title: 'The University of Gaming',
      img: Gaming_University,
      desc: 'I developed "The University of Gaming" with three teammates, a responsive web portal deployed on GitHub Pages. Using Tailwind CSS and DaisyUI, it integrates GameSpot and',
      extraInfo:
        'RAWG APIs to provide detailed video game profiles, recent searches, and weekly news, enhancing access to gaming information.',
      url: '#',
      herokuUrl: 'https://yukitoshi12345.github.io/The-University-of-Gaming/',
    },
    {
      title: 'USYD Cyber Security Website',
      img: USYDCyber,
      desc: 'I collaborated with a team of technology specialists to develop the inaugural website for the University of Sydney Cyber Security Society. Using React and Bootstrap, we created',
      extraInfo:
        "a user-friendly platform that supports the society's mission by enhancing cybersecurity awareness and education among students.",
      url: '#',
      herokuUrl: 'https://usydcyber.com/',
    },
    {
      title: 'Weather Dashboard',
      img: Weather_Dashboard,
      desc: 'I developed a weather dashboard that provides real-time and forecasted weather conditions for cities worldwide, enhancing travel planning. Utilising JavaScript, Day.js, jQuery, and Bootstrap, the platform',
      extraInfo:
        ' offers an intuitive interface with a persistent search history, allowing users to easily access and revisit their queries.',
      url: '#',
      herokuUrl: 'https://yukitoshi12345.github.io/Weather-Dashboard/',
    },
    {
      title: 'Coding Quiz Game',
      img: Coding_Quiz,
      desc: 'I developed a browser-based coding quiz application to sharpen JavaScript skills, featuring a responsive UI and timed, multiple-choice questions. Built with HTML, CSS, and JavaScript, this app challenges',
      extraInfo:
        'users with time penalties for incorrect answers and allows score saving upon completion, showcasing my front-end development proficiency.',
      url: '#',
      herokuUrl: 'https://yukitoshi12345.github.io/Coding-Quiz-Game/',
    },
  ];

  // state to manage icon visibility
  const [visibleIcons, setVisibleIcons] = useState(
    new Array(portfolio.length).fill(false),
  );

  // function to toggle icon visibility
  const toggleIcons = (index) => {
    const updatedVisibility = [...visibleIcons];
    updatedVisibility[index] = !updatedVisibility[index];
    setVisibleIcons(updatedVisibility);
  };

  return (
    <>
      <h1
        className="text-center text-4xl font-bold mt-10 mb-6 text-indigo-600"
        style={{ fontFamily: 'math' }}
      >
        Check out my projects
        <svg
          className="animate-bounce w-10 h-10 mx-auto mt-4"
          fill="none"
          color="red"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ display: 'block' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 9l9 9 9-9"
          />
        </svg>
      </h1>

      <div className="font-roboto mx-7 my-7 p-6 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolio.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
            >
              <div className="border border-gray-300 bg-gray-200">
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-48 mx-auto rounded-none"
                  style={{ height: '330px' }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-indigo-600">
                  {project.title}
                </h3>
                <p
                  className="text-gray-600 mb-5 overflow-hidden transition-max-height duration-300"
                  style={{ maxHeight: visibleIcons[index] ? '500px' : '72px' }} // Adjust maxHeight for expanded/collapsed state
                >
                  {project.desc}
                  {!visibleIcons[index] && <span>...</span>}{' '}
                  {/* Show ellipsis when extra info is hidden */}
                  {visibleIcons[index] && <span>{project.extraInfo}</span>}{' '}
                  {/* Show extra info when toggled */}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleIcons(index)}
                    className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700"
                  >
                    {visibleIcons[index] ? 'Show Less' : 'Show More'}
                  </button>

                  <div className="flex items-center ml-2 relative">
                    <a
                      href={project.herokuUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGlobe className="cursor-pointer text-3xl text-gray-800 hover:text-black mx-2 transition-all duration-300 transform hover:scale-110" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
