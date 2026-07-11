"use client";

import "./FloatingWidget.css";

import { Phone, MessageCircle, MapPinned, CalendarDays } from "lucide-react";

import { siteData } from "@/data/siteData";
import { useAppointment } from "@/components/appointment/AppointmentContext";
export default function FloatingWidget() {
  const { setOpen } = useAppointment();

  return (
    <div className="floating-widget">
      <a href={`tel:${siteData.phone}`} aria-label="Call">
        <Phone />
      </a>

      <a href={siteData.map} target="_blank" aria-label="Directions">
        <MapPinned />
      </a>

      <button
        className="floating-book"
        onClick={() => setOpen(true)}
        aria-label="Book Appointment"
      >
        <CalendarDays />
      </button>
    </div>
  );
}
