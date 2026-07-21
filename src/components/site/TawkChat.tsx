import { useEffect } from "react";

export function TawkChat() {
  useEffect(() => {
    // Ensure client-side execution
    if (typeof window === "undefined") return;

    // Prevent duplicate injections
    const scriptSrc = "https://embed.tawk.to/6a5f1f24642ea11d490f179e/1ju1p3a9k";
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      return;
    }

    // Initialize global variables
    const win = window as any;
    win.Tawk_API = win.Tawk_API || {};
    win.Tawk_LoadStart = new Date();

    // Inject script based on official instructions
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = scriptSrc;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.body.appendChild(s1);
    }
  }, []);

  return null;
}
