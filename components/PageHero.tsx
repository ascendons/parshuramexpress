import Road from "./Road";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="page-hero">
      <Road truck={false} className="page-hero-road" />
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display h-lg">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
