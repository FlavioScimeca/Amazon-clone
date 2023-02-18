import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center scroll"
    >
      <h3 className=" top-16 absolute uppercase tracking-[15px] text-gray-500 text-2xl">
        Experience
      </h3>
      {/* Experience cards */}
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-orange-400">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
