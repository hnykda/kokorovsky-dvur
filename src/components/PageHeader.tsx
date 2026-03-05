interface PageHeaderProps {
  title: string;
  eyebrow?: string;
}

export default function PageHeader({
  title,
  eyebrow = "Kokořovský dvůr",
}: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 px-5 text-center">
      <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
        {eyebrow}
      </p>
      <h1
        className="font-serif font-black text-primary"
        style={{ fontSize: "clamp(2.2rem, 6vw, 3.8rem)", lineHeight: 1.1 }}
      >
        {title}
      </h1>
      <div className="w-16 h-px bg-accent mx-auto mt-6" />
    </div>
  );
}
