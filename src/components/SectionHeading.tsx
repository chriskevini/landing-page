export function SectionHeading(props: { children: string; id: string }) {
  return (
    <h2
      id={props.id}
      className="relative mb-20 text-[min(15vw,100px)] font-thin text-secondary"
    >
      <span className="absolute left-[-0.4em] scale-125">{"{"}</span>
      {props.children}
    </h2>
  );
}
