import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id:0,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time with an interactive countdown features.",
        img: "/timer.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
]

const Projects = () => {
  return (
    <div  id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
