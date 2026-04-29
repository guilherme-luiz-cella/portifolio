import { SectionShell } from "./SectionShell";

export function About() {
  return (
    <SectionShell id="about" label="QUEST 01" title="ABOUT THE PLAYER" accent="cyan">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="reveal-up md:col-span-2 bg-card p-6 sm:p-8 pixel-border-cyan">
          <div className="font-pixel text-[10px] text-neon-yellow mb-4">▮ CHARACTER BIO</div>
          <p className="font-body text-base sm:text-lg leading-relaxed text-foreground mb-4">
            I'm a <span className="text-neon-green font-semibold">Back-End Developer</span> passionate about building
            clean, efficient, and reliable systems. I work mainly with Laravel, PHP, MySQL, and APIs —
            crafting the invisible engines that make web products actually work.
          </p>
          <p className="font-body text-base sm:text-lg leading-relaxed text-muted-foreground">
            I also bring practical <span className="text-neon-cyan">technical support</span> experience,
            which helps me understand real user problems and design solutions that hold up in production —
            not just in theory.
          </p>
        </div>

        <div className="reveal-up bg-card p-6 pixel-border-magenta">
          <div className="font-pixel text-[10px] text-neon-magenta mb-4">▮ STATS</div>
          <ul className="font-mono-retro text-lg space-y-2">
            <li className="flex justify-between"><span>CLASS</span><span className="text-neon-green">Back-End Dev</span></li>
            <li className="flex justify-between"><span>WEAPON</span><span className="text-neon-cyan">Laravel</span></li>
            <li className="flex justify-between"><span>SHIELD</span><span className="text-neon-yellow">MySQL</span></li>
            <li className="flex justify-between"><span>SPECIAL</span><span className="text-neon-magenta">APIs</span></li>
            <li className="flex justify-between"><span>STATUS</span><span className="text-neon-green animate-pulse">● ONLINE</span></li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
