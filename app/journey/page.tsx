import type { Metadata } from "next";
import ScrollJourney from "@/components/scroll-journey/ScrollJourney";

export const metadata: Metadata = {
  title: "The Journey (Preview) | Parshuram Express Logistics",
  description:
    "Preview of the scroll-driven 3D homepage journey — warehouse to delivery, one continuous take.",
};

export default function JourneyPage() {
  return <ScrollJourney />;
}
