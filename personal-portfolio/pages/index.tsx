import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-[rgb(46,50,50)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 text-white scrollbar scrollbar-track-gray-400 scrollbar-thumb-orange-400">
      <Head>
        <title>My portfolio</title>
      </Head>
      <div>
        <Header />

        <section id="hero" className=" snap-start">
          <Hero />
        </section>

        <section id="about" className=" snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <Experience />
        </section>

        <section id="skills" className="snap-center">
          <Skills />
        </section>

        <section id="projects" className="snap-center">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                width={50}
                height={50}
                className="rounded-full filter hover:grayscale-0"
                src="/images/foto1.jpg"
                alt=""
              />
            </div>
          </footer>
        </Link>
      </div>
    </div>
  );
}
