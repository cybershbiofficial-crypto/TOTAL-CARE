export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971563937512"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[99] flex h-[60px] w-[60px] items-center justify-center rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] md:bottom-8 md:right-8"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="/images/whatsapp-logo.svg"
        alt="WhatsApp"
        className="h-[60px] w-[60px] object-contain"
      />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-[70px] top-1/2 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded bg-surface px-4 py-2 text-[13px] font-medium text-foreground opacity-0 shadow-lg transition-all duration-300 border border-line/60 group-hover:translate-x-0 group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
