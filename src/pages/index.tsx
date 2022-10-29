import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { Section } from "../components/Section";
import { HeroMessage } from "../components/HeroMessage";
import { NavItems } from "../components/NavItems";
import { ProjectInfo } from "../components/ProjectInfo";
import { ProjectCarousel } from "../components/ProjectCarousel";

const Home: NextPage = () => {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  useEffect(() => {
    gsap.to("#hero-elements", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -2,
      opacity: 0.5,
      scale: 0.95,
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

      <div className="fixed top-0 left-0 z-[4000] w-full overflow-hidden brightness-[80%]">
        <div className="absolute z-[-4000] h-screen w-screen bg-hero bg-cover bg-left-top "></div>
        <div className="padding flex justify-between py-4">
          <button
            onClick={() =>
              gsap.to(window, {
                duration: 2,
                scrollTo: 0,
              })
            }
            className="font-logo text-3xl leading-none tracking-[-0.095em]"
          >
            Chris Irineo
          </button>
          <nav className="hidden sm:block">
            <ul className="h-full items-center gap-12 text-sm font-extralight sm:flex md:gap-16 [&>*]:cursor-pointer [&>*]:uppercase">
              <NavItems />
            </ul>
          </nav>
        </div>
      </div>
      <button
        onClick={() => setNavMenuIsOpen((prev) => !prev)}
        className="fixed right-[8.3vw] z-[5001] grid scale-75 place-items-center py-4 text-3xl sm:hidden"
      >
        <RiMenuLine
          className={
            "transition-all duration-300 " + (navMenuIsOpen ? "scale-0" : "")
          }
        />
        <RiCloseLine
          className={
            "absolute transition-all duration-300 " +
            (!navMenuIsOpen ? "scale-0" : "")
          }
        />
      </button>
      <nav
        onClick={() => setNavMenuIsOpen(false)}
        className={
          "fixed top-0 right-0 z-[5000] block h-screen w-[60vw] bg-black/30 backdrop-blur-md transition-all duration-1000 sm:hidden" +
          (navMenuIsOpen ? "" : " translate-x-full")
        }
      >
        <ul className="flex list-disc flex-col gap-16 pt-32 pl-12 text-sm font-extralight uppercase [&>*]:cursor-pointer">
          <NavItems />
        </ul>
      </nav>

      <main className="pointer-events-none bg-primary">
        <div
          id="hero-section"
          className="fixed h-screen w-screen"
        >
          <div className="absolute z-[-4000] h-full w-full bg-hero bg-cover bg-left-top "></div>
          <div
            id="hero-elements"
            className="padding h-screen"
          >
            <HeroMessage>UI/UX Design|</HeroMessage>
            <button
              onClick={() =>
                gsap.to(window, {
                  duration: 2,
                  scrollTo: { y: "#my-work", offsetY: 100 },
                })
              }
              className="pointer-events-auto mt-3  rounded-full bg-secondary py-1 px-5 uppercase text-black shadow-lg shadow-primary/30 hover:brightness-110 active:brightness-90"
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
          <div className="h-screen"></div>
        </Section>
        <div className="placeholder pls-remove h-[100vh]"></div>
      </main>
    </div>
  );
};

export default Home;

//TODO: fix carousel on large portrait viewport
//TODO: add pagination to carousel
//TODO: fix blurry screens on carousel caused by scaling
//TODO: move header to own file
