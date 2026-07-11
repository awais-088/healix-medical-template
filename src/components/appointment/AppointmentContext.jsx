"use client";

import { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <AppointmentContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  return useContext(AppointmentContext);
}
