import { SectionShell } from "./SectionShell";
import { profileLinks } from "@/lib/profile-links";

export function Contact() {
  return (
    <SectionShell id="contact" label="FINAL BOSS" title="START THE NEXT QUEST" accent="magenta">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="reveal-up bg-card p-6 sm:p-8 pixel-border-magenta">
          <div className="font-pixel text-[10px] text-neon-yellow mb-4">▮ TRANSMISSION</div>
          <h3 className="font-pixel text-base sm:text-xl text-neon-magenta text-shadow-glow-magenta mb-4">
            LET'S BUILD<br />SOMETHING GREAT
          </h3>
          <p className="font-body text-base text-foreground leading-relaxed mb-6">
            Open to back-end roles, freelance missions and collaboration on ambitious systems.
            Reach out — I respond fast.
          </p>
          <div className="font-mono-retro text-xl space-y-2 text-foreground">
            <div><span className="text-neon-cyan">&gt; loc:</span> Brazil — Remote OK</div>
            <div><span className="text-neon-cyan">&gt; status:</span> <span className="text-neon-green">Available</span></div>
            <div><span className="text-neon-cyan">&gt; reply:</span> &lt; 24h</div>
          </div>
        </div>

        <div className="reveal-up grid grid-cols-1 gap-4">
          <ContactCard
            label="EMAIL"
            value="guilhermecella8@gmail.com"
            href={profileLinks.email}
            accent="green"
            icon="✉"
          />
          <ContactCard
            label="LINKEDIN"
            value="/in/guilherme-luiz-cella-b3a41935a/"
            href={profileLinks.linkedin}
            accent="cyan"
            icon="⚡"
          />
          <ContactCard
            label="GITHUB"
            value="github.com/guilherme-luiz-cella"
            href={profileLinks.github}
            accent="yellow"
            icon="◧"
          />
        </div>
      </div>
    </SectionShell>
  );
}

const accentText = {
  green: "text-neon-green text-shadow-glow-green",
  cyan: "text-neon-cyan text-shadow-glow-cyan",
  yellow: "text-neon-yellow text-shadow-glow-yellow",
};
const accentBorder = {
  green: "pixel-border-green",
  cyan: "pixel-border-cyan",
  yellow: "pixel-border-yellow",
};

function ContactCard({
  label, value, href, accent, icon,
}: { label: string; value: string; href: string; accent: keyof typeof accentText; icon: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`bg-card p-5 pixel-hover flex items-center gap-4 ${accentBorder[accent]}`}
    >
      <div className={`font-pixel text-3xl ${accentText[accent]}`}>{icon}</div>
      <div className="flex-1 min-w-0">
        <div className={`font-pixel text-[9px] mb-1 ${accentText[accent]}`}>{label}</div>
        <div className="font-mono-retro text-lg text-foreground truncate">{value}</div>
      </div>
      <div className={`font-pixel text-xs ${accentText[accent]}`}>▶</div>
    </a>
  );
}
