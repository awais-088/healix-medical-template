"use client";
import Reveal from "@/components/animations/Reveal";
import "./Treatments.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { treatments } from "@/data/treatments";

import { ArrowRight } from "lucide-react";

export default function Treatments() {
  return (
    <section className="treatments">
      <Container>
        <Reveal>
          <SectionTitle
            subtitle="Our Services"
            title="Comprehensive Gastro & Liver Care"
          />

          <div className="treatments-grid">
            {treatments.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.id} className="treatment-card">
                  <div className="treatment-icon">
                    <Icon size={34} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button className="learn-more">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
