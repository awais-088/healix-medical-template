import Navbar from "@/components/layout/Navbar";
import WhyChoose from "@/sections/whyChoose/WhyChoose";
import Hero from "@/sections/hero/Hero";
import FAQ from "@/sections/faq/FAQ";
import Contact from "@/components/contact/Contact";
import Footer from "@/sections/footer/Footer";
import AppointmentModal from "@/components/appointment/AppointmentModal";
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
      <AppointmentModal />
      <FloatingWidget />
      <Hero />
      <About />
      <WhyChoose />
      <Treatments />
      <AppointmentCTA />
      <Gallery />
      <PatientTrust />
      <PatientJourney />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
