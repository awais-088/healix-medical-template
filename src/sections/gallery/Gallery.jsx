"use client";

import "./Gallery.css";

import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <Container>
        <SectionTitle
          subtitle="Our Clinic"
          title="A Comfortable & Modern Healthcare Environment"
        />

        <div className="gallery-grid">
          {gallery.map((item) => (
            <div key={item.id} className="gallery-card">
              <Image
                src={item.image}
                alt={item.alt}
                width={600}
                height={500}
                className="gallery-image"
              />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
