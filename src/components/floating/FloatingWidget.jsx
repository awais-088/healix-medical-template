"use client";

import "./FloatingWidget.css";

import { Phone, MessageCircle, MapPinned, CalendarDays } from "lucide-react";

import { siteData } from "@/data/siteData";

export default function FloatingWidget() {
  return (
    <div className="floating-widget">
      <a
        href={`https://wa.me/${siteData.whatsapp}`}
        target="_blank"
        aria-label="WhatsApp"
      >
        <MessageCircle />
      </a>

      <a href={`tel:${siteData.phone}`} aria-label="Call">
        <Phone />
      </a>

      <a href={siteData.map} target="_blank" aria-label="Directions">
        <MapPinned />
      </a>

      <a href="#appointment" aria-label="Book">
        <CalendarDays />
      </a>
    </div>
  );
}
