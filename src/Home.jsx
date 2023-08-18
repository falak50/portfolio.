import React from 'react';
import falak from '../src/assets/falak.jpg'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
const Home = () => {
    return (
<div name='home' 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5  md:flex-row '>
        <div className=''>
          <h2 className='text-white sm:text-7xl font-bold'>I'm a Full Stack Developer</h2>

          <p className='text-blue-100 py-5 max-w-md'>
            I've 1 year of experience web application software.
            Currently, I love to work on web application using technologies like 
            React, Tailwind CSS, NextJS and NodeJS. 
          </p>

                            <div>
                        {/* <Link></Link> */}
                        <button className='group text-white px-6 py-3 my-8 mx-30 flex hover:scale-110 duration-700 rounded-2xl bg-gradient-to-r from-cyan-900 to-blue-600 w-fit cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300 ml-2'>
                        <HiOutlineArrowNarrowRight className='ml-1' size={25}/>
                        </span>
                        </button>
                            </div>
             </div>

                    <div>
                    <img src={falak} alt="" className='rounded-full border-4  mx-auto w-2/3 md:w-full'/>
                    </div>
    </div>
</div>
    );
};

export default Home;