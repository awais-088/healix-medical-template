import "./globals.css";

import "@fontsource/inter";
import "@fontsource/poppins/700.css";
import "@fontsource/space-grotesk";

export const metadata = {
  title:
    "Dr. Saif Ullah Sumra | Consultant Gastroenterologist & Hepatologist | Layyah",

  description:
    "Official website of Dr. Saif Ullah Sumra. Consultant Gastroenterologist & Hepatologist providing endoscopy, colonoscopy, liver disease treatment and digestive care in Layyah.",

  keywords: [
    "Dr Saif Ullah Sumra",
    "Gastroenterologist Layyah",
    "Hepatologist Layyah",
    "Endoscopy",
    "Colonoscopy",
    "Liver Specialist Pakistan",
    "Digestive Care",
  ],

  openGraph: {
    title: "Dr. Saif Ullah Sumra | Liver & Gastro Care Clinic",
    description: "Advanced gastroenterology and liver care in Layyah.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
