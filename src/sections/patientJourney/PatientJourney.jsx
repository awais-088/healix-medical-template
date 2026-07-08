"use client";

import "./PatientJourney.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { journey } from "@/data/journey";

export default function PatientJourney() {
  return (
    <section className="journey">
      <Container>
        <SectionTitle
          subtitle="Patient Journey"
          title="Your Healthcare Journey Made Simple"
        />

        <div className="journey-grid">
          {journey.map((item) => {
            const Icon = item.icon;

            return (
              <div className="journey-card" key={item.id}>
                <div className="journey-number">{item.id}</div>

                <div className="journey-icon">
                  <Icon size={30} />
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
