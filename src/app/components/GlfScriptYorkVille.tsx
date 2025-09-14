"use client";

declare global {
  interface Window {
    Glf?: {
      init: () => void;
    };
  }
}

import Script from "next/script";
import { useEffect } from "react";

export default function GlfYorkVilleButtons() {
  useEffect(() => {
    // Some scripts require re-initialization after DOM renders
    if (window?.Glf?.init) {
      window.Glf.init();
    }
  }, []);

  return (
    <div className="glf-buttons-container text-center">
      <span
        className="glf-button"
        data-glf-cuid="53c546cd-d484-4aec-ac20-a267bc4a0e9c"
        data-glf-ruid="690e455d-2fc2-4511-ad4f-94447e936876"
      >
        See MENU & Order
      </span>

      <Script
        src="https://www.fbgcdn.com/embedder/js/ewm2.js"
        strategy="afterInteractive"
        defer
      />
    </div>
  );
}
