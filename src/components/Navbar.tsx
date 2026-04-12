import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenModal: (id: string) => void;
}

const NAV_ITEMS = [
  { label: "About", modal: "modal-about" },
  { label: "Services", modal: "modal-services" },
  { label: "Clients", modal: "modal-clients" },
  { label: "Contact", modal: "modal-contact" },
];

export const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[900px] flex items-center gap-3">
      {/* Separate Logo */}
      <div className="hidden md:flex w-11 h-11 rounded-full bg-card border border-border shadow-lg shadow-black/30 flex items-center justify-center shrink-0">
        <span className="font-display text-sm text-primary-foreground leading-none tracking-wider">CS</span>
      </div>

      {/* Navbar pill */}
      <div className="flex-1 bg-card rounded-full px-5 py-2.5 flex items-center justify-between border border-border shadow-lg shadow-black/30">
        {/* Center nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.modal}>
              <button
                onClick={() => onOpenModal(item.modal)}
                className="font-body text-sm tracking-wide text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side link */}
        <a
          href="https://cosmicshades.com"
          target="_blank"
          rel="noopener noreferrer"
          className="md:block font-body text-sm text-foreground hover:text-accent transition-colors shrink-0"
        >
          cosmicshades.com
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5 text-primary-foreground" /> : <Menu className="w-5 h-5 text-primary-foreground" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 md:hidden bg-card rounded-2xl border border-border shadow-lg shadow-black/30 overflow-hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.modal}
              onClick={() => { onOpenModal(item.modal); setMenuOpen(false); }}
              className="block w-full text-left px-5 py-3 font-body text-sm tracking-wide text-foreground border-b border-border last:border-b-0 hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
