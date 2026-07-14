"use client";

import "./Footer.css";

import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import { Facebook, Instagram } from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronUp,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

import { siteData } from "@/data/siteData";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Liver & Gastro Care Clinic Footer
        </h2>
        <div className="footer-grid">
          {/* Column 1 */}

          <div className="footer-about">
            <Logo />
            <p className="doctor-name">{siteData.doctorName}</p>

            <p className="doctor-role">{siteData.designation}</p>
            <p>{siteData.tagline}</p>
          </div>

          {/* Column 2 */}

          <div>
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#treatments">Treatments</a>
              </li>

              <li>
                <a href="#gallery">Gallery</a>
              </li>

              <li>
                <a href="#faq">FAQ</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}

          <div>
            <h3>Contact</h3>

            <ul>
              <li>
                <Phone size={18} />

                <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
              </li>
              <li>
                <CalendarCheck size={18} />

                <a href="#contact">Book Consultation</a>
              </li>
              <li>
                <Mail size={18} />

                <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
              </li>

              <li>
                <MapPin size={18} />

                <a href={siteData.map} target="_blank" rel="noreferrer">
                  View on Google Maps
                </a>
              </li>

              <li>
                <Clock size={18} />

                <span>
                  Monday – Saturday
                  <br />
                  3:00 PM – 10:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 */}

          <div>
            <h3>Specialized Care</h3>

            <ul>
              <li>
                <CheckCircle2 size={16} />
                Endoscopy
              </li>

              <li>
                <CheckCircle2 size={16} />
                Colonoscopy
              </li>

              <li>
                <CheckCircle2 size={16} />
                Liver Diseases
              </li>

              <li>
                <CheckCircle2 size={16} />
                Hepatitis
              </li>

              <li>
                <CheckCircle2 size={16} />
                GERD
              </li>

              <li>
                <CheckCircle2 size={16} />
                IBS
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h4>Follow Dr. Saif Ullah Sumra on Social Media</h4>

          <div className="footer-social-links">
            <a
              href="https://web.facebook.com/drsaifullahsumra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/drsaifsumra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            <p>
              © {new Date().getFullYear()} {siteData.clinicName}. All Rights
              Reserved.
            </p>

            <small>
              Designed & Developed by{" "}
              <a
                href="https://www.linkedin.com/in/muhammad-awais-214335357/"
                target="_blank"
                rel="noopener noreferrer"
                className="developer-link"
              >
                Muhammad Awais
              </a>
            </small>
          </div>

          <button
            className="back-top"
            onClick={scrollTop}
            aria-label="Back to Top"
          >
            <ChevronUp size={22} />
          </button>
        </div>
      </Container>
    </footer>
  );
}
