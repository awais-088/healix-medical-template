import Navbar from "@/components/layout/Navbar";
import WhyChoose from "@/sections/whyChoose/WhyChoose";
import Hero from "@/sections/hero/Hero";
import PatientJourney from "@/sections/patientJourney/PatientJourney";
import PatientTrust from "@/sections/patientTrust/PatientTrust";
import FloatingWidget from "@/components/floating/FloatingWidget";
import Gallery from "@/sections/gallery/Gallery";
import AppointmentCTA from "@/sections/appointment/AppointmentCTA";
import Treatments from "@/sections/treatments/Treatments";
import About from "@/sections/about/About";
export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingWidget />
      <Hero />
      <About />
      <WhyChoose />
      <Treatments />
      <AppointmentCTA />
      <Gallery />
      <PatientTrust />
      <PatientJourney />
    </>
  );
}
