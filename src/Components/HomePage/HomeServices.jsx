import React from 'react';
import { assets } from '../../assests/assests';
import { Link } from 'react-router-dom';

///* hover:bg-gradient-to-r  ${service.bgGradient}*/
const HomeServices = () => {
    return (
        <div className='mb-20 shadow-md'>
            <div className='mt-5 text-center'>
                <div className='font-bold text-5xl mb-5   text-red-500 wow animate__animated animate__fadeInDown'>
                    Our Services
                </div>
                <div className='wow animate__fadeInBottomLeft animate__animated flex justify-center items-center text-center p-4'>
                    <p className='max-w-3xl text-lg text-gray-500-300'>
                        Watch Your Ideas Grow into a Thriving Reality, Faster Than Ever. Empower Your Vision with Bespoke Services. Transform Ideas into Success, Accelerating Your Growth.
                    </p>
                </div>
            </div>
            <div className='flex justify-center mt-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-10'>
                    {services.map((service, index) => (
                      <Link to={service.link} >
                     <div key={index} className={`wow animate__animated animate__zoomInDown  group relative cursor-pointer items-center rounded-xl   justify-center overflow-hidden transition-shadow hover:bg-gradient-to-b from-transparent to-black hover:shadow-2xl  hover:shadow-gray-500`}> 
                            <div className='text-center w-96  rounded-xl overflow-hidden h-96  object-cover group-hover:opacity-80 transition-opacity duration-300'>

                                <div className='flex flex-col text-lg font-bold mt-5 text-black mb-5'>
                                    <span>{service.title}</span>
                                </div>
                                <div className='group-hover:invisible'>
                                    <img src={service.image} alt="services" className="w-full h-auto object-cover rounded-2xl" loading='lazy' />
                                </div>
                                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <p className="text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-28">
                                        {service.description}
                                    </p>
                                    <div className='text-center mt-16 '>
                                        <div className='w-16 flex justify-center gap-10 '>
                                            {service.icons.map((icon, idx) => (
                                                <img key={idx} src={icon} alt="" className="w-8 h-8 " />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const services = [
    {
        title: "WEB DEVELOPMENT",
        image: assets.webImage,
        description: "Creating visually stunning and highly functional websites tailored to your needs, ensuring a seamless user experience.",
        icons: [assets.html, assets.react, assets.nodejs],
        link:"/WebDevelopment"
    },
    {
        title: "FULL STACK DEVELOPMENT",
        image: assets.fullStack,
        description: "From static applications to highly customized dashboard apps, our Full stack engineers deliver with ease, precision, and within timelines.",
        icons: [assets.Mongodb, assets.react, assets.nodejs],
        link:"/FullStackDevelopment"
        
    },
    {
        title: "WEB DESIGNING",
        image: assets.webdesigning,
        description: "Our design team crafts unique and modern designs that make your website stand out, leaving a lasting impression.",
        icons: [assets.tailwind, assets.palette, assets.css3],
        link:"/WebDesign"
    },
];

export default HomeServices;
