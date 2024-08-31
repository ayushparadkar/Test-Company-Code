import React, { useEffect } from 'react';
import { assets } from '../../assests/assests';
import {  Instagram, LinkedIn } from '@mui/icons-material';
import WOW from 'wowjs';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { RiFocus2Line } from "react-icons/ri";
import 'animate.css';
import { Link } from 'react-router-dom';
import { GiBurningPassion } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutUs = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
    }, []);

    return (
        <div className=''>
            <div className="relative text-center mb-2 mt-5 mx-5 ">
                <img className="h-72 w-full object-cover rounded-xl" src={assets.AboutUs} alt="header about us" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-700 ">
                    <div className='flex flex-col font-bold text-3xl wow animate__animated animate__pulse sm:mb-5'>
                        <span>"Innovating today, shaping tomorrow. Together,</span>
                        <span>we create the future."</span>
                    </div>
                    <Link to="/ContactUs">
                    <button className="rounded-full font-bold text-white py-3 px-6 bg-red-500 hover:bg-red-700 sm:mt-6 inline-flex items-center gap-2 transition-transform transform hover:scale-105">
              Contact Us <ArrowForwardIcon/>
            </button>
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8  text-black mb-7 mx-5 rounded-xl">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className=" wow animate__animated animate__backInLeft">
                        <img
                            src={assets.WWR}
                            className="w-96 mx-auto  "
                            alt="Who We Are"
                        />

                    </div>
                </div>
                <div className="flex flex-col justify-center text-black wow animate__animated animate__backInRight">
                    <div className='text-3xl font-bold text-red-500 mb-5'>WHO WE ARE ?</div>
                    <p className="mb-4 text-lg leading-relaxed wow animate__animated ">
                        Welcome to Itrio, your innovative partner in the world of IT solutions. As a forward-thinking startup, we are dedicated to redefining the IT landscape with cutting-edge technology and a fresh perspective.
                    </p>
                    <p className="text-lg leading-relaxed">
                        At Itrio, our mission is to empower businesses with state-of-the-art IT solutions that drive efficiency, foster growth, and unlock new opportunities. Our team of passionate tech experts combines deep industry knowledge with a commitment to excellence, providing tailored services that address the unique needs of each client.
                    </p>
                </div>
            </div>

            <div className=''>
                {/* What We Believe Section */}
                <div className="mb-12  rounded-xl grid grid-cols-1 md:grid-cols-2">

                    <div className="  content-center ml-10 md:ml-28 ">
                        <p className= ' text-3xl  font-bold text-red-500 mb-10 wow animate__animated animate__bounceInLeft  '>Our Core Beliefs</p>
                        <p className=' text-xl   leading-relaxed  wow animate__animated animate__fadeInBottomRight'>
                            "Innovating the Future, One Solution at a Time, Empowering Your Vision with Cutting-Edge Technology, Transforming Ideas into Digital Success, Leading the Way in Tomorrow’s Technology Today."
                        </p>
                    </div>
                    <div className=' grid place-content-center'>
                        <img src={assets.why} className='w-96 ' alt="" />
                    </div>
                </div>
                <div className='flex flex-wrap justify-around gap-8 p-4'>
                    <div className='w-40 h-40 shadow-2xl rounded-full flex flex-col items-center justify-center text-center'>
                        <div className='text-3xl mb-2'><Diversity2Icon /></div>
                        <div className='text-lg'>Team Work</div>
                    </div>
                    <div className='w-40 h-40 shadow-2xl rounded-full flex flex-col items-center justify-center text-center'>
                        <div className='text-3xl mb-2'><RiFocus2Line /></div>
                        <div className='text-lg'>Focused</div>
                    </div>
                    <div className='w-40 h-40 shadow-2xl rounded-full flex flex-col items-center justify-center text-center'>
                        <div className='text-3xl mb-2'><GiBurningPassion /></div>
                        <div className='text-lg'>Passionate</div>
                    </div>
                    <div className='w-40 h-40 shadow-2xl rounded-full flex flex-col items-center justify-center text-center'>
                        <div className='text-3xl mb-2'><FaHandsHelping /></div>
                        <div className='text-lg'><p>Trust & Respect</p></div>
                    </div>
                </div>

            </div>


            <div className="bg-white text-gray-900 py-16">
                {/* Meet Our Team Members Section */}
                <div>
                    <div className="text-4xl font-extrabold text-center mb-20">
                        MEET OUR TEAM MEMBERS
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Team Member 1 */}
                        <div className="relative flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 mb-4 group">
                                <img
                                    src={assets.mens1}
                                    alt="Roshan Khapre"
                                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-200"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="flex space-x-4">
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <Instagram className="text-gray-900 hover:text-red-500 transition-colors duration-200" />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <LinkedIn className="text-gray-900 hover:text-blue-500 transition-colors duration-200" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-semibold">ROSHAN KHAPRE</div>
                            <div className="text-sm text-gray-500">Java Full Stack Developer</div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="relative flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 mb-4 group">
                                <img
                                    src={assets.mens2}
                                    alt="Ayush Paradkar"
                                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-200"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="flex space-x-4">
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <Instagram className="text-gray-900 hover:text-red-500 transition-colors duration-200" />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <LinkedIn className="text-gray-900 hover:text-blue-500 transition-colors duration-200" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-semibold">AYUSH PARADKAR</div>
                            <div className="text-sm text-gray-500">Frontend Developer</div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="relative flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 mb-4 group">
                                <img
                                    src={assets.mens3}
                                    alt="Shubham Kinkar"
                                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-200"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="flex space-x-4">
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <Instagram className="text-gray-900 hover:text-red-500 transition-colors duration-200" />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <LinkedIn className="text-gray-900 hover:text-blue-500 transition-colors duration-200" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-semibold">SHUBHAM KINKAR</div>
                            <div className="text-sm text-gray-500">Full Stack Developer</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default AboutUs;
