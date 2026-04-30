import { useEffect, useState } from "react";

import { usePortfolioCopy } from "@/application/portfolio-language-context";

export function BootScreen() {
  const copy = usePortfolioCopy();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 3200);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div className="boot-fade-out fixed inset-0 z-[100] flex items-center justify-center bg-background crt-scanlines">
      <div className="w-full max-w-md px-6">
        <div className="font-pixel text-xs text-neon-green text-shadow-glow-green mb-4">
          {copy.boot.title}
        </div>
        <div className="font-mono-retro text-2xl text-neon-cyan mb-2">
          &gt; {copy.boot.line}
          <span className="blink">_</span>
        </div>
        <div className="font-mono-retro text-base text-muted-foreground mb-6">
          {copy.boot.detail}
        </div>
        <div
          className="h-4 w-full pixel-border-green bg-card relative overflow-hidden"
          aria-label={copy.boot.loadingLabel}
        >
          <div className="loading-bar h-full bg-neon-green" />
        </div>
        <div className="font-pixel text-[10px] text-neon-yellow mt-4 text-center text-shadow-glow-yellow">
          {copy.boot.ready}
        </div>
      </div>
    </div>
  );
}
