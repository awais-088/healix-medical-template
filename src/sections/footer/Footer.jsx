"use client";

import "./Footer.css";

import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ChevronUp,
} from "lucide-react";

import { siteData } from "@/data/siteData";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          {/* Column 1 */}

          <div className="footer-about">
            <Logo />

            <p>{siteData.tagline}</p>
          </div>

          {/* Column 2 */}

          <div>
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="#">Home</a>
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
                <MessageCircle size={18} />

                <a
                  href={`https://wa.me/${siteData.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
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

                <span>Mon - Sat | 3:00 PM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4 */}

          <div>
            <h3>Specialized Care</h3>

            <ul>
              <li>Endoscopy</li>

              <li>Colonoscopy</li>

              <li>Liver Diseases</li>

              <li>Hepatitis</li>

              <li>GERD</li>

              <li>IBS</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteData.doctorName}. All Rights
            Reserved.
          </p>

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
