import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function SectionHeading(props: { children: string }) {
  return (
    <h2 className="relative text-[min(12vw,100px)] font-thin text-secondary">
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

function Padding(props: { children: ReactElement | ReactElement[] }) {
  return (
    <div className="mx-auto h-screen w-10/12 max-w-3xl py-4">
      {props.children}
    </div>
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

      <main className="pointer-events-none bg-primary text-gray-50">
        <div
          id="hero-section"
          className="fixed h-screen w-screen"
        >
          <div className="absolute z-[-99999] h-full w-full bg-hero bg-cover bg-left bg-no-repeat"></div>
          <Padding>
            <div id="hero-elements">
              <HeroMessage>UI/UX Design|</HeroMessage>
              <button
                onClick={() =>
                  gsap.to(window, { duration: 2, scrollTo: "#my-work" })
                }
                className="pointer-events-auto mt-3 rounded-full bg-secondary py-1 px-5 uppercase text-primary shadow-lg shadow-primary/30"
              >
                See My Work
              </button>
            </div>
          </Padding>
        </div>
        {/* <div className="h-screen w-screen bg-primary opacity-0"></div>
        <div className="h-[50vh] w-screen bg-gradient-to-t from-primary"></div> */}
        <div className="min-h-screen w-screen bg-primary pt-[150vh]">
          <Padding>
            <div id="my-work"></div>
            <SectionHeading>My Work</SectionHeading>
          </Padding>
        </div>
      </main>
    </>
  );
};

export default Home;

//  <TechnologyCard
//   name="Prisma"
//   description="Build data-driven JavaScript & TypeScript apps in less time"
//   documentation="https://www.prisma.io/docs/"
// />

// type TechnologyCardProps = {
//   name: string;
//   description: string;
//   documentation: string;
// };

// const TechnologyCard = ({
//   name,
//   description,
//   documentation,
// }: TechnologyCardProps) => {
//   return (
//     <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
//       <h2 className="text-lg text-gray-700">{name}</h2>
//       <p className="text-sm text-gray-600">{description}</p>
//       <a
//         className="mt-3 text-sm text-violet-500 underline decoration-dotted underline-offset-2"
//         href={documentation}
//         target="_blank"
//         rel="noreferrer"
//       >
//         Documentation
//       </a>
//     </section>
//   );
// };
