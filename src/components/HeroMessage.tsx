import { Dispatch, SetStateAction, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroMessage(props: {
  setIsHeroMessageDone: Dispatch<SetStateAction<boolean>>;
}) {
  const line1 = "Hi! I'm Chris.";
  const line2 = "I do...";
  const line3 = ["UI/UX Design", "Front-End Dev", "Back-End Dev", "Game Dev"];
  const [currentLine, setCurrentLine] = useState(1);
  return (
    <div className="whitespace-pre-wrap pt-[20vh] text-[min(12vw,100px)] leading-[1.1]">
      {currentLine === 1 ? (
        <TypeAnimation
          sequence={["", 1000, "Hi! :)", 1250, line1, () => setCurrentLine(2)]}
        />
      ) : null}

      {currentLine === 2 ? (
        <>
          <div className="">{line1}</div>
          <TypeAnimation
            sequence={["", 1000, line2, 500, () => setCurrentLine(3)]}
          />
        </>
      ) : null}

      {currentLine === 3 ? (
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
