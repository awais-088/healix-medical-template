"use client";

import "./PatientTrust.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { trustData } from "@/data/trust";

export default function PatientTrust() {
  return (
    <section className="patient-trust">
      <Container>
        <SectionTitle
          subtitle="Patient Trust"
          title="Trusted Across Multiple Healthcare Platforms"
        />

        <div className="trust-grid">
          {trustData.map((item) => {
            const Icon = item.icon;

            return (
              <div className="trust-card" key={item.id}>
                <div className="trust-icon" style={{ color: item.color }}>
                  <Icon size={34} />
                </div>

                <h3>{item.platform}</h3>

                <div className="trust-stars">★★★★★</div>

                <h2>{item.rating}</h2>

                <p>{item.reviews}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
