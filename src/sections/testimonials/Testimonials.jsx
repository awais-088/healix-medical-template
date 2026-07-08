"use client";

import "./Testimonials.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { Quote } from "lucide-react";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <Container>
        <SectionTitle
          subtitle="Patient Feedback"
          title="Trusted By Patients Across Layyah"
        />

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="quote-icon">
                <Quote />
              </div>

              <div className="stars">★★★★★</div>

              <p>{item.review}</p>

              <h3>{item.name}</h3>

              <span>{item.city}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
