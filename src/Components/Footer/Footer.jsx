import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=' bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300 '>
             
           <div className='container mx-auto py-10 px-6'>
             <div className='grid md:grid-cols-3 grid-cols-1 gap-7 md:mt-24 md:ml-32'>
             <div >
                    <h2 className='text-2xl font-bold mb-4 text-slate-200 pl-3'>SERVICES</h2>
                    <ul className='space-y-2 text-neutral-400  text-lg '>
                        <li  className=' hover:text-white   w-56'><Link to='/FullStackDevelopment' ><span><ChevronRightIcon/></span > Full Stack Development</Link></li>
                        <li className=' hover:text-white  w-44'><Link to="/WebDevelopment"><span><ChevronRightIcon/></span>web development</Link></li>
                        <li className=' hover:text-white  w-36'><Link to="/WebDesign"><span><ChevronRightIcon/></span>web designing</Link></li>

                    </ul>
                </div>
                <div >
                    <h2 className='text-2xl font-bold mb-4 text-slate-200 pl-3 '>QUICK LINK</h2>
                    <ul className='space-y-2 text-neutral-400  p-0  w-24 text-lg '>
                        <li className=' hover:text-white w-28  '><Link to="/AboutUs"><span><ChevronRightIcon/></span> About us</Link></li>
                        <li className=' hover:text-white'><Link to="/Services"><span><ChevronRightIcon/></span>Services</Link></li>
                        <li className=' hover:text-white'><Link to="/Portfolio"><span><ChevronRightIcon/></span>Portfolio</Link></li>
                        <li className=' hover:text-white'><span><ChevronRightIcon/></span>Career</li>
                        <li className=' hover:text-white w-28'><Link to='/ContactUs'><span><ChevronRightIcon/></span>Contact us</Link></li>
                    </ul>
                </div>
                <div >
                    <div>
                        <h2 className='text-2xl font-bold mb-4 text-slate-200 '>GET IN TOUCH</h2>
                        <ul className='text-neutral-400 text-lg' >
                            <li className=' hover:text-white mb-4  w-44 '><CallIcon />&nbsp; <a href="tel:+7999031586">+91 7999031586</a></li>
                            <li className='hover:text-white  w-96'><EmailIcon />&nbsp;<a href="mailto:contact@hiddenleaftechnologies.com"> contact@hiddenleaftechnologies.com</a></li>
                        </ul>
                    </div>
                    <div className='mt-7'>
                        <h2 className='text-2xl font-bold mb-4 text-slate-200'>FIND US ON</h2>
                        <div className='text-white   flex '>
                            <div className='p-1 m-1 rounded-full bg-red-500  hover:bg-white hover:text-black'>
                                <div><LinkedInIcon /></div>
                            </div>
                            <div className='p-1 m-1 rounded-full  bg-red-500  hover:bg-white hover:text-black  '>
                                <div><InstagramIcon /></div>
                            </div>

                            <div className='p-1 m-1  rounded-full bg-red-500  hover:bg-white hover:text-black'>
                                <div><FacebookIcon /></div>
                            </div>
                       
                    </div>
                </div>
               </div>
            </div>
            <hr className='md:mt-28 mt-3 sm:mx-8'/>
            
            <p className='text-center text-neutral-400 text-sm sm:text-lg mt-5  '>&copy; {new Date().getFullYear()} Hidden Leaf Technologies. All rights reserved.</p>
             </div>
        </footer>
        
       
    )
}

export default Footer