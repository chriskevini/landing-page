import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
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

function NavItems() {
  return (
    <>
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
    </>
  );
}

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

      <div className="fixed top-0 left-0 z-[4000] w-full overflow-hidden brightness-[80%]">
        <div className="absolute z-[-4000] h-screen w-screen bg-hero bg-cover bg-left-top "></div>
        <div className="padding flex justify-between py-4 text-gray-50">
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
        className="fixed right-[8.3vw] z-[5001] scale-75 py-4 text-3xl text-gray-50 sm:hidden"
      >
        <RiMenuLine />
      </button>
      <nav
        onClick={() => setNavMenuIsOpen(false)}
        className={
          "fixed top-0 right-0 z-[5000] block h-screen w-[60vw] bg-black/30 backdrop-blur-md transition-all duration-1000 sm:hidden" +
          (navMenuIsOpen ? "" : " translate-x-full")
        }
      >
        <ul className="flex list-disc flex-col gap-16 pt-32 pl-12 text-sm font-extralight uppercase text-gray-50 [&>*]:cursor-pointer">
          <NavItems />
        </ul>
      </nav>

      <main className="pointer-events-none bg-primary text-gray-50">
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
