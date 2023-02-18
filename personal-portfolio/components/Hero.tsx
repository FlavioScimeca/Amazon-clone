import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ['Ciao, sono Flavio', 'curious-guy', '<Introduction />'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="rounded-full"
        height={150}
        width={150}
        alt=""
        src="/images/foto1.jpg"
        style={{ objectFit: 'contain' }}
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 font-semibold tracking-[10px]">
          Junior Web Developer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className=" mr-3 text-cyan-400">{text}</span>
          <Cursor cursorColor="#7BC950" />
        </h1>
        <div className="mt-5 space-x-6">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Project s</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
