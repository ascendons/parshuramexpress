import { tel, whatsapp } from "../lib/site";
import { Phone, WhatsApp } from "./icons";

export default function MobileDock() {
  return (
    <div className="dock">
      <a href={tel}>
        <Phone /> Call
      </a>
      <a
        href={whatsapp("Hi Parshuram Express, I'd like to book a vehicle.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp /> WhatsApp
      </a>
    </div>
  );
}
