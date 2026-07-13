"use client";

import "./AppointmentCTA.css";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useAppointment } from "@/components/appointment/AppointmentContext";
import { PhoneCall, CalendarCheck, ArrowRight } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function AppointmentCTA() {
  const { setOpen } = useAppointment();

  return (
    <section
      id="appointment"
      className="appointment"
      aria-labelledby="appointment-title"
    >
      <Container>
        <div className="appointment-card">
          <div className="appointment-content">
            <div className="appointment-icon">
              <CalendarCheck size={38} />
            </div>

            <span className="appointment-badge">Book Your Consultation</span>

            <h2 id="appointment-title">
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
              <Button text="Book Appointment" onClick={() => setOpen(true)} />

              <Button
                text="Call Reception"
                variant="secondary"
                onClick={() => {
                  window.location.href = `tel:${siteData.phone}`;
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
