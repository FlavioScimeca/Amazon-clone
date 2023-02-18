import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.4],
        borderRadius: ['20%', '20%', '50%', '80%'],
      }}
      transition={{
        duration: 2.2,
      }}
      className="relative flex justify-center items-center mt-60"
    >
      <div className="absolute border rounded-full border-[#e7e7e7] h-[200px] w-[200px] mt-40 animate-ping" />
      <div className="absolute border rounded-full border-[#e5e5e5] h-[300px] w-[300px] mt-40" />
      <div className="absolute border rounded-full border-[#dfdfdf] h-[450px] w-[450px] mt-40" />
      <div className="absolute border-4 rounded-full border-[#448720] h-[530px] w-[530px] mt-40 animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
