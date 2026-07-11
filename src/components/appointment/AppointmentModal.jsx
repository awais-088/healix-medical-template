"use client";

import "./AppointmentModal.css";

import { X } from "lucide-react";

import { useEffect } from "react";

import { useAppointment } from "./AppointmentContext";
import AppointmentForm from "./AppointmentForm";
export default function AppointmentModal() {
  const { open, setOpen } = useAppointment();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("keydown", handleEscape);
    };
  }, [setOpen]);

  if (!open) return null;

  return (
    <div className="appointment-overlay" onClick={() => setOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={() => setOpen(false)}>
          <X size={24} />
        </button>

        <h2>Book Appointment</h2>

        <p>
          Complete the form below and our reception team will contact you with
          your appointment time and token number.
        </p>
        <AppointmentForm />
      </div>
    </div>
  );
}
