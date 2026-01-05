import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionSubtitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionSubtitle({ children, className }: SectionSubtitleProps) {
  return (
    <p className={cn("mt-4 max-w-2xl text-center text-lg text-gray-300 mx-auto", className)}>
      {children}
    </p>
  );
}
