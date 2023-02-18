import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="mt-10 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:h-[600px] snap-center p-10 bg-[#292929] cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="images/foto1.jpg"
        alt=""
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Aulab Hackademy</h4>
        <p className="font-bold text-2xl mt-1">Hackademy 61</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-500">Data inizio.... fine</p>
        <ul className="list-disc space-y-3 ml-5 -mt-4">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
