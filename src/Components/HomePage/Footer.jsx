import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { assets } from '../assests/assests';

const Footer = () => {
    return (
        <div className='bg-black text-gray-300'>
            
           <div className='container mx-auto py-14 px-6'>
             <div className='grid md:grid-cols-3 grid-cols-1 gap-7 md:mt-24 md:ml-32'>
             <div className='   '>
                    <h2 className='text-2xl font-bold mb-4 text-slate-200 pl-3'>SERVICES</h2>
                    <ul className='space-y-2 text-neutral-400  '>
                        <li  className=' hover:text-white'><a href=""><span><ChevronRightIcon/></span> full stack development</a></li>
                        <li className=' hover:text-white'><a href=""><span><ChevronRightIcon/></span>web development</a></li>
                        <li className=' hover:text-white'><a href=""><span><ChevronRightIcon/></span>web designing</a></li>

                    </ul>
                </div>
                <div className='   '>
                    <h2 className='text-2xl font-bold mb-4 text-slate-200 pl-3 '>QUICK LINK</h2>
                    <ul className='space-y-2 text-neutral-400 '>
                        <li className=' hover:text-white'><a href=""><span><ChevronRightIcon/></span> About us</a></li>
                        <li className=' hover:text-white'><a href=""><span><ChevronRightIcon/></span>Services</a></li>
                        <li className=' hover:text-white'><a href=""><span><ChevronRightIcon/></span>Portfolio</a></li>
                        <li className=' hover:text-white'><a href=""><span><ChevronRightIcon/></span>Carrier</a></li>
                        <li className=' hover:text-white'><a href=""><span><ChevronRightIcon/></span>Contact us</a></li>
                    </ul>
                </div>
                <div className=''>
                    <div>
                        <h2 className='text-2xl font-bold mb-4 text-slate-200 '>GET IN TOUCH</h2>
                        <ul className='text-neutral-400' >
                            <li className=' hover:text-white mb-4'><CallIcon />&nbsp; +1-222-787828</li>
                            <li className='hover:text-white'><EmailIcon />&nbsp; Contact@tomato.com</li>
                        </ul>
                    </div>
                    <div className='mt-7'>
                        <h2 className='text-2xl font-bold mb-4 text-slate-200'>FIND US ON</h2>
                        <div className='text-white   flex '>
                            <div className='p-1 m-1 rounded-full bg-red-500  hover:bg-white hover:text-black'>
                                <a href=""><LinkedInIcon /></a>
                            </div>
                            <div className='p-1 m-1 rounded-full  bg-red-500  hover:bg-white hover:text-black  '>
                                <a href=""><InstagramIcon /></a>
                            </div>

                            <div className='p-1 m-1  rounded-full bg-red-500  hover:bg-white hover:text-black'>
                                <a href=""><FacebookIcon /></a>
                            </div>
                       
                    </div>
                </div>
               </div>
            </div>
            <hr className='md:mt-28 mt-10 mx-8 '/>
            
            <p className='text-center text-neutral-400 text-sm mt-5 '>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
             </div>
        </div>
       
    )
}

export default Footer