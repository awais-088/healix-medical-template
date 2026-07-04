import { siteData } from "@/data/siteData";

export default function Logo() {
  return (
    <div className="logo">
      <span className="logo-icon">✚</span>

      <div>
        <h3>{siteData.clinicName}</h3>

        <p>{siteData.doctorName}</p>
      </div>
    </div>
  );
}
