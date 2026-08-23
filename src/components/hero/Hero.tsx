"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, Award, ArrowRight, Hospital } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#ECFFFC]/40 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFFFC] border border-[#CCFBF1]">
              <span className="w-2 h-2 rounded-full bg-[#05EDD6] animate-pulse" />
              <span className="text-xs font-bold tracking-wide uppercase text-[#008F86]">
                NEW HOSPITAL • NOW OPEN
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1F33] leading-[1.15]">
              Healing Hands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFAF] to-[#008F86]">
              Caring Hearts
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#334155] max-w-2xl font-normal leading-relaxed">
              Modern medical care delivered with expertise, multispeciality polyclinic with day care facilities.

            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          

<Button
  onClick={() => {
    document.getElementById("appointment")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="bg-[#05EDD6] hover:bg-[#00BFAF] text-[#0B1F33] font-bold text-base px-8 py-6 rounded-xl shadow-sm transition-all"
>
  <span>Book an Appointment</span>
  <ArrowRight className="w-5 h-5" />
</Button>

<Button
  variant="outline"
  onClick={() => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="border-[#E2E8F0] text-[#0B1F33] hover:bg-slate-50 font-semibold text-base px-8 py-6 rounded-xl"
>
  Explore Our Services
</Button>
              
            </div>

            {/* Key Value Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
              
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#00BFAF]" />
                <span className="text-sm font-semibold text-[#0B1F33]">Expert Specialists</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#00BFAF]" />
                <span className="text-sm font-semibold text-[#0B1F33]">Modern Facilities</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Hospital className="w-5 h-5 text-[#00BFAF]" />
                <span className="text-sm font-semibold text-[#0B1F33]">Modern Infrastructure</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image & Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background Accent Graphics */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#05EDD6]/20 to-[#00BFAF]/10 rounded-[2rem] blur-xl -z-10" />

            <div className="relative rounded-[1.75rem] overflow-hidden border border-slate-100 shadow-xl bg-white">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                alt="UnityOne Health Centre modern interior with healthcare professionals"
                width={800}
                height={900}
                className="w-full h-[480px] object-cover"
                priority
              />

              {/* Floating Emergency Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#DC2626] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F33]">Care delivered with expertise</h4>
                  <p className="text-xs text-[#64748B]">Always prepared when urgent assistance is needed.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}