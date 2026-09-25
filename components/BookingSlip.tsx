"use client";

import { useState } from "react";
import { mailto, services, site, whatsapp } from "../lib/site";
import { Arrow, WhatsApp } from "./icons";

const empty = { from: "", to: "", service: services[0].title, date: "", cargo: "", name: "", phone: "" };

/**
 * Booking request styled as a tear-off consignment slip. The site is static,
 * so it hands the filled request to WhatsApp or the user's mail app.
 */
export default function BookingSlip() {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  const set = (key: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const message = () =>
    [
      `Hello ${site.short}, I'd like to book a vehicle.`,
      "",
      `Service: ${form.service}`,
      `From: ${form.from}`,
      `To: ${form.to}`,
      form.date && `Pickup date: ${form.date}`,
      form.cargo && `Cargo: ${form.cargo}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
    ]
      .filter((l): l is string => typeof l === "string")
      .join("\n");

  const valid = () => {
    if (!form.from || !form.to || !form.name || !form.phone) {
      setError("Please fill in origin, destination, your name and phone.");
      return false;
    }
    setError("");
    return true;
  };

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid()) return;
    window.open(whatsapp(message()), "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    if (!valid()) return;
    window.location.href = mailto(`Vehicle booking: ${form.from} to ${form.to}`, message());
  };

  return (
    <form className="slip" onSubmit={sendWhatsApp} noValidate>
      <div className="slip-head">
        <span className="slip-title">Booking request</span>
        <span className="mono">PEL · Dispatch desk</span>
      </div>
      <div className="slip-body">
        <div className="slip-row">
          <div className="field">
            <label htmlFor="bk-from">Pickup from</label>
            <input id="bk-from" value={form.from} onChange={set("from")} placeholder="City / area" autoComplete="address-level2" required />
          </div>
          <div className="field">
            <label htmlFor="bk-to">Deliver to</label>
            <input id="bk-to" value={form.to} onChange={set("to")} placeholder="City / area" required />
          </div>
        </div>
        <div className="slip-row">
          <div className="field">
            <label htmlFor="bk-service">Service</label>
            <select id="bk-service" value={form.service} onChange={set("service")}>
              {services.map((s) => (
                <option key={s.id}>{s.title}</option>
              ))}
              <option>Not sure yet</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="bk-date">Pickup date</label>
            <input id="bk-date" type="date" value={form.date} onChange={set("date")} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="bk-cargo">What are you moving?</label>
          <textarea id="bk-cargo" value={form.cargo} onChange={set("cargo")} placeholder="Material, approx. weight or volume, any handling notes" rows={2} />
        </div>
        <div className="slip-row">
          <div className="field">
            <label htmlFor="bk-name">Your name</label>
            <input id="bk-name" value={form.name} onChange={set("name")} placeholder="Name, company" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="bk-phone">Phone</label>
            <input id="bk-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+91" autoComplete="tel" required />
          </div>
        </div>

        <div className="slip-actions">
          <button type="submit" className="btn btn-navy">
            <WhatsApp /> Send on WhatsApp
          </button>
          <button type="button" className="btn btn-line" onClick={sendEmail}>
            Send by email <Arrow />
          </button>
        </div>
        <p className="slip-note" role={error ? "alert" : undefined} style={error ? { color: "#9b2c1f" } : undefined}>
          {error || "Opens WhatsApp or your email app with the details filled in. Our dispatch desk confirms the vehicle and rate."}
        </p>
      </div>
    </form>
  );
}
