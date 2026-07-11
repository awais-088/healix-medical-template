export function generateWhatsAppMessage(formData) {
  return `🩺 *NEW APPOINTMENT REQUEST*

👤 *Patient Name:* ${formData.name}

📱 *Mobile:* ${formData.phone}

🆔 *CNIC:* ${formData.cnic || "Not Provided"}

🎂 *Age:* ${formData.age}

⚧ *Gender:* ${formData.gender}

🏙 *City:* ${formData.city}

👥 *Patient Type:* ${formData.patientType}
🩺 *Reason for Visit:* ${formData.reason}
📅 *Preferred Visit Date:* ${formData.visitDate}

🩺 *Symptoms:*
${formData.symptoms}

📝 *Additional Notes:*
${formData.notes || "None"}

━━━━━━━━━━━━━━━━━━━━━━

Please review this appointment request.

Kindly call the patient to confirm:

• Appointment Time

• Token Number

• Any preparation instructions.

Thank you.
`;
}
