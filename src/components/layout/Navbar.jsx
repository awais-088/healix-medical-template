"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

import Logo from "./Logo";
import Button from "../ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

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

        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Treatments</a>
            </li>

            <li>
              <a href="#">Services</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="desktop-btn">
          <Button text="Book Appointment" />
        </div>

        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}
