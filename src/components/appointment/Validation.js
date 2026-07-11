export function validateAppointment(formData) {
  const errors = {};

  // Full Name
  if (!formData.name.trim()) {
    errors.name = "Full name is required.";
  } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
    errors.name = "Only letters and spaces are allowed.";
  } else if (formData.name.trim().length < 3) {
    errors.name = "Name must contain at least 3 characters.";
  }

  // Mobile Number
  if (!formData.phone.trim()) {
    errors.phone = "Mobile number is required.";
  } else if (!/^03[0-9]{9}$/.test(formData.phone)) {
    errors.phone = "Enter a valid Pakistani mobile number.";
  }

  // CNIC (Optional)
  if (formData.cnic && !/^\d{5}-\d{7}-\d$/.test(formData.cnic)) {
    errors.cnic = "CNIC format should be 35202-1234567-1";
  }

  // Age
  if (!formData.age) {
    errors.age = "Age is required.";
  } else if (formData.age < 1 || formData.age > 120) {
    errors.age = "Please enter a valid age.";
  }

  // Gender
  if (!formData.gender) {
    errors.gender = "Please select gender.";
  }

  // City
  if (!formData.city.trim()) {
    errors.city = "City is required.";
  }
  // Reason

  if (!formData.reason) {
    errors.reason = "Please select the reason for your visit.";
  }

  // Date
  if (!formData.visitDate) {
    errors.visitDate = "Please choose your preferred visit date.";
  }

  // Symptoms
  if (!formData.symptoms.trim()) {
    errors.symptoms = "Please describe your symptoms.";
  } else if (formData.symptoms.trim().length < 10) {
    errors.symptoms = "Symptoms should contain at least 10 characters.";
  }

  return errors;
}
