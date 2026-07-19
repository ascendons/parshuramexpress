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
      tagline: "South India's Leading Logistics Partner",
      title: "Safe & Reliable Transportation",
      description: "Operational excellence all over India with full security, timely delivery, and client-first commitment.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 2,
      tagline: "Specialized Equipment Handling",
      title: "Heavy Machinery Transport",
      description: "Expert logistics and transport for CNC machines, industrial woodworking tools, and heavy food manufacturing equipment.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 3,
      tagline: "Secure & Planned Storage",
      title: "Warehousing & Supply Chain",
      description: "Equipped warehouses with round-the-clock security, professional loading, packaging, and sorting logistics.",
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
