"use client";

import { Typewriter } from "react-simple-typewriter";

import "./TypingDesignation.css";

export default function TypingDesignation() {
  return (
    <h2 className="typing-designation">
      Consultant{" "}
      <span>
        <Typewriter
          words={[
            "Gastroenterologist",
            "Hepatologist",
            "Advanced Endoscopy Expert",
            "Colonoscopy Specialist",
            "Liver Disease Specialist",
            "Digestive Health Expert",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={45}
          delaySpeed={2200}
        />
      </span>
    </h2>
  );
}
