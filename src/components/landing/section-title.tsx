import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn("text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400", className)}>
      {children}
    </h2>
  );
}
