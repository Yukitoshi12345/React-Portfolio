import React, { useState } from 'react';
import profilePic1 from '../assets/Yukitoshi1.png';
import profilePic2 from '../assets/Yukitoshi2.png'; // The newly uploaded image

const Homepage = () => {
  const images = [profilePic1, profilePic2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <>
      <section id="about" className="section bg-secondary">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24">
            <div className="relative mt-20 lg:mt-40">
              <button
                onClick={handlePreviousImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                &#9664;
              </button>
              <img
                className="md:mx-auto lg:mx-0 rounded-full"
                src={images[currentImageIndex]}
                alt="Yukitoshi Imaizumi-Zhou"
              />
              <button
                onClick={handleNextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                &#9654;
              </button>
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
                    University of Sydney, with a passion for leveraging data to
                    drive meaningful insights. Through the university's coding
                    bootcamp, I've mastered full-stack web development, adding a
                    versatile skill set to my analytical toolbox. Whether it's
                    crafting interactive web applications or diving deep into
                    data analysis, I'm dedicated to delivering impactful
                    solutions.
                  </p>
                  <br />
                  <p>
                    I have also completed a graduate certificate in data science
                    at the University of Sydney, further enhancing my ability to
                    work with complex datasets and apply advanced analytical
                    techniques. In addition, I was one of the 100 top-selected
                    candidates in ANZ to participate in the Amazon Summer School
                    Machine Learning Bootcamp, where I gained hands-on
                    experience in machine learning and its applications in
                    real-world scenarios.
                  </p>
                  <br />
                  <p>
                    My university experience was enriched by my active
                    involvement in various societies. I served as an executive
                    in several societies at the University of Sydney, including
                    the Mathematics Society, Data Society, Statistics Society,
                    Business Analytics Association, Business Information Systems
                    Association, Cyber Security Society, and Quadball Society.
                    These roles allowed me to develop leadership skills and
                    collaborate with peers who share my interests.
                  </p>
                  <br />
                  <p>
                    Professionally, I have held various roles across different
                    organisations. I have worked in administrative positions and
                    supervisory roles, gaining valuable management experience.
                    As a head teacher, I taught primary school coding, leading
                    educational programs and developing curricula. I authored a
                    Math Extension 1 textbook, demonstrating my expertise and
                    commitment to education. As a peer mentor for postgraduate
                    engineering and undergraduate science students at the
                    University of Sydney, I guided mentees in their transition
                    to university life. Additionally, I hold RSA, First Aid, and
                    Mental Health First Aid certifications.
                  </p>
                  <br />
                  <p>
                    My efforts have been recognised with several awards: Life
                    membership for the University of Sydney Union in 2022, the
                    Data Society's Best Large Club (Dave Burnett Award) in 2023,
                    and winning the Quadball National Championships in 2022. In
                    2023, I was honored to be selected for the state NSW team,
                    where we emerged victorious.
                  </p>
                  <br />
                  <p>
                    This combination of formal education, practical experience,
                    leadership roles, and diverse job responsibilities, along
                    with my recognised achievements, equips me with the skills
                    necessary to tackle a wide range of challenges in the fields
                    of data science and web development.
                  </p>
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
