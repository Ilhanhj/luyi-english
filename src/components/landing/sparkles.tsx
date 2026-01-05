
import { cn } from "@/lib/utils";

const Sparkle = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("animate-pulse", className)}
  >
    <path
      d="M6 0L7.05333 4.94667L12 6L7.05333 7.05333L6 12L4.94667 7.05333L0 6L4.94667 4.94667L6 0Z"
      fill="currentColor"
    />
  </svg>
);

export const Sparkles = ({ className }: { className?: string }) => (
  <div className={cn("relative w-16 h-16", className)}>
    <Sparkle className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4" />
    <Sparkle className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 animation-delay-400" />
    <Sparkle className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 animation-delay-200" />
    <Sparkle className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 animation-delay-600" />
    <Sparkle className="absolute top-1/4 left-1/4 w-2 h-2 animation-delay-100" />
    <Sparkle className="absolute bottom-1/4 right-1/4 w-2 h-2 animation-delay-500" />
  </div>
);
