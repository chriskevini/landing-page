import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function ThankYouMessage() {
  const [isDone, setIsDone] = useState(false);
  return (
    <div className="absolute top-0 whitespace-pre-wrap text-[min(6vw,50px)] leading-[2] transition-opacity duration-500 ">
      <div className="my-16 h-[84px]"></div>
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
            1500,
            "Thank you!\n",
            1000,
            "Thank you!\nYour message has been received.\n",
            1000,
            "Thank you!\nYour message has been received.\nI will get back to you as soon as I can.",

            () => {
              setIsDone(true);
            },
          ]}
          className="animate-scale-y-in"
        />
      )}
    </div>
  );
}

export default ThankYouMessage;
