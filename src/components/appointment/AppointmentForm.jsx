"use client";

import "./AppointmentForm.css";

import { useState } from "react";

import { CheckCircle2 } from "lucide-react";
import { validateAppointment } from "./Validation";
import { generateWhatsAppMessage } from "./WhatsAppMessage";

import { siteData } from "@/data/siteData";
export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",

    phone: "",

    cnic: "",

    age: "",

    gender: "",

    city: "",

    visitDate: "",

    patientType: "New Patient",
    reason: "",
    symptoms: "",

    notes: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  if (success) {
    return (
      <div className="appointment-success">
        <CheckCircle2 size={80} className="success-icon" />

        <h2>Appointment Request Ready</h2>

        <p>
          Thank you for choosing
          <strong> Liver & Gastro Care Clinic</strong>.
        </p>

        <p>Your appointment request has been prepared.</p>

        <div className="success-box">
          <p>✓ Reception will review your request.</p>

          <p>✓ You will receive your appointment time.</p>

          <p>✓ Your visiting token number will be shared.</p>

          <p>✓ Any preparation instructions will be explained.</p>
        </div>

        <button
          className="submit-appointment"
          onClick={() => {
            const message = generateWhatsAppMessage(formData);

            const url = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");
          }}
        >
          Continue to WhatsApp
        </button>
      </div>
    );
  }
  return (
    <form
      className="appointment-form"
      onSubmit={(e) => {
        e.preventDefault();

        const validationErrors = validateAppointment(formData);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
          return;
        }

        setLoading(true);

        setTimeout(() => {
          setLoading(false);

          setSuccess(true);
        }, 1200);
      }}
    >
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name *</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
            placeholder="e.g: Muhammad Awais"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Mobile Number *</label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error-input" : ""}
            placeholder="03001234567"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label>CNIC (Optional)</label>

          <input
            type="text"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            className={errors.cnic ? "error-input" : ""}
            placeholder="35202-1234567-1"
          />
          {errors.cnic && <p className="error">{errors.cnic}</p>}
        </div>

        <div className="form-group">
          <label>Age *</label>

          <input
            type="number"
            name="age"
            className={errors.age ? "error-input" : ""}
            value={formData.age}
            onChange={handleChange}
            placeholder="e.g. 35"
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div className="form-group">
          <label>Gender *</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={errors.gender ? "error-input" : ""}
          >
            <option value="">Select Gender</option>

            <option>Male</option>

            <option>Female</option>

            <option>Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <div className="form-group">
          <label>City *</label>

          <input
            type="text"
            name="city"
            className={errors.city ? "error-input" : ""}
            value={formData.city}
            onChange={handleChange}
            placeholder="Layyah"
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        <div className="form-group">
          <label>Preferred Visit Date *</label>

          <input
            type="date"
            className={errors.visitDate ? "error-input" : ""}
            name="visitDate"
            value={formData.visitDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.visitDate && <p className="error">{errors.visitDate}</p>}
        </div>

        <div className="form-group">
          <label>Patient Type *</label>

          <select
            name="patientType"
            value={formData.patientType}
            onChange={handleChange}
          >
            <option>New Patient</option>

            <option>Existing Patient</option>
          </select>
        </div>

        <div className="form-group">
          <label>Reason for Visit *</label>

          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={errors.reason ? "error-input" : ""}
          >
            <option value="">Select Reason</option>

            <option>General Consultation</option>

            <option>Endoscopy</option>

            <option>Colonoscopy</option>

            <option>Liver Disease</option>

            <option>Fatty Liver</option>

            <option>Hepatitis</option>

            <option>Acid Reflux (GERD)</option>

            <option>IBS</option>

            <option>Stomach Pain</option>

            <option>Constipation</option>

            <option>Diarrhea</option>

            <option>Other</option>
          </select>

          {errors.reason && <p className="error">{errors.reason}</p>}
        </div>
      </div>

      <div className="form-group">
        <label>Symptoms / Problem *</label>
        <textarea
          rows="5"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          className={errors.symptoms ? "error-input" : ""}
          placeholder="Describe your symptoms..."
        />
        {errors.symptoms && <p className="error">{errors.symptoms}</p>}
      </div>

      <div className="form-group">
        <label>Additional Notes</label>

        <textarea
          rows="3"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Mention medicines, allergies or previous reports (optional)"
        />
      </div>

      <button className="submit-appointment" type="submit" disabled={loading}>
        {loading ? "Preparing Request..." : "Send Appointment Request"}
      </button>
    </form>
  );
}
