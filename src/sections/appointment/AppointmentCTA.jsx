"use client";

import "./AppointmentCTA.css";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

import { siteData } from "@/data/siteData";

export default function AppointmentCTA() {
  return (
    <section className="appointment">
      <Container>
        <div className="appointment-card">
          <div className="appointment-content">
            <div className="appointment-icon">
              <CalendarCheck size={38} />
            </div>

            <span className="appointment-badge">Book Your Consultation</span>

            <h2>
              Need Expert Gastro &
              <br />
              Liver Care?
            </h2>

            <p>
              Speak directly with our reception team to schedule your
              consultation. Fast appointment booking, friendly assistance and
              professional care.
            </p>

            <div className="appointment-features">
              <span>✓ Same Day Appointments</span>

              <span>✓ Friendly Reception Staff</span>

              <span>✓ Evidence-Based Care</span>
            </div>

            <div className="appointment-buttons">
              <a href={`tel:${siteData.phone}`}>
                <Button text="Call Reception" />
              </a>

              <a
                href={`https://wa.me/${siteData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="WhatsApp" variant="secondary" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
