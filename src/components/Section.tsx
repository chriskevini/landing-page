export function Section(props: {
  heading: string;
  id: string;
  children: JSX.Element[] | JSX.Element;
  altColor?: boolean;
  background?: string;
}) {
  return (
    <div className={"w-screen overflow-hidden " + props.background}>
      <div className="padding">
        <h2
          id={props.id}
          className={
            "section-heading relative my-20 text-[min(15vw,100px)] font-thin " +
            (props.altColor ? "text-primary" : "text-secondary")
          }
        >
          <span className="absolute left-[-0.4em] scale-125">{"{"}</span>
          {props.heading}
        </h2>
        {props.children}
      </div>
    </div>
  );
}
