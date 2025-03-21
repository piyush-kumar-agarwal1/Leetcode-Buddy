
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type AnimatedElementProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
  animation?: "fade-in" | "fade-in-left" | "fade-in-right";
};

export default function AnimatedElement({
  children,
  className,
  delay = 1,
  animation = "fade-in",
}: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        `transition-delay-${delay * 100}`,
        className
      )}
      style={{ 
        transitionDelay: `${delay * 100}ms`,
        ...(animation === "fade-in-left" && { 
          transform: isVisible ? "translateX(0)" : "translateX(-20px)" 
        }),
        ...(animation === "fade-in-right" && { 
          transform: isVisible ? "translateX(0)" : "translateX(20px)" 
        }),
      }}
    >
      {children}
    </div>
  );
}
