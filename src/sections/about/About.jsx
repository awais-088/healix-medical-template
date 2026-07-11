"use client";

import "./About.css";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";
import { useAppointment } from "@/components/appointment/AppointmentContext";
import SectionTitle from "@/components/ui/SectionTitle";

import Image from "next/image";
import { Stethoscope, Microscope, ScanSearch, HeartPulse } from "lucide-react";
import doctorImage from "@/assets/images/doctor/doctor.png";

import { siteData } from "@/data/siteData";

export default function About() {
  const { setOpen } = useAppointment();
  return (
    <section id="about" className="about">
      <Container>
        <SectionTitle
          subtitle="About Doctor"
          title="Meet Dr. Saif Ullah Sumra"
        />

        <div className="about-wrapper">
          <div className="about-image">
            <Image
              src={doctorImage}
              alt={siteData.doctorName}
              width={500}
              height={620}
              className="about-doctor-image"
            />
          </div>

          <div className="about-content">
            <div className="about-badge">
              Consultant Gastroenterologist & Hepatologist
            </div>
            <h3>{siteData.qualification}</h3>

            <p>
              Dr. Saif Ullah Sumra is a Consultant Gastroenterologist and
              Hepatologist dedicated to providing evidence-based care for liver,
              stomach and digestive disorders. He performs advanced diagnostic
              and therapeutic endoscopic procedures while focusing on accurate
              diagnosis, patient education and long-term digestive health.
            </p>

            <div className="about-list">
              <div className="about-card">
                <div className="about-icon">
                  <Stethoscope size={28} strokeWidth={2.2} />
                </div>

                <div>
                  <h4>Liver Diseases</h4>

                  <p>Advanced diagnosis & treatment</p>
                </div>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <Microscope size={28} strokeWidth={2.2} />
                </div>

                <div>
                  <h4>Advanced Endoscopy</h4>

                  <p>Upper GI & Diagnostic Procedures</p>
                </div>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <ScanSearch size={28} strokeWidth={2.2} />
                </div>

                <div>
                  <h4>Colonoscopy</h4>

                  <p>Early Cancer Screening</p>
                </div>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <HeartPulse size={28} strokeWidth={2.2} />
                </div>

                <div>
                  <h4>Hepatitis Care</h4>

                  <p>Hepatitis B • C • Fatty Liver</p>
                </div>
              </div>
            </div>

            <div className="about-button">
              <Button text="Book Appointment" onClick={() => setOpen(true)} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
