"use client";

import "./FAQ.css";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import Accordion from "@/components/accordion/Accordion";

import { faqData } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="faq">
      <Container>
        <SectionTitle
          subtitle="Frequently Asked Questions"
          title="Answers To Common Patient Questions"
        />

        <Accordion items={faqData} />
      </Container>
    </section>
  );
}
