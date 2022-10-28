import Image from "next/image";
import { ReactElement } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

type ProjectInfoProps = {
  title: string;
  description: string | ReactElement;
  builtWith: string[];
};
export function ProjectInfo({
  title,
  description,
  builtWith,
}: ProjectInfoProps) {
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
