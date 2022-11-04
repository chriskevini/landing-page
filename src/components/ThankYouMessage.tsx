import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";

const scrollToLine = (line: number) => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: {
      y: "#thank-you",
      offsetY: window.innerHeight * 0.45 - line * 100,
    },
  });
};

function ThankYouMessage() {
  const [isDone, setIsDone] = useState(false);
  return (
    <div className="absolute top-0 whitespace-pre-wrap text-[min(6vw,50px)] leading-[2] transition-opacity duration-500 ">
      <div className="my-16 h-[84px]"></div>
      <span id="thank-you"></span>
      {isDone ? (
        <p>
          {
            "Thank you!\nYour message has been received.\nI will get back to you as soon as I can."
          }
        </p>
      ) : (
        <TypeAnimation
          sequence={[
            "",
            () => scrollToLine(0),
            1500,
            "Thank you!\n",
            () => scrollToLine(1),
            1000,
            "Thank you!\nYour message has been received.\n",
            () => scrollToLine(2),
            1000,
            "Thank you!\nYour message has been received.\nI will get back to you as soon as I can.",
            () => setIsDone(true),
          ]}
          className="animate-scale-y-in"
        />
      )}
    </div>
  );
}

export default ThankYouMessage;
