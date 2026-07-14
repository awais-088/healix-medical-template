import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Logo() {
  return (
    <a href="#hero" className="logo">
      <Image
        src="/logo/logo.webp"
        alt={`${siteData.clinicName} Logo`}
        width={62}
        height={62}
        priority
      />

      <div className="logo-text">
        <h3>{siteData.clinicName}</h3>

        <p>{siteData.doctorName}</p>
      </div>
    </a>
  );
}
