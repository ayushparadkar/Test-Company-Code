import React from 'react';
import { assets } from '../../assests/assests.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import pharma from "../../assests/myristicapharmaceutical.webp"
import Ecomm from '../../assests/eccom.webp'
import social from '../../assests/social.webp'
const Projects = () => {
  return (
    <div className="px-6 py-16 bg-gray-100">
      <div className=" max-w-7xl mx-auto">
        <div className="wow animate__animated animate__backInDown text-center font-extrabold text-4xl text-gray-800 mb-12 tracking-wide">
          Our Projects
        </div>
        <div className="grid md:grid-cols-2 items-center mb-16">
          <div className="wow animate__animated animate__slideInLeft text-center text-3xl font-extrabold text-red-600">
            Projects We Have Done
          </div>
          <div className="wow animate__animated animate__slideInRight p-4 text-gray-700">
            <p className="leading-relaxed text-lg text-gray-500">
              We successfully completed a full stack web development project, covering both design and development. The website is fully responsive, user-friendly, and meets all client specifications. The client expressed high satisfaction with the quality, attention to detail, and timely delivery. Their positive feedback reflects our commitment to excellence.
            </p>
            <Link to ="/Portfolio">
            <button className="rounded-full text-white py-3 px-6 bg-red-500 hover:bg-red-700 mt-6 inline-flex items-center gap-2 transition-transform transform hover:scale-105">
              View All Projects <ArrowForwardIcon />
            </button>
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 wow animate__animated animate__backInLeft  ">
        <ProjectCard
            imgSrc={pharma}
            title="Pharmacy System"
            description="We successfully developed a pharmacy system for our client."
             link='/Portfolio'
          />
          <ProjectCard
            imgSrc={assets.header}
            title="Food Delivery Website"
            description="We successfully developed a food delivery clone."
            link='/Portfolio'

          />
          <ProjectCard
            imgSrc={Ecomm}
            title="E-commerce Platform"
            description="We successfully developed an e-commerce website."
             link='/Portfolio'
             
          />
          <ProjectCard
            imgSrc={social}
            title="Stock Market Platform"
            description="We successfully developed a instagram clone."
             link='/Portfolio'
          />

        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ imgSrc, title, description,link }) => {
  return (
    <Link to={link}>
    <div className="relative group overflow-hidden rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105">
      <img
        className="h-96 w-full object-cover group-hover:opacity-80 transition-opacity duration-300"
        src={imgSrc}
        alt={title}
        loading='lazy'
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center text-white p-6">
        <div className="text-center">
          <div className="text-xl font-bold">{title}</div>
          <div className="mt-2 text-sm">{description}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Projects;
