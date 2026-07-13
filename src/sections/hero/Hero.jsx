"use client";

import "./Hero.css";

import { motion } from "framer-motion";
import TypingDesignation from "@/components/ui/TypingDesignation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteData } from "@/data/siteData";
import Image from "next/image";
import doctorImage from "@/assets/images/doctor/doctor.png";
import { useAppointment } from "@/components/appointment/AppointmentContext";
import Counter from "@/components/animations/Counter";
export default function Hero() {
  const { setOpen } = useAppointment();

  return (
    <section id="hero" className="hero">
      <Container>
        <div className="hero-wrapper">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge text="Trusted Gastroenterologist in Layyah" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Dr. Saif Ullah Sumra
              <br />
              Gastroenterologist in Layyah
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {siteData.designation}. Specialized in endoscopy, colonoscopy,
              liver diseases, hepatitis and advanced digestive care for patients
              across Layyah and South Punjab.
            </motion.p>
            <div className="hero-qualification">
              <p>{siteData.qualification}</p>
            </div>
            <TypingDesignation />
            <div className="hero-buttons">
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

          <div className="hero-image">
            <div className="doctor-circle"></div>

            <Image
              src={doctorImage}
              alt={siteData.doctorName}
              className="doctor-image"
              width={420}
              height={520}
              priority
            />
          </div>
        </div>
        <div className="hero-stats">
          <div>
            <h3>
              <Counter end={siteData.experience} suffix="+" />
            </h3>

            <p>Years Experience</p>
          </div>

          <div>
            <h3>
              <Counter end={siteData.patients} suffix="+" />
            </h3>

            <p>Happy Patients</p>
          </div>

          <div>
            <h3>
              <Counter end={siteData.procedures} suffix="+" />
            </h3>
            <p>Successful Procedures</p>
          </div>

          <div>
            <h3>24/7</h3>

            <p>Patient Support</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
