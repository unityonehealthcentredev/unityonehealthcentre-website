"use client";

import { useEffect, useState } from "react";
import { X, Pill } from "lucide-react";

export function PharmacyToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay so it appears after the homepage starts loading
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Hide after 10 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 10500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[9999] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2">
      <div className="relative flex items-center gap-3 rounded-2xl border border-[#05EDD6]/30 bg-white p-4 shadow-2xl">

        {/* Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#05EDD6]/15">
          <Pill className="h-5 w-5 text-[#008F86]" />
        </div>

        {/* Message */}
        <div className="min-w-0 flex-1 pr-5">
          <h3 className="text-sm font-bold text-[#0B1F33]">
            UnityRx Pharmacy
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            તમારી જરૂરી કોઈપણ દવા અમારી હોસ્પિટલ ફાર્મસી
            <span className="font-semibold text-[#008F86]"> UnityRx </span>
            પરથી મેળવો. 
          </p>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-3 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
