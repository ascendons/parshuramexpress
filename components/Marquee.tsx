import { industries } from "../lib/site";

export default function Marquee() {
  const row = [...industries, ...industries];
  return (
    <div className="marquee" aria-label="Industries served">
      <div className="marquee-track">
        {row.map((name, i) => (
          <span key={i} className="marquee-item" aria-hidden={i >= industries.length}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
