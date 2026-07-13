"use client";

import "./PatientJourney.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/animations/Reveal";
import { journey } from "@/data/journey";

export default function PatientJourney() {
  return (
    <section className="journey">
      <Container>
        <SectionTitle
          subtitle="Patient Journey"
          title="Your Journey to Better Liver & Digestive Health"
        />

        <div className="journey-grid">
          {journey.map((item) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.id}
                delay={item.id * 0.08}
                className="journey-card"
              >
                <div className="journey-number">{item.id}</div>

                <div className="journey-icon">
                  <Icon size={30} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
