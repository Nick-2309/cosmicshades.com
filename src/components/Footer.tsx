import { GlowCard } from "@/components/ui/spotlight-card";


export const Footer = () => (
  <footer className="py-20 px-4 text-center border-t-[3px] border-t-accent">
    <GlowCard className="max-w-[1440px] w-full mx-auto px-6 py-12">
      <a href="mailto:cosmicshades@outlook.com" className="font-display text-[22px] tracking-wider text-accent hover:text-primary-foreground transition-colors">
        cosmicshades@outlook.com
      </a>
      <p className="text-[15px] text-steel my-7 tracking-wide">London, 20 Wenlock Road</p>
      <a href="tel:+447429990817" className="font-display text-lg tracking-widest text-steel hover:text-primary-foreground transition-colors">
        +447429990817
      </a>
      <p className="mt-9 text-xs text-muted-foreground tracking-wide">© 2025 Cosmic Shades Ltd. All rights reserved.</p>
    </GlowCard>
  </footer>
);
