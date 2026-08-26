"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function HomeMessageBox() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          aria-label="Close message"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Message */}
        <div className="pr-6">
          <h2 className="text-xl font-bold text-[#0B1F33]">
            Welcome to UnityOne Health Centre
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Thank you for visiting us. Book your consultation with our
            experienced doctors today.
          </p>
        </div>

        {/* Action */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="mt-6 w-full rounded-xl bg-[#05EDD6] px-4 py-3 font-bold text-[#0B1F33] transition hover:bg-[#1DA851] hover:text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
