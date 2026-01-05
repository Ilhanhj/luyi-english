import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn("text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl text-foreground font-headline", className)}>
      {children}
    </h2>
  );
}
