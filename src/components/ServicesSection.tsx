import { useState } from "react";
import { Hospital, Wrench, Truck, GraduationCap } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const SERVICES = [
  {
    icon: Hospital,
    title: "Veterinary & Medical Equipment",
    text: "We supply modern equipment tailored to veterinary clinics and medical institutions. Our offerings include:",
    items: [
      "Anesthesia & Diagnostic Equipment",
      "Anesthesia machines (for small and large animals)",
      "Veterinary electrocardiographs",
      "UHF therapy devices",
      "Laser devices for intravenous blood illumination",
      "Handheld metal detectors",
      "Protective Clothing & Consumables",
      "Nitrile gloves",
      "Lab coats (reusable)",
      "Disposable coveralls",
      "Reusable protective overalls with zipper",
      "Disposable laboratory aprons",
      "Protective sleeves",
      "Surgical caps",
      "Shoe covers",
      "Face masks (disposable)",
    ],
  },
  {
    icon: Wrench,
    title: "Technical Furniture & Laboratory Infrastructure",
    text: "Cosmic Shades provides high-quality technical furnishings, workstations, and custom furniture for labs, offices, and institutions:",
    items: [
      "System Tables (PC 1 & 2)",
      "Universal lab tables (700x500 to 1600x800 mm)",
      "Workbenches (standard, metalwork, woodwork)",
      "Mobile tables (various sizes)",
      "Bar tables and round tables",
      "Special table adaptions and arched segments",
      "System cabinet units (various dimensions)",
      "Drawer plan cabinets for drawings",
      "Steel cabinets (with hinged or viewing doors)",
      "Swing door and sliding door cabinets",
      "Lockers (single and bench-type)",
      "Waste bins and recycling bins",
      "Shelving systems, boltless racks, sheet racks",
    ],
  },
  {
    icon: Truck,
    title: "Transport & Utility Vehicles",
    text: "We deliver various commercial and special-purpose vehicles to support industrial, municipal, and emergency services:",
    items: [
      "Company vehicles",
      "Trucks with specialized equipment",
      "Manipulator crane and loading platform",
      "Combined sewage and washing trucks",
      "Emergency repair trucks",
    ],
  },
  {
    icon: GraduationCap,
    title: "Educational & Office Furnishings",
    text: "We support universities, schools, and government institutions with complete furniture packages:",
    items: [
      "Students' tables and chairs",
      "Teachers' desks and chairs",
      "Faculty office desks",
      "Conference and dean's office furniture",
      "Twin blackboards, trapezoid tables",
      "Freestanding washbasins",
      "Workstations for metal and wood construction training",
    ],
  },
];

export const ServicesSection = () => {
  const [openCards, setOpenCards] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpenCards((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="py-24 md:py-28 bg-background text-center">
      <div className="max-w-[1440px] w-full mx-auto px-6">
        <h2 className="section-title text-4xl md:text-[56px]">What We Do</h2>
        <div className="mt-14 flex justify-center items-start flex-wrap gap-6">
          {SERVICES.map((s, i) => {
            const isOpen = openCards.has(i);
            const Icon = s.icon;
            return (
              <GlowCard
                key={i}
                className={`p-8 md:p-10 max-w-[330px] w-full ${isOpen ? "" : "h-[480px]"}`}
              >
                <div className="relative z-10">
                  <Icon
                    className="w-14 h-14 mx-auto text-accent"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 mb-3.5 font-display text-[22px] tracking-wider text-primary-foreground leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-steel text-left">
                    {s.text}
                  </p>
                  <ul
                    className={`text-left list-disc mt-3.5 pl-4 transition-all ${isOpen ? "" : "max-h-[100px] overflow-hidden"}`}
                  >
                    {s.items.map((item, j) => (
                      <li
                        key={j}
                        className="mb-1.5 text-[13px] text-steel leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => toggle(i)}
                    className="mt-5 font-display text-[15px] tracking-widest text-accent hover:text-primary transition-colors"
                  >
                    {isOpen ? "Show less" : "Show more"}
                  </button>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
