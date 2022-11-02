import gsap from "gsap";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { NavItems } from "./NavItems";

export function Header() {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  return (
    <div>
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
          "fixed top-0 right-0 z-40 block h-screen w-[60vw] bg-black/30 backdrop-blur-md transition-all duration-1000 sm:hidden" +
          (navMenuIsOpen ? "" : " translate-x-full")
        }
      >
        <ul className="flex list-disc flex-col gap-16 pt-32 pl-12 text-sm font-extralight uppercase [&>*]:cursor-pointer">
          <NavItems />
        </ul>
      </nav>
      {navMenuIsOpen ? (
        <div
          onClick={() => setNavMenuIsOpen(false)}
          className="fixed inset-0 z-10"
        ></div>
      ) : null}
    </div>
  );
}
