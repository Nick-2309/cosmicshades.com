import { GlowCard } from "@/components/ui/spotlight-card";

const CLIENTS = [
  "Premier United LLC",
  "JV Ifoda Agro Kimyo Himoya",
  "Sunshine Industrial Technology LLC",
];

export const ClientsSection = () => (
  <section className="py-24 md:py-28 bg-background text-center border-b border-border">
    <div className="max-w-[1440px] w-full mx-auto px-6">
      <h2 className="section-title text-4xl md:text-[56px]">Selected Clients</h2>
      <div className="mt-10 flex flex-col gap-4">
        {CLIENTS.map((c, i) => (
          <GlowCard key={i} className="p-5 px-10 w-full">
            <div className="relative z-10 text-left">
              <h3 className="font-display text-xl tracking-wider text-foreground">{c}</h3>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>
);
