type IconProps = { size?: number };

export function Arrow({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Phone({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

export function WhatsApp({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.4-.7-2.3-1.2-3.2-2.8-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-2c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4ZM12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

/** Side-on rigid truck, drawn in the logo's line style. */
export function Truck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 56" fill="none" aria-hidden>
      <rect x="2" y="6" width="74" height="36" rx="2" fill="currentColor" opacity="0.12" />
      <rect x="2" y="6" width="74" height="36" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M80 16h20l12 14v12H80V16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M86 20h12l7 9H86v-9Z" fill="var(--brass)" />
      <path d="M2 42h110" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="46" r="7" fill="var(--ink)" stroke="currentColor" strokeWidth="2" />
      <circle cx="58" cy="46" r="7" fill="var(--ink)" stroke="currentColor" strokeWidth="2" />
      <circle cx="96" cy="46" r="7" fill="var(--ink)" stroke="currentColor" strokeWidth="2" />
      <path d="M10 14h26M10 20h16" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
