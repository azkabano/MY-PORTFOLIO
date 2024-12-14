import React from 'react';

const Skills = () => {
  // Define skills and their proficiency percentages
  const skills = [
    { name: 'TypeScript', proficiency: 80 },
    { name: 'React.js', proficiency: 85 },
    { name: 'Next.js', proficiency: 80 },
    { name: 'Tailwind', proficiency: 90 },
    { name: 'CSS', proficiency: 85 },
    { name: 'Node.js', proficiency: 70 },
  ];

  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl '>Technologies I Work With</h2>
          <p className='text-black pt-2'>
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        <div>
          <div className='space-y-6'>
            {skills.map((skill, index) => (
              <div key={index} className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='text-accent text-xl sm:text-2xl'>{skill.name}</span>
                  <span className='text-gray-500 text-sm'>{skill.proficiency}%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-3'>
                  <div
                    className='bg-accent h-3 rounded-full'
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
