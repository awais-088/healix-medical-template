"use client";

import "./FAQ.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import Accordion from "@/components/accordion/Accordion";

import { faqData } from "@/data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <Container>
        <SectionTitle
          subtitle="Frequently Asked Questions"
          title="Common Questions About Gastroenterology & Liver Care"
        />

        <Accordion items={faqData} />
      </Container>
    </section>
  );
}
