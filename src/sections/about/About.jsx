"use client";

import "./About.css";

import Container from "@/components/ui/Container";

import Button from "@/components/ui/Button";

import SectionTitle from "@/components/ui/SectionTitle";

import Image from "next/image";

import doctorImage from "@/assets/images/doctor/doctor.png";

import { siteData } from "@/data/siteData";

export default function About() {
  return (
    <section className="about">
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
              <div>✔ Liver Diseases</div>

              <div>✔ Hepatitis B & C</div>

              <div>✔ Upper GI Endoscopy</div>

              <div>✔ Colonoscopy</div>

              <div>✔ Fatty Liver</div>

              <div>✔ IBS & GERD</div>
            </div>

            <Button text="Book Appointment" />
          </div>
        </div>
      </Container>
    </section>
  );
}
