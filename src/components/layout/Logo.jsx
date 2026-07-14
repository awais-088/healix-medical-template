import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Logo() {
  return (
    <div className="logo">
      <Image
        src="/log.png"
        alt={siteData.clinicName}
        width={60}
        height={60}
        priority
      />

      <div className="logo-text">
        <h3>{siteData.clinicName}</h3>
        <p>{siteData.doctorName}</p>
      </div>
    </div>
  );
}
