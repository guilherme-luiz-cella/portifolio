export function Footer() {
  return (
    <footer className="border-t-4 border-neon-green/40 bg-card">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-6 items-center">
        <div>
          <div className="font-pixel text-xs text-neon-green text-shadow-glow-green mb-2">
            GUILHERME LUIZ CELLA
          </div>
          <div className="font-mono-retro text-base text-muted-foreground">
            Back-End Developer · Laravel · PHP · MySQL
          </div>
        </div>
        <div className="flex sm:justify-end gap-3 flex-wrap">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="font-pixel text-[9px] px-3 py-2 bg-background text-neon-yellow pixel-border-yellow pixel-hover">GITHUB</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="font-pixel text-[9px] px-3 py-2 bg-background text-neon-cyan pixel-border-cyan pixel-hover">LINKEDIN</a>
          <a href="mailto:guilherme.cella@email.com" className="font-pixel text-[9px] px-3 py-2 bg-background text-neon-magenta pixel-border-magenta pixel-hover">EMAIL</a>
        </div>
      </div>
      <div className="border-t-2 border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-2 font-mono-retro text-base text-muted-foreground">
          <div>© {new Date().getFullYear()} Guilherme Luiz Cella · All rights reserved</div>
          <div className="font-pixel text-[8px] text-neon-green">◆ GAME OVER — INSERT COIN TO CONTINUE</div>
        </div>
      </div>
    </footer>
  );
}
