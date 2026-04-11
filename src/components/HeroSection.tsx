import { InteractiveGlobe } from "@/components/ui/interactive-globe";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { GlowCard } from "@/components/ui/spotlight-card";

interface HeroSectionProps {
  onOpenModal: (id: string) => void;
}

export const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-28">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

      <GlowCard className="relative z-10 max-w-[1200px] w-full p-8 md:p-16 lg:p-20">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-xs text-accent mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              All systems operational
            </div>

            <h1 className="mb-4 whitespace-nowrap">
              <AnimatedText
                text="Cosmic Shades"
                textClassName="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider leading-none text-primary-foreground"
                underlineClassName="text-accent h-4"
                underlineDuration={2}
              />
            </h1>

            <p className="mt-8 text-steel text-lg leading-relaxed max-w-lg">
              Experts in international tenders, we provide guarantee and reliability for your success! Drag the globe to explore.
            </p>

            <button
              onClick={() => onOpenModal("modal-contact")}
              className="mt-10 inline-block px-12 py-4 bg-accent text-background font-display text-xl tracking-[0.12em] rounded-full transition-all hover:brightness-110 hover:-translate-y-[2px] shadow-[0_4px_20px_rgba(0,180,255,0.3)]"
            >
              Contact Us
            </button>
          </div>

          {/* Right — Globe */}
          <div className="w-full lg:w-[480px] h-[400px] lg:h-[480px] flex-shrink-0">
            <InteractiveGlobe className="w-full h-full" />
          </div>
        </div>
      </GlowCard>
    </header>
  );
};
