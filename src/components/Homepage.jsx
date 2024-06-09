import React, { useState } from 'react';
import profilePic from '../assets/Yukitoshi.png';

const Homepage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section id="about" className="section bg-secondary">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24">
            <img
              className="object-cover h-full w-[300px] md:mx-auto lg:mx-0 rounded-2xl mt-20 lg:mt-40"
              src={profilePic}
              alt="Yukitoshi Imaizumi-Zhou"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left mt-20 lg:mt-40">
              <div className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-25 before:-top-[2rem] before:hidden before:lg:block">
                  Yukitoshi Imaizumi-Zhou
                </h2>
                <p className="text-accent">Full-stack Web Developer</p>
                <hr className="mb-8 opacity-25 border-t-4 border-indigo-300 w-full" />
                <p className="mb-8 text-center lg:text-justify">
                  I'm a mathematics and statistics graduate from the University
                  of Sydney, with a passion for leveraging data to drive
                  meaningful insights. Through the university's coding bootcamp,
                  I've mastered full-stack web development, adding a versatile
                  skill set to my analytical toolbox. Whether it's crafting
                  interactive web applications or diving deep into data
                  analysis, I'm dedicated to delivering impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
