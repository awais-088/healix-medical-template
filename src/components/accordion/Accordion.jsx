"use client";

import "./Accordion.css";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion({ items }) {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="accordion">
      {items.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${active === item.id ? "active" : ""}`}
        >
          <button className="accordion-header" onClick={() => toggle(item.id)}>
            <span>{item.question}</span>

            <div className="accordion-icon">
              {active === item.id ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>

          <div
            className={`accordion-content ${active === item.id ? "show" : ""}`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
