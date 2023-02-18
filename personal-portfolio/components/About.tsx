import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-3xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" top-24 absolute uppercase tracking-[15px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        alt=""
        src="/images/foto1.jpg"
        className="-mb-16 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover mt-24 md:rounded-lg md:-64 md:h-96 xl:w-[300px] xl:h-[450px] md:mt-32"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className=" font-semibold text-4xl mt-4 md:mt-24">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className=" text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          perferendis architecto a impedit? Debitis quae itaque, cumque magni
          praesentium exercitationem impedit aliquam magnam quod aut soluta,
          laudantium eaque voluptatem quam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Modi, necessitatibus saepe facere ea
          beatae, vitae sunt quam sit quidem unde nostrum. Saepe expedita
          dolores commodi? Dicta cumque rerum magnam numquam.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
