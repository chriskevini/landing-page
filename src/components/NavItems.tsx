import gsap from "gsap";

export function NavItems() {
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
