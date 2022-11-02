import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaDraftingCompass, FaServer } from "react-icons/fa";
import { MdOutlineDevices } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { Section } from "../components/Section";
import { HeroMessage } from "../components/HeroMessage";
import { ProjectInfo } from "../components/ProjectInfo";
import { ProjectCarousel } from "../components/ProjectCarousel";
import Skill from "../components/Skill";
import { Header } from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const [isHeroMessageDone, setIsHeroMessageDone] = useState(false);

  useEffect(() => {
    gsap.to("#hero-elements", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -2,
      opacity: 0,
      scale: 0.95,
    });
    gsap.to("#hero-elements", {
      scrollTrigger: {
        trigger: "#my-work",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 0,
    });
    gsap.to("#hero-section", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
    });
  }, []);

  return (
    <div className="overflow-hidden text-stone-100">
      <Head>
        <title>Chris Irineo</title>
        <link
          rel="icon"
          href="/logo.png"
        />
      </Head>
      <Header />

      <main className="pointer-events-none relative bg-primary">
        <div
          id="hero-section"
          className="fixed h-screen w-screen"
        >
          <div className="absolute z-[-4000] h-full w-full bg-hero bg-cover bg-left-top "></div>
          <div
            id="hero-elements"
            className="padding h-screen"
          >
            <HeroMessage {...{ setIsHeroMessageDone }} />
            <button
              onClick={() =>
                gsap.to(window, {
                  duration: 2,
                  scrollTo: {
                    y: "#my-work",
                    offsetY: 100,
                  },
                })
              }
              className={
                "filled-button animate-bounce rounded-full opacity-0 transition-opacity duration-500 " +
                (isHeroMessageDone ? "opacity-100" : "")
              }
            >
              See My Work
            </button>
          </div>
        </div>

        <div className="h-[125vh]"></div>

        <Section
          id="my-work"
          heading="My Work"
        >
          <div className="mb-36 flex flex-col items-center justify-between md:flex-row md:justify-center">
            <ProjectInfo
              title="Word Fractal"
              description={
                <>
                  A massively-multiplayer online word-connecting game where
                  players collaborate and compete to reach the goal.
                </>
              }
              link="https://word-fractal.web.app"
              builtWith={["vite", "react", "mui", "firebase"]}
            />
            <ProjectCarousel
              screens={[
                "/word-fractal-1.png",
                "/word-fractal-2.png",
                "/word-fractal-3.png",
              ]}
            />
          </div>
          <div className="mb-36 flex flex-col items-center justify-between md:flex-row-reverse md:justify-center">
            <ProjectInfo
              title="NCHI Slider"
              description={
                <>
                  A sliding puzzle game inspired by 2048 and NKODICE. Combine
                  the Hiragana to create <em>naughty</em> words and get the high
                  score!
                </>
              }
              link="https://nchislider.web.app/"
              builtWith={["typescript", "vite", "react", "firebase"]}
            />
            <ProjectCarousel
              screens={[
                "/nchi-slider-1.jpeg",
                "/nchi-slider-2.jpeg",
                "/nchi-slider-3.jpeg",
              ]}
            />
          </div>
        </Section>

        <Section
          id="my-skills"
          heading="My Skills"
          altColor
          background="bg-gradient-to-br from-secondary/70 via-secondary/20"
        >
          <div className="flex flex-wrap justify-center gap-12">
            <Skill
              title="UI/UX Design"
              details={
                <ul>
                  <li>Mobile-First</li>
                  <li>Design Tools</li>
                  <ul>
                    <li>Figma</li>
                  </ul>
                  <li>Style Systems</li>
                  <ul>
                    <li>Material</li>
                    <li>iOS</li>
                  </ul>
                </ul>
              }
              glyph={<FaDraftingCompass className="scale-90" />}
            />
            <Skill
              title="Front-End Development"
              details={
                <ul>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Vite</li>
                </ul>
              }
              glyph={<MdOutlineDevices />}
            />
            <Skill
              title="Back-End Development"
              details={
                <ul>
                  <li>Node.js</li>
                  <li>Typescript</li>
                  <li>Databases</li>
                  <ul>
                    <li>Firebase</li>
                    <li>Mongo</li>
                    <li>MySQL</li>
                  </ul>
                </ul>
              }
              glyph={<FaServer />}
            />
            <Skill
              title="Game Development"
              details={
                <ul>
                  <li>Game Design</li>
                  <li>Prototyping</li>
                  <li>Testing</li>
                  <li>Multi-platform</li>
                </ul>
              }
              glyph={<IoLogoGameControllerB className="scale-110" />}
            />
          </div>
          <div className="h-32"></div>
        </Section>

        <div className="w-screen bg-hero bg-cover">
          <Section
            id="contact-me"
            heading="Contact Me"
          >
            <p className="my-16 whitespace-pre-wrap">
              {`I'm open to exploring new oportunities.\n` +
                `Let's build something awesome!`}
            </p>
            <ContactForm />
          </Section>
          <div className="h-[40vh]"></div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;

//TODO: fix carousel on large portrait viewport
//TODO: add pagination to carousel
//TODO: fix blurry screens on carousel caused by scaling
