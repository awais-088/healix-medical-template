import "./globals.css";

import "@fontsource/inter";
import "@fontsource/poppins/700.css";
import "@fontsource/space-grotesk";

export const metadata = {
  title: "Liver & Gastro Care | Dr. Saif Ullah Sumra",
  description: "Consultant Gastroenterologist & Hepatologist in Layyah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
