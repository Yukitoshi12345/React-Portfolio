import angular_logo from '../../assets/skills/angular.png';
import aws_logo from '../../assets/skills/aws.png';
import babel_logo from '../../assets/skills/babel.png';
import bootstrap_logo from '../../assets/skills/bootstrap.png';
import bulma_logo from '../../assets/skills/bulma.png';
import css_logo from '../../assets/skills/css3.png';
import express_logo from '../../assets/skills/expressjs.png';
import git_logo from '../../assets/skills/git.png';
import github_logo from '../../assets/skills/github.png';
import gitlab_logo from '../../assets/skills/gitlab.png';
import graphql_logo from '../../assets/skills/graphql.png';
import handlebars_logo from '../../assets/skills/handlebars.png';
import heroku_logo from '../../assets/skills/heroku.png';
import html_logo from '../../assets/skills/html5.png';
import insomnia_logo from '../../assets/skills/insomnia.png';
import jest_logo from '../../assets/skills/jest.png';
import jquery_logo from '../../assets/skills/jquery.png';
import js_logo from '../../assets/skills/js.png';
import materialize_logo from '../../assets/skills/materialize.png';
import mongodb_logo from '../../assets/skills/mongodb.png';
import mongoose_logo from '../../assets/skills/mongoose.png';
import mysql_logo from '../../assets/skills/mysql.png';
import netlify_logo from '../../assets/skills/netlify.png';
import nodejs_logo from '../../assets/skills/nodejs.png';
import render_logo from '../../assets/skills/render.png';
import postgreSQL_logo from '../../assets/skills/postgreSQL.png';
import postman_logo from '../../assets/skills/postman.png';
import python_logo from '../../assets/skills/python.png';
import react_logo from '../../assets/skills/reactjs.png';
import sequelize_logo from '../../assets/skills/sequelize.png';
import tailwind_logo from '../../assets/skills/tailwindcss.png';
import vite_logo from '../../assets/skills/vite.png';
import vue_logo from '../../assets/skills/vue.png';
import webpack_logo from '../../assets/skills/webpack.png';

import ResumePDF from '/src/assets/Yukitoshi_Resume.pdf';

// Skill
export const skills = [
  // Front End
  {
    image: html_logo,
    name: 'HTML5',
    tech: 'Frontend',
  },
  {
    image: css_logo,
    name: 'CSS3',
    tech: 'Frontend',
  },
  {
    image: bootstrap_logo,
    name: 'Bootstrap',
    tech: 'Frontend',
  },
  {
    image: tailwind_logo,
    name: 'Tailwind CSS',
    tech: 'Frontend',
  },
  {
    image: bulma_logo,
    name: 'Bulma',
    tech: 'Frontend',
  },
  {
    image: materialize_logo,
    name: 'Materialize',
    tech: 'Frontend',
  },
  {
    image: js_logo,
    name: 'JavaScript',
    tech: 'Frontend',
  },
  {
    image: jquery_logo,
    name: 'jQuery',
    tech: 'Frontend',
  },
  {
    image: handlebars_logo,
    name: 'Handlebars',
    tech: 'Frontend',
  },
  {
    image: react_logo,
    name: 'React',
    tech: 'Frontend',
  },
  {
    image: angular_logo,
    name: 'Angular',
    tech: 'Frontend',
  },
  {
    image: vue_logo,
    name: 'Vue',
    tech: 'Frontend',
  },
  {
    image: vite_logo,
    name: 'Vite',
    tech: 'Frontend',
  },

  // Back End
  {
    image: nodejs_logo,
    name: 'NodeJS',
    tech: 'Backend',
  },
  {
    image: express_logo,
    name: 'ExpressJS',
    tech: 'Backend',
  },
  {
    image: mysql_logo,
    name: 'MySQL',
    tech: 'Backend',
  },
  {
    image: postgreSQL_logo,
    name: 'PostgreSQL',
    tech: 'Backend',
  },
  {
    image: mongodb_logo,
    name: 'MongoDB',
    tech: 'Backend',
  },
  {
    image: mongoose_logo,
    name: 'Mongoose',
    tech: 'Backend',
  },
  {
    image: sequelize_logo,
    name: 'Sequelize',
    tech: 'Backend',
  },
  {
    image: graphql_logo,
    name: 'GraphQL',
    tech: 'Backend',
  },
  {
    image: python_logo,
    name: 'Python',
    tech: 'Backend',
  },

  // Development
  {
    image: git_logo,
    name: 'Git',
    tech: 'Neither',
  },
  {
    image: github_logo,
    name: 'Github',
    tech: 'Neither',
  },
  {
    image: gitlab_logo,
    name: 'Gitlab',
    tech: 'Neither',
  },
  {
    image: webpack_logo,
    name: 'Webpack',
    tech: 'Neither',
  },
  {
    image: babel_logo,
    name: 'Babel',
    tech: 'Neither',
  },
  {
    image: jest_logo,
    name: 'Jest',
    tech: 'Neither',
  },
  {
    image: postman_logo,
    name: 'Postman',
    tech: 'Neither',
  },
  {
    image: insomnia_logo,
    name: 'Insomnia',
    tech: 'Neither',
  },
  {
    image: aws_logo,
    name: 'aws',
    tech: 'Neither',
  },
  {
    image: heroku_logo,
    name: 'Heroku',
    tech: 'Neither',
  },
  {
    image: netlify_logo,
    name: 'Netlify',
    tech: 'Neither',
  },
  {
    image: render_logo,
    name: 'Render',
    tech: 'Neither',
  },
];

const Resume = () => {
  const clickHandler = () => {
    window.open(ResumePDF);
  };

  const Skills = ({ stack }) => {
    let category;
    switch (stack) {
      case 'Frontend':
        category = 'Frontend Skills';
        break;
      case 'Backend':
        category = 'Backend Skills';
        break;
      default:
        category = 'Development Skills';
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

      <Skills stack={'Frontend'} />
      <Skills stack={'Backend'} />
      <Skills stack={'Neither'} />

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
