import { WhatsAppIcon } from "../icons/WhatsApp";

const WHATSAPP_NUMBER = "2348091167852";

export const WhatsAppBubble = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-150 hover:scale-105"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
};
