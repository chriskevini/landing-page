import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement, useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function SectionHeading(props: { children: string; id: string }) {
  return (
    <h2
      id={props.id}
      className="relative text-[min(12vw,100px)] font-thin text-secondary"
    >
      <span className="absolute left-[-0.4em] scale-125">{"{"}</span>
      {props.children}
    </h2>
  );
}

function HeroMessage(props: { children: string }) {
  return (
    <h1 className="pt-[40vh] text-[min(12vw,100px)] leading-none">
      {props.children}
    </h1>
  );
}

const Home: NextPage = () => {
  useEffect(() => {
    gsap.to("#hero-elements", {
      scrollTrigger: {
        trigger: "#hero-section",

        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -10,
      opacity: 0.5,
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
    <>
      <Head>
        <title>Chris Irineo</title>
        <link
          rel="icon"
          href="/logo.png"
        />
      </Head>

      <nav className="fixed top-0 left-0 z-[99999] w-full overflow-hidden brightness-[80%]">
        <div className="absolute z-[-99999] h-screen w-screen bg-hero bg-cover bg-left-top "></div>
        <div className="mx-auto flex w-10/12 max-w-3xl justify-between py-4 text-gray-50">
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

          <ul className="fixed inset-0 left-[50%] hidden items-center gap-12 text-sm font-extralight sm:flex md:gap-16 [&>*]:uppercase">
            <li
              onClick={() =>
                gsap.to(window, {
                  duration: 2,
                  scrollTo: { y: "#my-work", offsetY: 100 },
                })
              }
            >
              My Work
            </li>
            <li
              onClick={() =>
                gsap.to(window, {
                  duration: 2,
                  scrollTo: { y: "#my-skills", offsetY: 100 },
                })
              }
            >
              My Skills
            </li>
            <li
              onClick={() =>
                gsap.to(window, {
                  duration: 2,
                  scrollTo: { y: "#contact-me", offsetY: 100 },
                })
              }
            >
              Contact Me
            </li>
          </ul>

          <button className="text-xl sm:hidden">
            <RiMenuLine />
          </button>
        </div>
      </nav>

      <main className="pointer-events-none bg-primary text-gray-50">
        <div
          id="hero-section"
          className="fixed h-screen w-screen"
        >
          <div className="absolute z-[-99999] h-full w-full bg-hero bg-cover bg-left-top "></div>
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
              className="pointer-events-auto mt-3 rounded-full bg-secondary py-1 px-5 uppercase text-black shadow-lg shadow-primary/30"
            >
              See My Work
            </button>
          </div>
        </div>
        <div className="w-screen bg-primary pt-[150vh]">
          <div className="padding min-h-screen">
            <SectionHeading id="my-work">My Work</SectionHeading>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
