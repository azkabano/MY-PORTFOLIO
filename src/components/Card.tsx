import React from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  live: string; // Added live link prop
  github: string; // Added GitHub link prop
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags, live, github }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px]" data-aos="zoom-in-up">
      <div>
        <Image
          className="w-[300px] sm:w-[350px] h-auto"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="p-4 space-y-4">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-gray-600">{desc}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((el) => (
            <span
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
              key={el}
            >
              {el}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Live Preview
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
