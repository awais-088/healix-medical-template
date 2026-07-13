"use client";

import "./WhyChoose.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
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
              <motion.div
                className="why-card"
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: item.id * 0.1,
                }}
              >
                <div className="why-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
