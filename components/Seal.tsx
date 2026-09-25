import { site } from "../lib/site";

/** Rotating registration seal: CIN/GSTIN set around a ring, like a company stamp. */
export default function Seal() {
  const ring = `REGISTERED · CIN ${site.cin} · GSTIN ${site.gstin} · `;
  return (
    <div className="seal" role="img" aria-label={`Registered company. CIN ${site.cin}, GSTIN ${site.gstin}`}>
      <svg className="seal-ring" viewBox="0 0 200 200" aria-hidden>
        <defs>
          <path id="seal-path" d="M100 100 m-82 0 a82 82 0 1 1 164 0 a82 82 0 1 1 -164 0" />
        </defs>
        <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeWidth="1" />
        <text fill="currentColor" style={{ fontFamily: "var(--font-mono)", fontSize: 10.4, letterSpacing: "0.12em" }}>
          <textPath href="#seal-path" textLength="512">
            {ring}
          </textPath>
        </text>
      </svg>
      <div className="seal-core">
        <span>
          Pvt.
          <br />
          Ltd.
          <small>RANCHI · JH</small>
        </span>
      </div>
    </div>
  );
}
