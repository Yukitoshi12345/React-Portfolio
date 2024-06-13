import html_logo from '../../assets/skills/html5.png';
import css_logo from '../../assets/skills/css3.png';
import tailwind_logo from '../../assets/skills/tailwindcss.png';
import js_logo from '../../assets/skills/js.png';
import nodejs_logo from '../../assets/skills/nodejs.png';
import git_logo from '../../assets/skills/git.png';
import mysql_logo from '../../assets/skills/mysql.png';
import mongodb_logo from '../../assets/skills/mongodb.png';
import react_logo from '../../assets/skills/reactjs.png';
import express_logo from '../../assets/skills/expressjs.png';
import mongoose_logo from '../../assets/skills/mongoose.png';
import webpack_logo from '../../assets/skills/webpack.png';
import jest_logo from '../../assets/skills/jest.png';
import postman_logo from '../../assets/skills/postman.png';
import sequelize_logo from '../../assets/skills/sequelize.png';
import graphql_logo from '../../assets/skills/graphql.png';
import jquery_logo from '../../assets/skills/jquery.png';

import ResumePDF from '/src/assets/Yukitoshi_Resume.pdf';

// Skill
export const skills = [
  {
    image: html_logo,
    name: 'HTML5',
    tech: 'frontend',
  },
  {
    image: css_logo,
    name: 'CSS3',
    tech: 'frontend',
  },
  {
    image: tailwind_logo,
    name: 'Tailwind CSS',
    tech: 'frontend',
  },
  {
    image: js_logo,
    name: 'JavaScript',
    tech: 'frontend',
  },
  {
    image: nodejs_logo,
    name: 'NodeJS',
    tech: 'backend',
  },
  {
    image: git_logo,
    name: 'Git',
    tech: 'neither',
  },
  {
    image: mysql_logo,
    name: 'MySQL',
    tech: 'backend',
  },
  {
    image: mongodb_logo,
    name: 'MongoDB',
    tech: 'backend',
  },
  {
    image: react_logo,
    name: 'ReactJS',
    tech: 'frontend',
  },
  {
    image: express_logo,
    name: 'ExpressJS',
    tech: 'backend',
  },
  {
    image: mongoose_logo,
    name: 'Mongoose',
    tech: 'backend',
  },
  {
    image: webpack_logo,
    name: 'Webpack',
    tech: 'neither',
  },
  {
    image: jest_logo,
    name: 'Jest',
    tech: 'neither',
  },
  {
    image: postman_logo,
    name: 'Postman',
    tech: 'neither',
  },
  {
    image: sequelize_logo,
    name: 'Sequelize',
    tech: 'backend',
  },
  {
    image: graphql_logo,
    name: 'GraphQL',
    tech: 'backend',
  },
  {
    image: jquery_logo,
    name: 'jQuery',
    tech: 'frontend',
  },
];

const Resume = () => {
  const clickHandler = () => {
    window.open(ResumePDF);
  };

  const Skills = ({ stack }) => {
    let category;
    switch (stack) {
      case 'frontend':
        category = 'Frontend Skills';
        break;
      case 'backend':
        category = 'Backend Skills';
        break;
      default:
        category = 'Other Skills';
        break;
    }
    return (
      <div className="container mx-auto flex flex-col items-center justify-center py-5 md:grid md:grid-cols-6">
        <h1 className="title max-w-fit md:col-span-1 mb-4 md:mb-0">
          {category}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 md:col-span-5 ">
          {skills.map(
            (skill, index) =>
              skill.tech === stack && (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="size-12 md:size-20"
                  />
                  <h2 className="text-paragraph text-sm">{skill.name}</h2>
                </div>
              ),
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className="font-roboto mx-auto my-10 max-w-4xl p-8 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center"
      style={{ fontFamily: 'math' }}
    >
      <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        My Technical Proficiencies
      </h1>

      {/* <p className="text-lg text-justify">
        I am a dedicated full-stack web developer with a strong proficiency in
        both frontend and backend technologies. My expertise in modern frontend
        frameworks, particularly React, allows me to create dynamic and
        responsive user interfaces. On the backend, I have extensive experience
        with Node.js and Express, enabling me to build robust and scalable
        server-side applications. Additionally, I am adept at version control
        using Git and have practical experience working with databases such as
        MySQL and MongoDB, ensuring efficient and secure data management.
      </p> */}

      <Skills stack={'frontend'} />
      <Skills stack={'backend'} />
      <Skills stack={'neither'} />

      <a
        href={ResumePDF}
        download
        className="mt-6 flex justify-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-gradient-to-r hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 transition-colors duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
