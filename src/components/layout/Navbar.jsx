"use client";
import { navigation } from "@/data/navigation";
import { useState, useEffect } from "react";
import NavbarQuote from "./NavbarQuote";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  MessageCircleMore,
  MapPinned,
  ChevronRight,
  X,
  Menu,
} from "lucide-react";
import "./Navbar.css";
import { siteData } from "@/data/siteData";
import Logo from "./Logo";
import Button from "../ui/Button";
import { useAppointment } from "@/components/appointment/AppointmentContext";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const [scrolled, setScrolled] = useState(false);
  const { setOpen } = useAppointment();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Logo />

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="mobile-nav-content"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.35,
                }}
              >
                <div className="mobile-header">
                  <Logo />

                  <p>Trusted Gastroenterology & Liver Care</p>

                  <button
                    className="mobile-close"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close Menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <ul>
                  {navigation.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        onClick={(e) => {
                          e.preventDefault();

                          setMenuOpen(false);

                          if (!item.link || item.link === "#") return;

                          setTimeout(() => {
                            const section = document.querySelector(item.link);

                            if (section) {
                              section.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }, 300);
                        }}
                      >
                        <span>{item.name}</span>

                        <ChevronRight size={18} />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mobile-actions">
                  <Button
                    text="Book Appointment"
                    onClick={() => {
                      setMenuOpen(false);
                      setOpen(true);
                    }}
                  />

                  <a href={`tel:${siteData.phone}`} className="mobile-card">
                    <PhoneCall size={22} strokeWidth={2.2} />

                    <div>
                      <strong>Call Reception</strong>
                      <small>{siteData.phone}</small>
                    </div>
                  </a>

                  <a
                    href={siteData.map}
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-card"
                  >
                    <MapPinned size={22} strokeWidth={2.2} />

                    <div>
                      <strong>Clinic Location</strong>
                      <small>Open Google Maps</small>
                    </div>
                  </a>
                </div>

                <div className="mobile-footer">
                  <div className="footer-divider"></div>

                  <h4>Clinic Hours</h4>

                  <p>Monday – Saturday</p>

                  <strong>3:00 PM – 10:00 PM</strong>

                  <div className="footer-divider"></div>

                  <small>
                    © {new Date().getFullYear()} Liver & Gastro Care Clinic
                  </small>
                </div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
        <NavbarQuote />
        <div className="desktop-btn">
          <Button text="Book Appointment" onClick={() => setOpen(true)} />
        </div>

        <div
          className="menu-btn"
          aria-label="Open Menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={40} />
        </div>
      </div>
    </header>
  );
}
