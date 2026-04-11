import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, children, onClose }: ModalProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-surface border border-border border-t-[3px] border-t-accent rounded-lg p-12 max-w-[560px] w-[90%] max-h-[85vh] overflow-y-auto shadow-[0_30px_80px_rgba(0,0,0,0.7)] animate-in fade-in slide-in-from-bottom-4 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-steel hover:text-primary-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="font-display text-[32px] tracking-wider mb-6 text-primary-foreground">{title}</h2>
        {children}
      </div>
    </div>
  );
};
