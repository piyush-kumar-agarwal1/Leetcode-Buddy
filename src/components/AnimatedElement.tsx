import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useEffect } from "react";

type AnimatedElementProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
  animation?: "fade-in" | "fade-in-left" | "fade-in-right";
  disableOnMobile?: boolean;
};

export default function AnimatedElement({
  children,
  className,
  delay = 1,
  animation = "fade-in",
  disableOnMobile = false,
}: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation();
  const isMobileRef = useRef(false);

  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768 || disableOnMobile;
  }, [disableOnMobile]);

  if (isMobileRef.current) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{
        willChange: "transform, opacity",
        transitionDelay: `${delay * 100}ms`,
        ...(animation === "fade-in-left" && {
          transform: isVisible ? "translateX(0)" : "translateX(-20px)",
        }),
        ...(animation === "fade-in-right" && {
          transform: isVisible ? "translateX(0)" : "translateX(20px)",
        }),
      }}
    >
      {children}
    </div>
  );
}
