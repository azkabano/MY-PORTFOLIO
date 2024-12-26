import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript-powered website to track time with interactive countdown features.",
    img: "/timer.jpg",
    tags: ["React", "Node", "CSS", "Typescript"],
    live: "https://your-vercel-link-for-timer.vercel.app",
    github: "https://github.com/your-repo-for-timer",
  },
  
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-8 md:gap-10 lg:gap-12 xl:gap-14 md:grid-cols-2 lg:grid-cols-3 place-items-center ">
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            live={el.live}
            github={el.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
