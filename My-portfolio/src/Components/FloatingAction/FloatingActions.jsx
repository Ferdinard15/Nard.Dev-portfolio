import { MessageCircle, Mail, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    // Increased bottom-20 to bottom-36 so it floats well above the ScrollToTop button
    <div className="fixed right-6 bottom-36 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 hover:bg-emerald-400"
      >
        <MessageCircle size={22} />
      </a>

      {/* Email Button */}
      <a
        href="mailto:your-email@example.com" // Replace with your email
        aria-label="Send an email"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110 hover:bg-cyan-400"
      >
        <Mail size={22} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+YOUR_PHONE_NUMBER" // Replace with your phone number
        aria-label="Call me"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-110 hover:bg-indigo-500"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}