"use client";

import { createContext, useContext, useState } from "react";

interface CursorContextType {
  variant: string;
  setVariant: (variant: string) => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState("default");

  return (
    <CursorContext.Provider value={{ variant, setVariant }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);

export const handleMove = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  e.currentTarget.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
};

export const reset = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.transform = "translate(0px, 0px)";
};
