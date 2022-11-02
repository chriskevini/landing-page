import { Dispatch, SetStateAction, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export function HeroMessage(props: {
  setIsHeroMessageDone: Dispatch<SetStateAction<boolean>>;
}) {
  const line1 = "Hi! I'm Chris.";
  const line2 = "I do...";
  const line3 = ["UI/UX Design", "Front-End Dev", "Back-End Dev", "Game Dev"];
  const [state, setState] = useState("line1");
  return (
    <div className="whitespace-pre-wrap pt-[20vh] text-[min(12vw,100px)] leading-[1.1]">
      {state === "line1" ? (
        <>
          <TypeAnimation
            sequence={[
              "",
              1000,
              "Hi! :)",
              1250,
              line1,
              () => setState("line2"),
            ]}
          />
        </>
      ) : null}
      {state === "line2" ? (
        <>
          <div className="">{line1}</div>
          <TypeAnimation
            sequence={["", 1000, line2, 500, () => setState("line3")]}
          />
        </>
      ) : null}
      {state === "line3" ? (
        <>
          <div className="">{line1}</div>
          <div className="">{line2}</div>
          <TypeAnimation
            sequence={[
              "",
              500,
              line3[0] || "",
              1500,
              line3[1] || "",
              1500,
              line3[2] || "",
              1500,
              line3[3] || "",
              1500,
              () => props.setIsHeroMessageDone(true),
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </>
      ) : null}
    </div>
  );
}
