"use client";

import "./Contact.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

import { Phone, MapPin, Clock3, Mail, Navigation } from "lucide-react";

import { siteData } from "@/data/siteData";

import { useAppointment } from "@/components/appointment/AppointmentContext";

export default function Contact() {
  const { setOpen } = useAppointment();

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <Container>
        <SectionTitle
          subtitle="Contact Us"
          title="Visit Liver & Gastro Care Clinic in Layyah"
        />

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={24} />
              </div>

              <div>
                <h3>Call Reception</h3>

                <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>

              <div>
                <h3>Clinic Address</h3>

                <p>{siteData.location}</p>

                <a
                  href={siteData.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direction-link"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Clock3 size={24} />
              </div>

              <div>
                <h3>Clinic Hours</h3>

                <p>{siteData.timings}</p>

                <p>{siteData.hours}</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>

              <div>
                <h3>Email</h3>

                <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <Navigation size={24} />
              </div>

              <div>
                <h3>Emergency Notice</h3>

                <p>
                  For severe abdominal pain, bleeding, or other medical
                  emergencies, please visit the nearest emergency department
                  immediately or call local emergency services.
                </p>
              </div>
            </div>

            <div className="contact-buttons">
              <Button text="Book Appointment" onClick={() => setOpen(true)} />

              <a href={`tel:${siteData.phone}`}>
                <Button text="Call Reception" variant="secondary" />
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Dawood+Ramzan+Hospital+Layyah&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
