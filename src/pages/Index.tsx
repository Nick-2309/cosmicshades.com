import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ActivitySection } from "@/components/ActivitySection";
import { ServicesSection } from "@/components/ServicesSection";
import { OperateSection } from "@/components/OperateSection";
import { ClientsSection } from "@/components/ClientsSection";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";

const MODALS: Record<string, { title: string; content: React.ReactNode }> = {
  "modal-about": {
    title: "About Us",
    content: (
      <p className="text-base leading-relaxed text-steel">
        Cosmic Shades Ltd, headquartered in London, UK, is a full-service supplier of industrial-grade equipment, institutional furnishings, commercial vehicles, and medical technologies. We cater to government entities, industrial companies, laboratories, and educational institutions across the UK and Central Asia, delivering tailored, end-to-end B2B solutions.
      </p>
    ),
  },
  "modal-services": {
    title: "What We Do",
    content: (
      <ul className="flex flex-col gap-3">
        {[
          { bold: "Veterinary & Medical Equipment", text: "Anesthesia machines, diagnostic devices, protective clothing." },
          { bold: "Technical Furniture & Lab Infrastructure", text: "Lab tables, workbenches, cabinets, shelving." },
          { bold: "Transport & Utility Vehicles", text: "Trucks, crane vehicles, sewage trucks." },
          { bold: "Educational & Office Furnishings", text: "Student furniture, conference sets, blackboards." },
        ].map((item, i) => (
          <li key={i} className="text-sm leading-relaxed p-3.5 bg-bg3 border-l-[3px] border-l-accent rounded-sm text-foreground">
            <strong>{item.bold}</strong> — {item.text}
          </li>
        ))}
      </ul>
    ),
  },
  "modal-clients": {
    title: "Selected Clients",
    content: (
      <ul className="flex flex-col gap-3">
        {["Premier United LLC", "JV Ifoda Agro Kimyo Himoya", "Sunshine Industrial Technology LLC"].map((c, i) => (
          <li key={i} className="text-sm leading-relaxed p-3.5 bg-bg3 border-l-[3px] border-l-accent rounded-sm text-foreground">{c}</li>
        ))}
      </ul>
    ),
  },
  "modal-contact": {
    title: "Contact Us",
    content: (
      <ul className="flex flex-col gap-4">
        <li className="flex gap-3 items-center p-3.5 bg-bg3 rounded-sm border-l-[3px] border-l-accent">
          <span className="font-display text-base tracking-wider text-primary-light min-w-[80px]">Email:</span>
          <a href="mailto:cosmicshades@outlook.com" className="text-foreground hover:text-primary-light transition-colors">cosmicshades@outlook.com</a>
        </li>
        <li className="flex gap-3 items-center p-3.5 bg-bg3 rounded-sm border-l-[3px] border-l-accent">
          <span className="font-display text-base tracking-wider text-primary-light min-w-[80px]">Address:</span>
          <span className="text-foreground">London, 20 Wenlock Road</span>
        </li>
        <li className="flex gap-3 items-center p-3.5 bg-bg3 rounded-sm border-l-[3px] border-l-accent">
          <span className="font-display text-base tracking-wider text-primary-light min-w-[80px]">Phone:</span>
          <a href="tel:+447429990817" className="text-foreground hover:text-primary-light transition-colors">+447429990817</a>
        </li>
      </ul>
    ),
  },
};

const Index = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen">
      <Navbar onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <ActivitySection />
      <ServicesSection />
      <OperateSection />
      <ClientsSection />
      <Footer />

      {activeModal && MODALS[activeModal] && (
        <Modal
          title={MODALS[activeModal].title}
          onClose={closeModal}
        >
          {MODALS[activeModal].content}
        </Modal>
      )}
    </div>
  );
};

export default Index;
