import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
}

const Reveal = ({ children }: RevealProps) => {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;
