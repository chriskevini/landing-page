import Image from "next/image";

export function HeroImage(props: { priority?: boolean }) {
  return (
    <Image
      src="/maple-leaves-blur.jpeg"
      alt=""
      layout="fill"
      objectFit="cover"
      objectPosition="left"
      sizes="100vw"
      quality={100}
      className="-z-10"
      {...props}
    />
  );
}
