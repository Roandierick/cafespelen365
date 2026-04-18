type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="display-title mt-4 text-4xl md:text-5xl">{title}</h2>
      <p className="muted-copy mt-5 md:text-lg">{description}</p>
    </div>
  );
}
