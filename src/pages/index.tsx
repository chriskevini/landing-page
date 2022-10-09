import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement, useEffect } from "react";

function SectionHeader(props: { children: string }) {
  return (
    <h2 className="text-[min(12vw,120px)] font-thin text-secondary">
      {props.children}
    </h2>
  );
}

function HeroMessage(props: { children: string }) {
  return (
    <h1
      id="hero-message"
      className="pt-[40vh] text-[min(12vw,120px)] leading-none"
    >
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
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#hero-message", {
      scrollTrigger: {
        trigger: "#page-1",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: -10,
      opacity: 0.5,
      duration: 1,
    });
    gsap.to("#hero-section", {
      scrollTrigger: {
        trigger: "#page-1",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 1,
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

      <main className="text-[10rem] text-gray-50">
        <div className=" fixed inset-0 -z-20 h-screen w-full  bg-hero bg-cover bg-left bg-no-repeat ">
          <Padding>
            <HeroMessage>UI/UX Design|</HeroMessage>
          </Padding>
          <div
            id="hero-section"
            className="fixed inset-0 bg-primary opacity-0"
          ></div>
        </div>
        <div
          id="page-1"
          className="h-screen w-screen"
        ></div>
        <div className="h-[50vh] w-screen bg-gradient-to-t from-primary"></div>
        <div className="min-h-screen w-screen bg-primary">
          <Padding>
            <SectionHeader>My Work</SectionHeader>
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
