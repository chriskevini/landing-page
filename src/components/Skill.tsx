import React from "react";

function Skill(props: {
  title: string;
  details: JSX.Element;
  glyph: JSX.Element;
}) {
  return (
    <div className="relative z-0 h-72 w-72 md:ml-28">
      <div className=" h-full w-full rounded-2xl bg-black/40 backdrop-blur-[8px]">
        <h4 className="mx-auto max-w-[12ch] py-6 text-center text-2xl font-bold">
          {props.title}
        </h4>
        <div className="flex">
          <div className="flex-1"></div>
          <div className="flex-1 [&>ul>ul>li]:ml-4 [&>ul]:list-disc [&>ul>ul]:list-disc">
            {props.details}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 -z-10 -translate-x-1/2 -translate-y-1/2 text-[250px]">
        {props.glyph}
      </div>
    </div>
  );
}

export default Skill;
