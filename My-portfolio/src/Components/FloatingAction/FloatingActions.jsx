
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

export function FloatingActions() {
  return (
    <div className="fixed right-6 bottom-36 z-50 flex flex-col gap-3">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/2347063392871"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 hover:bg-emerald-400"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Email Button */}
      <a
        href="mailto:Ferdinardemeneka71@gmail.com"
        aria-label="Send an email"
        title="Send an email"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110 hover:bg-cyan-400"
      >
        <FaEnvelope size={20} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+2347063392871"
        aria-label="Call me"
        title="Call me"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-110 hover:bg-indigo-500"
      >
        <FaPhone size={20} />
      </a>

    </div>
  );
}
