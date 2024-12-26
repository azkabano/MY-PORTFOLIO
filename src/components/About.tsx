import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='container pt-32'>
      <h2 className='text-4xl md:text-5xl mb-4' data-aos="zoom-in-up">About Me</h2>
      <p className='text-black pt-4' data-aos="zoom-in-up">
        I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, & Metaverse. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
      <div className='pt-8 flex justify-start'>
        {/* Button for Download CV */}
        <Link
          href="https://your-project-name.vercel.app/Azka_Bano_CV.pdf" // Replace with your Vercel-hosted link
          download="Azka_Bano_CV.pdf"
          className='bg-[#00c2cb] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#00a9b3] transition duration-300'
          data-aos="zoom-in-up"
        >
          Download CV
        </Link>
      </div>
    </div>
  );
};

export default About;
