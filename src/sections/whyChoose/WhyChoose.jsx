"use client";

import "./WhyChoose.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { features } from "@/data/features";

export default function WhyChoose() {
  return (
    <section className="why">
      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="Why Patients Trust Dr. Saif Ullah Sumra"
        />

        <div className="why-grid">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div className="why-card" key={item.id}>
                <div className="why-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
