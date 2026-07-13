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
              <div className="testimonial-footer">
                <a
                  href="https://www.google.com/search?sca_esv=176b5346a3f0d613&q=Dr.+Saif+Ullah+Sumra+Liver+%26+Gastro+Care+Clinic+Layyah#lrd=0x3925a77da34e41c9:0xd802a2adc84445d1,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More Reviews →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
