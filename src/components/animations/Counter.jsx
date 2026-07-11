"use client";

import CountUp from "react-countup";

export default function Counter({ end, suffix = "" }) {
  return (
    <CountUp
      end={end}
      duration={2.5}
      enableScrollSpy
      scrollSpyOnce
      suffix={suffix}
    />
  );
}
