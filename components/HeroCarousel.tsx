"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Slide {
  id: number;
  tagline: string;
  title: string;
  description: string;
  image: string;
}

export default function HeroCarousel() {
  const slides: Slide[] = [
    {
      id: 1,
      tagline: "We Connect. We Deliver.",
      title: "On Time, Every Time — Pan-India Freight",
      description: "A premier transport & supply chain partner providing end-to-end, reliable, cost-optimized freight movement solutions across India.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 2,
      tagline: "Full Truck Load & Dedicated Fleet",
      title: "Precision Vehicle Placement, Every Consignment",
      description: "Point-to-point FTL, custom vehicle deployment, and express priority transit engineered for time-sensitive freight.",
      image: "https://images.unsplash.com/photo-1516576885230-100c08f53839?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 3,
      tagline: "Door-to-Door, Nationwide",
      title: "From First-Mile Pickup to Final POD",
      description: "Long-distance road transport and consolidated LTL movement, backed by strict transit monitoring and safe cargo handling.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="hero-slide-overlay" />
          <div className="container">
            <div className="hero-content">
              <span className="hero-tag">{slide.tagline}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-btns">
                <Link href="/contact" className="btn btn-primary">
                  Inquire Now
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="hero-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-nav-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
