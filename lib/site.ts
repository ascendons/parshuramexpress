export const site = {
  name: "Parshuram Express Logistics Pvt. Ltd.",
  short: "Parshuram Express",
  motto: "Trust · Care · Commitment",
  tagline: "We Connect. We Deliver. On Time, Every Time.",
  phone: "7050044409",
  phoneDisplay: "+91 70500 44409",
  email: "contact@parshuramexpress.com",
  cin: "U49231JH2026PTC028433",
  gstin: "20AARCP2584Q1ZQ",
  address: {
    lines: ["Near Daladalli Chowk, Karamtoli", "Opp. Hanuman Mandir", "Ranchi, Jharkhand 835303"],
    short: "Karamtoli, Ranchi, Jharkhand",
  },
  quote:
    "At Parshuram Express, transportation is about protecting your cargo, fulfilling commitments, and driving your business forward.",
};

export const tel = `tel:+91${site.phone}`;
export const mailto = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString().replace(/\+/g, "%20");
  return `mailto:${site.email}${q ? `?${q}` : ""}`;
};
export const whatsapp = (text?: string) =>
  `https://wa.me/91${site.phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  id: string;
  code: string;
  title: string;
  /** The shipper's situation, phrased the way they'd say it. */
  need: string;
  summary: string;
  body: string;
  features: string[];
  /** Truck-bed occupancy for the cargo illustration: each entry is one consignment's share (0–1). */
  load: number[];
};

export const services: Service[] = [
  {
    id: "ftl",
    code: "FTL",
    title: "Full Truck Load",
    need: "I have enough to fill a truck",
    summary: "Dedicated direct transport for large consignments with minimum transit handling.",
    body: "The whole vehicle is yours, loaded once at your gate and opened again at the destination. No transhipment, no mixing with other freight, and the shortest possible transit time.",
    features: ["Direct point-to-point transit", "Minimum handling", "Vehicle matched to volume", "Route coordination desk"],
    load: [1],
  },
  {
    id: "ltl",
    code: "LTL",
    title: "Part Load",
    need: "I only need part of a truck",
    summary: "Cost-optimized consolidated movement ideal for smaller commercial shipments.",
    body: "Your consignment shares space with compatible freight heading the same way, so you pay for the room you use, not the whole vehicle, with the same delivery discipline.",
    features: ["Consolidated freight movement", "Pay for the space you use", "Suited to smaller consignments", "Scheduled transit"],
    load: [0.34, 0.22, 0.26],
  },
  {
    id: "express",
    code: "EXP",
    title: "Express Transit",
    need: "It has to get there fast",
    summary: "Fast-track priority transport engineered for urgent, time-sensitive freight.",
    body: "Priority dispatch, the most direct route and a coordinator who stays on the consignment until it is signed for. For the loads where a day late is as bad as not at all.",
    features: ["Priority dispatch windows", "Fast-track routing", "Close operational coordination", "Urgent consignment handling"],
    load: [0.55],
  },
  {
    id: "dedicated-fleet",
    code: "DED",
    title: "Dedicated Fleet",
    need: "I ship on a regular schedule",
    summary: "Custom vehicle deployment for enterprise contracts with guaranteed availability.",
    body: "Vehicles committed to your contract and your calendar, so recurring movement never waits on market availability. Better control, consistent schedules, one accountable partner.",
    features: ["Guaranteed vehicle availability", "Consistent movement schedules", "Enterprise contract support", "Single point of accountability"],
    load: [0.9],
  },
  {
    id: "long-distance",
    code: "LDF",
    title: "Long-Distance Freight",
    need: "It's going across states",
    summary: "Intercity & interstate cargo operations optimized with continuous transit tracking.",
    body: "Interstate road freight planned lane by lane, with the route, halts and documentation worked out before the vehicle leaves, and tracking that continues until it arrives.",
    features: ["Intercity & interstate lanes", "Route planning", "Continuous transit tracking", "Pan-India reach"],
    load: [0.62, 0.3],
  },
  {
    id: "door-to-door",
    code: "D2D",
    title: "Door-to-Door Delivery",
    need: "Pick it up and hand it over",
    summary: "Seamless end-to-end coverage spanning first-mile pickup to final verified delivery.",
    body: "We collect from your premises and hand over at the consignee's door, with every leg in between managed by us and closed with a proof of delivery.",
    features: ["First-mile pickup", "Last-mile delivery", "One coordinator end to end", "Verified POD"],
    load: [0.28, 0.4],
  },
];

export const workflow = [
  { title: "Booking", body: "Share the load, the lane and the date. We confirm the vehicle and the rate." },
  { title: "Vehicle Placement", body: "A vehicle matched to your consignment volume reports at your gate." },
  { title: "Pickup", body: "Loaded, lashed and documented before it moves an inch." },
  { title: "Transit Management", body: "Route monitored and driver reachable for the whole journey." },
  { title: "Delivery", body: "Handed over at the destination inside the committed window." },
  { title: "POD Confirmation", body: "Signed proof of delivery back to you, closing the consignment." },
];

export const promises = [
  {
    title: "Reliable Placement",
    body: "Precision vehicle matching tailored to consignment volume and route complexity.",
  },
  {
    title: "On-Time Commitment",
    body: "Scheduled dispatch windows, optimal route planning, and strict transit monitoring.",
  },
  {
    title: "Safe Cargo Handling",
    body: "Professional lashing, transit protection, and zero-damage delivery standards.",
  },
  {
    title: "Operational Excellence",
    body: "Proactive lifecycle management from initial dispatch to final POD delivery.",
  },
];

export const industries = [
  "Manufacturers & Industries",
  "Distributors & Wholesalers",
  "FMCG & Consumer Goods",
  "Retail & E-Commerce",
  "Automobile & Components",
  "Infrastructure & Construction",
  "Commercial Traders",
  "Corporate Enterprises",
];
