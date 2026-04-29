import { useEffect, useState } from "react";

export function BootScreen() {
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
          GLC-OS v1.0
        </div>
        <div className="font-mono-retro text-2xl text-neon-cyan mb-2">
          &gt; Booting portfolio<span className="blink">_</span>
        </div>
        <div className="font-mono-retro text-base text-muted-foreground mb-6">
          Loading assets... mounting modules... ok
        </div>
        <div
          className="h-4 w-full pixel-border-green bg-card relative overflow-hidden"
          aria-label="Loading"
        >
          <div className="loading-bar h-full bg-neon-green" />
        </div>
        <div className="font-pixel text-[10px] text-neon-yellow mt-4 text-center text-shadow-glow-yellow">
          PRESS START WHEN READY
        </div>
      </div>
    </div>
  );
}
