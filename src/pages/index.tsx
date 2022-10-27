import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { RiMenuLine, RiCloseLine, RiExternalLinkLine } from "react-icons/ri";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Autoplay } from "swiper";

function SectionHeading(props: { children: string; id: string }) {
  return (
    <h2
      id={props.id}
      className="relative mb-20 text-[min(15vw,100px)] font-thin text-secondary"
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

type ProjectInfoProps = {
  title: string;
  description: string | ReactElement;
  builtWith: string[];
};

function ProjectInfo({ title, description, builtWith }: ProjectInfoProps) {
  return (
    <div className="z-10 mx-12 mb-16 max-w-[26ch] lg:scale-110">
      <h2 className="mb-5 text-5xl font-black">{title}</h2>
      <p className="">{description}</p>
      <button className="pointer-events-auto my-2 flex items-center gap-1 text-xs text-white text-opacity-50">
        Check it out
        <RiExternalLinkLine className="" />
      </button>
      <span
        className="mb-1 block w-full text-center font-extralight opacity-80"
        style={{ fontVariant: "small-caps" }}
      >
        Built With
      </span>
      <div className="flex justify-center gap-2">
        {builtWith.map((tech) => (
          <div
            key={tech}
            className="grid items-center rounded-md bg-black bg-opacity-10 p-2 backdrop-blur-lg"
          >
            <Image
              src={`/${tech}.png`}
              alt={tech + " logo"}
              width={44}
              height={44}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

type ProjectCarouselProps = {
  screens: string[];
};

function ProjectCarousel({ screens }: ProjectCarouselProps) {
  screens.at = (i) => {
    while (i < 0) i += screens.length;
    return screens[i];
  };

  return (
    <div className="relative md:mb-40 md:scale-125">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className={
          "pointer-events-auto !mx-0 !my-0 w-[150vw] [aspect-ratio:2/2!important] [--swiper-theme-color:white] [--swiper-navigation-size:1.75rem] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_70%,transparent_100%)] " +
          "md:portrait:full md:mt-[10%] md:mb-[30%] md:w-auto md:[--swiper-navigation-size:1.25rem] md:landscape:h-[50vh]"
        }
      >
        {screens.map((screen, i) => (
          <SwiperSlide
            key={i}
            className="overflow-hidden rounded-3xl [aspect-ratio:1/2!important]"
          >
            <Image
              src={screen}
              alt={screen}
              layout="fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-0 left-1/2 z-10 h-full w-1/2 -translate-x-1/2 scale-[105%]">
        <Image
          src="/iphone-frame.png"
          alt=""
          layout="fill"
        />
      </div>
    </div>
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
    <div className="text-stone-100 ">
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
        <div className="w-screen overflow-hidden bg-primary pt-[150vh]">
          <div className="padding min-h-screen">
            <SectionHeading id="my-work">My Work</SectionHeading>
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
                    the Hiragana to create <em>naughty</em> words and get the
                    high score!
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
          </div>
          <div className="placeholder pls-remove h-[100vh]"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;

//TODO: fix carousel on large portrait viewport
//TODO: add pagination to carousel
