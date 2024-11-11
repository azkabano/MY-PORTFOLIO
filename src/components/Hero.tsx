import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      id="hero"
      className='min-h-screen bg-no-repeat bg-cover   bg-[url(/PROFILE.jpg)] bg-cover'
      style={{
        backgroundImage: "url('/PROFILE.jpg')", // Corrected background image path
        backgroundSize: "35%", backgroundPosition: "left 100px top 100px"
      }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos= "zoom-in-up">I'm</p>
            <p data-aos= "zoom-in-up">Azka</p>
            <p data-aos= "zoom-in-up">Bano</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

