import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn("text-3xl font-extrabold tracking-tight text-center sm:text-4xl lg:text-5xl text-foreground font-headline", className)}>
      {children}
    </h2>
  );
}
