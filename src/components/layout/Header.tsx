"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HOSPITAL_INFO, NAVIGATION_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-gradient-to-r from-[#008F86] via-[#008F86] to-[#05EDD6] shadow-md py-3 border-b border-white/10"
      : "bg-gradient-to-r from-[#008F86] via-[#008F86] to-[#05EDD6] py-5"
          }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between">

      {/* Logo */}
      <Link
        href="/"
        // className="flex items-center group transition-transform hover:scale-[1.02]"
          className="text-sm font-medium text-white/95 hover:text-[#0B1F33] transition-colors"
      >
        <Image
          src="/unityonelogo-rmbg.png"
          alt="UnityOne Health Centre"
          width={200}
          height={60}
          priority
          className="h-12 w-auto object-contain rounded-lg"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {NAVIGATION_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-white/95 hover:text-white-300 hover:underline underline-offset-4 transition-colors"

          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Call-to-Action Buttons */}
      <div className="hidden lg:flex items-center gap-4">

        {/* Emergency */}
        <a
          href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
          className="
            flex items-center gap-2
            text-xs font-bold
            text-black
            bg-white/80
            hover:bg-white
            px-3 py-2
            rounded-lg
            transition-colors
            border border-white/50
          "
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>
            Reach Us: {HOSPITAL_INFO.emergencyPhone}
          </span>
        </a>

        {/* Book Appointment */}
        <Button
          
          className="
            bg-[#0B1F33]
            hover:bg-[#163B5A]
            text-white
            font-semibold
            px-5 py-2.5
            rounded-xl
            shadow-sm
            transition-all
          "
        >
          <Link href="#appointment">
            Book Appointment
          </Link>
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="
          lg:hidden
          p-2
          rounded-lg
          text-[#0B1F33]
          hover:bg-white/30
          focus:outline-none
        "
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
    </div>
  </div>

  {/* Mobile Drawer */}
  {mobileMenuOpen && (
    <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4">
      {NAVIGATION_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="
            block
            text-base
            font-medium
            text-[#0B1F33]
            hover:text-[#008F86]
            py-1
          "
        >
          {link.name}
        </Link>
      ))}

      <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">

        <a
          href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
          className="
            flex items-center justify-center gap-2
            text-sm font-bold
            text-[#DC2626]
            bg-red-50
            py-2.5
            rounded-xl
            border border-red-100
          "
        >
          <Phone className="w-4 h-4" />
          <span>Emergency Call</span>
        </a>

        <Button
          
          className="
            w-full
            bg-[#05EDD6]
            hover:bg-[#00BFAF]
            text-[#0B1F33]
            font-semibold
            py-3
            rounded-xl
          "
        >
          <Link
            href="#appointment"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </Button>

      </div>
    </div>
  )}
</header>
    // <header
    //   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     isScrolled
    //       ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100"
    //       : "bg-white py-5"
    //   }`}
    // >
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between">
    //       {/* Logo */}
    //       <Link
    //         href="/"
    //         className="flex items-center group transition-transform hover:scale-[1.02]"
    //       >
    //         <Image
    //           src="/unityonelogo.png"
    //           alt="UnityOne Health Centre"
    //           width={200}
    //           height={60}
    //           priority
    //           className="h-12 w-auto object-contain rounded-lg"
    //         />
    //       </Link>

    //       {/* Desktop Navigation */}
    //       <nav className="hidden lg:flex items-center gap-8">
    //         {NAVIGATION_LINKS.map((link) => (
    //           <Link
    //             key={link.name}
    //             href={link.href}
    //             className="
    //               text-sm 
    //               font-medium 
    //               text-[#334155] 
    //               hover:text-[#05EDD6] 
    //               transition-colors
    //             "
    //           >
    //             {link.name}
    //           </Link>
    //         ))}
    //       </nav>

    //       {/* Desktop CTA Buttons */}
    //       <div className="hidden lg:flex items-center gap-4">
    //         {/* Emergency */}
    //         <a
    //           href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
    //           className="
    //             flex items-center gap-2
    //             text-xs font-bold
    //             text-[#DC2626]
    //             bg-red-50
    //             hover:bg-red-100
    //             px-3 py-2
    //             rounded-lg
    //             transition-colors
    //             border border-red-100
    //           "
    //         >
    //           <Phone className="w-3.5 h-3.5 fill-current" />

    //           <span>
    //             Emergency: {HOSPITAL_INFO.emergencyPhone}
    //           </span>
    //         </a>

    //         {/* Book Appointment */}
    //         <Button
    //           className="
    //             bg-[#05EDD6]
    //             hover:bg-[#00BFAF]
    //             text-[#0B1F33]
    //             font-semibold
    //             px-5 py-2.5
    //             rounded-xl
    //             shadow-sm
    //             transition-all
    //           "
    //         >
    //           <Link href="#appointment">
    //             Book Appointment
    //           </Link>
    //         </Button>
    //       </div>

    //       {/* Mobile Menu Toggle */}
    //       <button
    //         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    //         className="
    //           lg:hidden
    //           p-2
    //           rounded-lg
    //           text-[#0B1F33]
    //           hover:text-[#05EDD6]
    //           hover:bg-[#05EDD6]/10
    //           focus:outline-none
    //           transition-colors
    //         "
    //         aria-label="Toggle Menu"
    //       >
    //         {mobileMenuOpen ? (
    //           <X className="w-6 h-6" />
    //         ) : (
    //           <Menu className="w-6 h-6" />
    //         )}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile Drawer Navigation */}
    //   {mobileMenuOpen && (
    //     <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4">
    //       {NAVIGATION_LINKS.map((link) => (
    //         <Link
    //           key={link.name}
    //           href={link.href}
    //           onClick={() => setMobileMenuOpen(false)}
    //           className="
    //             block
    //             text-base
    //             font-medium
    //             text-[#0B1F33]
    //             hover:text-[#05EDD6]
    //             py-1
    //             transition-colors
    //           "
    //         >
    //           {link.name}
    //         </Link>
    //       ))}

    //       <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
    //         {/* Mobile Emergency */}
    //         <a
    //           href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
    //           className="
    //             flex items-center justify-center gap-2
    //             text-sm font-bold
    //             text-[#DC2626]
    //             bg-red-50
    //             py-2.5
    //             rounded-xl
    //             border border-red-100
    //           "
    //         >
    //           <Phone className="w-4 h-4" />

    //           <span>Emergency Call</span>
    //         </a>

    //         {/* Mobile Book Appointment */}
    //         <Button
              
    //           className="
    //             w-full
    //             bg-[#05EDD6]
    //             hover:bg-[#00BFAF]
    //             text-[#0B1F33]
    //             font-semibold
    //             py-3
    //             rounded-xl
    //           "
    //         >
    //           <Link
    //             href="#appointment"
    //             onClick={() => setMobileMenuOpen(false)}
    //           >
    //             Book Appointment
    //           </Link>
    //         </Button>
    //       </div>
    //     </div>
    //   )}
    // </header>
  );
}