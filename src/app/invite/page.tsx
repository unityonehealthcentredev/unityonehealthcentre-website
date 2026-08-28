"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  CalendarPlus,
  Navigation,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  Heart,
  Flower2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InaugurationEInvitePage() {
  const [copied, setCopied] = useState(false);

  // 30 ઓગસ્ટ 2026, સવારે 10:00 વાગ્યે
  const eventDate = new Date("2026-08-30T10:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // Share invitation
  const handleShare = async () => {
    const inviteUrl =
      typeof window !== "undefined" ? window.location.href : "";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "યુનિટીવન હેલ્થ સેન્ટર — ભવ્ય ઉદ્ઘાટન સમારોહ",
          text:
            "ડૉ. સોહિલ મેમન દ્વારા યુનિટીવન હેલ્થ સેન્ટરના ભવ્ય ઉદ્ઘાટન સમારોહમાં આપનું હાર્દિક સ્વાગત છે.",
          url: inviteUrl,
        });
      } catch {
        // User cancelled the share dialog
      }
    } else {
      try {
        await navigator.clipboard.writeText(inviteUrl);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2500);
      } catch {
        // Clipboard not available
      }
    }
  };

  // Google Calendar
  const googleCalendarUrl =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=યુનિટીવન+હેલ્થ+સેન્ટર+-+ભવ્ય+ઉદ્ઘાટન+સમારોહ` +
    `&dates=20260830T043000Z/20260830T093000Z` +
    `&details=ડૉ.+સોહિલ+મેમન+દ્વારા+યુનિટીવન+હેલ્થ+સેન્ટરના+ભવ્ય+ઉદ્ઘાટન+સમારોહમાં+આપનું+હાર્દિક+સ્વાગત+છે.` +
    `&location=UnityOne+Health+Centre,+Opp+Sahar+Party+Plot`;

  const countdownItems = [
    {
      key: "days",
      label: "દિવસ",
    },
    {
      key: "hours",
      label: "કલાક",
    },
    {
      key: "minutes",
      label: "મિનિટ",
    },
    {
      key: "seconds",
      label: "સેકન્ડ",
    },
  ] as const;

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#031F2C] text-white">
      {/* ========================================================= */}
      {/* ANIMATED BACKGROUND */}
      {/* ========================================================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#00E5D0]/20 blur-[130px]"
        />

        {/* Bottom Right Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#008F86]/20 blur-[120px]"
        />

        {/* Left Glow */}
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -left-40 w-[450px] h-[450px] rounded-full bg-[#00BFAF]/10 blur-[120px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#5FFFF0]"
            style={{
              left: `${(i * 29) % 100}%`,
              top: `${(i * 47) % 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.8, 0.15],
              scale: [0.6, 1.4, 0.6],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Large Floating Sparkles */}
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute top-20 left-[8%] text-[#5FFFF0]/20"
        >
          <Sparkles className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, 20, 0],
          }}
          transition={{
            rotate: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-24 right-[8%] text-[#5FFFF0]/20"
        >
          <Flower2 className="w-20 h-20" />
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTENT */}
      {/* ========================================================= */}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-10 sm:py-16">
        <div className="w-full max-w-2xl">

          {/* ===================================================== */}
          {/* TOP DECORATION */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-5"
          >
            <div className="flex items-center gap-3 text-[#62FFF0]">
              <Flower2 className="w-5 h-5" />

              <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#62FFF0]" />

              <Sparkles className="w-5 h-5" />

              <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#62FFF0]" />

              <Flower2 className="w-5 h-5" />
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* CARD */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Animated Card Glow */}
            <motion.div
              animate={{
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-[2px] rounded-[38px] bg-gradient-to-r from-[#00E5D0] via-[#5FFFF0] to-[#008F86] blur-md"
            />

            {/* Gradient Border */}
            <div className="relative rounded-[36px] p-[2px] bg-gradient-to-br from-[#5FFFF0]/70 via-[#00BFAF]/30 to-[#007A73]/70">

              {/* White Card */}
              <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-b from-[#F8FFFE] via-white to-[#ECFFFC] text-[#0B1F33] shadow-[0_30px_100px_rgba(0,229,208,0.18)]">

                {/* Inner Frame */}
                <div className="absolute inset-3 sm:inset-5 rounded-[27px] border border-[#00BFAF]/20 pointer-events-none" />

                <div className="absolute inset-5 sm:inset-7 rounded-[23px] border border-[#00BFAF]/10 pointer-events-none" />

                {/* Corner Stars */}
                <div className="absolute top-7 left-7 text-[#00A99D]/40">
                  <Star className="w-4 h-4 fill-current" />
                </div>

                <div className="absolute top-7 right-7 text-[#00A99D]/40">
                  <Star className="w-4 h-4 fill-current" />
                </div>

                <div className="absolute bottom-7 left-7 text-[#00A99D]/40">
                  <Star className="w-4 h-4 fill-current" />
                </div>

                <div className="absolute bottom-7 right-7 text-[#00A99D]/40">
                  <Star className="w-4 h-4 fill-current" />
                </div>

                {/* Card Content */}
                <div className="relative px-7 sm:px-12 py-9 sm:py-12">

                  {/* ================================================= */}
                  {/* LOGO */}
                  {/* ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.25,
                      duration: 0.7,
                    }}
                    className="flex justify-center"
                  >
                    <motion.div
                      animate={{
                        filter: [
                          "drop-shadow(0 0 0px rgba(0,191,175,0))",
                          "drop-shadow(0 0 18px rgba(0,191,175,0.35))",
                          "drop-shadow(0 0 0px rgba(0,191,175,0))",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="relative w-60 sm:w-80 h-24 sm:h-28"
                    >
                      <Image
                        src="/unityonelogo.png"
                        alt="યુનિટીવન હેલ્થ સેન્ટર"
                        fill
                        priority
                        className="object-contain"
                    
                      />
                    </motion.div>
                  </motion.div>

                  {/* ================================================= */}
                  {/* BADGE */}
                  {/* ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                    className="flex justify-center mt-4"
                  >
                    <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-[#ECFFFC] border border-[#00BFAF]/30 text-[#008F86] shadow-sm">

                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>

                      <span className="text-xs sm:text-sm font-bold tracking-wide">
                        ભવ્ય ઉદ્ઘાટન સમારોહ
                      </span>

                      <motion.div
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>

                    </div>
                  </motion.div>

                  {/* ================================================= */}
                  {/* HERO */}
                  {/* ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    className="text-center mt-7"
                  >
                    <h1 className="text-3xl sm:text-5xl font-serif font-bold leading-tight bg-gradient-to-r from-[#063B45] via-[#008F86] to-[#063B45] bg-clip-text text-transparent">
                      આપને હાર્દિક આમંત્રણ
                    </h1>
                    <h2>INAUGURATION CEREMONY</h2>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00BFAF]" />

                      <Heart className="w-4 h-4 text-[#00A99D] fill-[#00A99D]" />

                      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00BFAF]" />
                    </div>

                    <p className="mt-5 max-w-lg mx-auto text-sm sm:text-base leading-7 text-slate-600">
                      આનંદ અને કૃતજ્ઞતાની લાગણી સાથે,
                      અમારી નવી મલ્ટિસ્પેશિયાલિટી પોલીક્લિનિકના
                      ભવ્ય ઉદ્ઘાટન પ્રસંગે આપની શુભ ઉપસ્થિતિ
                      અને આશીર્વાદ માટે હાર્દિક આમંત્રણ.
                    </p>
                  </motion.div>

                  {/* ================================================= */}
                  {/* HOST */}
                  {/* ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.65,
                    }}
                    className="relative my-8 rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-[#00BFAF]/50 to-transparent"
                  >
                    <div className="rounded-3xl bg-[#F0FDFA]/80 px-5 py-5 text-center">

                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#64748B]">
                        હાર્દિક આમંત્રણ
                      </span>

                      <div className="flex items-center justify-center gap-2 mt-2">
                        <Stethoscope className="w-5 h-5 text-[#008F86]" />

                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F33]">
                          ડૉ. સોહિલ મેમન
                        </h2>
                      </div>

                      <p className="text-xs sm:text-sm text-[#008F86] font-semibold mt-1">
                        સ્થાપક અને ટીમ — યુનિટીવન હેલ્થ સેન્ટર
                      </p>

                    </div>
                  </motion.div>

                  {/* ================================================= */}
                  {/* EVENT DETAILS */}
                  {/* ================================================= */}

                  <div className="space-y-4">

                    {/* DATE & TIME */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.75,
                      }}
                      className="rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-[#ECFFFC] to-white border border-[#B8F5EC] shadow-sm"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* Date */}
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                            }}
                            className="w-12 h-12 rounded-2xl bg-white border border-[#7DEFE3] shadow-sm flex items-center justify-center text-[#008F86]"
                          >
                            <Calendar className="w-5 h-5" />
                          </motion.div>

                          <div>
                            <span className="text-[10px] font-bold tracking-widest text-[#008F86]">
                              તારીખ
                            </span>

                            <p className="text-sm sm:text-base font-bold mt-1">
                              રવિવાર, ૩૦ ઑગસ્ટ ૨૦૨૬
                            </p>
                          </div>
                        </div>

                        {/* Time */}
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{
                              scale: 1.1,
                              rotate: -5,
                            }}
                            className="w-12 h-12 rounded-2xl bg-white border border-[#7DEFE3] shadow-sm flex items-center justify-center text-[#008F86]"
                          >
                            <Clock className="w-5 h-5" />
                          </motion.div>

                          <div>
                            <span className="text-[10px] font-bold tracking-widest text-[#008F86]">
                              સમય
                            </span>

                            <p className="text-sm sm:text-base font-bold mt-1">
                              સવારે ૧૦:૦૦ વાગ્યાથી
                            </p>
                          </div>
                        </div>

                      </div>
                    </motion.div>

                    {/* VENUE */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.85,
                      }}
                      whileHover={{
                        y: -2,
                      }}
                      className="rounded-3xl p-4 sm:p-5 bg-white border border-slate-200 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#ECFFFC] border border-[#B8F5EC] flex items-center justify-center text-[#008F86] shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>

                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-[#008F86]">
                          સ્થળ
                        </span>

                        <h3 className="text-sm sm:text-base font-bold mt-1">
                          યુનિટીવન હેલ્થ સેન્ટર
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 mt-1">
                          સહાર પાર્ટી પ્લોટની સામે , મરિડા ભાગોળ, નડિયાદ
                        </p>
                      </div>
                    </motion.div>

                  </div>

                  {/* ================================================= */}
                  {/* COUNTDOWN */}
                  {/* ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.95,
                    }}
                    className="mt-7 rounded-3xl p-5 bg-gradient-to-br from-[#063B45] via-[#07565D] to-[#008F86] text-white shadow-xl shadow-[#008F86]/20 relative overflow-hidden"
                  >
                    {/* Shine Animation */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    />

                    <div className="relative z-10">

                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="w-4 h-4 text-[#7FFFF3]" />

                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#B9FFF8]">
                          શુભ પ્રસંગ શરૂ થવામાં
                        </span>

                        <Sparkles className="w-4 h-4 text-[#7FFFF3]" />
                      </div>

                      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto">

                        {countdownItems.map(({ key, label }) => {
                          const value =
                            timeLeft[key as keyof typeof timeLeft];

                          return (
                            <motion.div
                              key={key}
                              whileHover={{
                                scale: 1.05,
                              }}
                              className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm py-3"
                            >
                              <AnimatePresence mode="popLayout">
                                <motion.span
                                  key={value}
                                  initial={{
                                    y: -8,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    y: 0,
                                    opacity: 1,
                                  }}
                                  exit={{
                                    y: 8,
                                    opacity: 0,
                                  }}
                                  transition={{
                                    duration: 0.2,
                                  }}
                                  className="block text-xl sm:text-2xl font-bold"
                                >
                                  {String(value).padStart(2, "0")}
                                </motion.span>
                              </AnimatePresence>

                              <span className="text-[9px] sm:text-[10px] text-[#B9FFF8]">
                                {label}
                              </span>
                            </motion.div>
                          );
                        })}

                      </div>
                    </div>
                  </motion.div>

                  {/* ================================================= */}
                  {/* CLOSING MESSAGE */}
                  {/* ================================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1.1,
                    }}
                    className="text-center mt-7"
                  >
                    <p className="text-sm sm:text-base font-serif italic text-slate-600 leading-7">
                      “આપની અમૂલ્ય ઉપસ્થિતિ અને શુભ આશીર્વાદ
                      આ પ્રસંગને અમારા માટે વધુ યાદગાર બનાવશે.”
                    </p>

                    <div className="flex justify-center items-center gap-2 mt-3 text-xs font-semibold text-[#008F86]">
                      <HeartHandshake className="w-4 h-4" />

                      <span>
                        આપનું સ્વાગત કરવા અમે આતુર છીએ!
                      </span>
                    </div>
                  </motion.div>

                  {/* ================================================= */}
                  {/* ACTION BUTTONS */}
                  {/* ================================================= */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-slate-100">

                    {/* Directions */}
                    <motion.a
                      whileHover={{
                        scale: 1.03,
                        boxShadow:
                          "0 12px 30px rgba(0,143,134,0.25)",
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      href="https://maps.app.goo.gl/etetGuPWbNKxKywe9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008F86] to-[#00BFAF] text-white py-3.5 px-4 rounded-2xl text-xs font-bold shadow-lg shadow-[#008F86]/20"
                    >
                      <Navigation className="w-4 h-4" />

                      <span>
                        સ્થળ સુધી પહોંચવાનો માર્ગ
                      </span>
                    </motion.a>

                    {/* Calendar */}
                    <motion.a
                      whileHover={{
                        scale: 1.03,
                        boxShadow:
                          "0 10px 25px rgba(0,0,0,0.08)",
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      href={googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white text-[#0B1F33] border border-slate-200 py-3.5 px-4 rounded-2xl text-xs font-bold"
                    >
                      <CalendarPlus className="w-4 h-4 text-[#008F86]" />

                      <span>
                        કેલેન્ડરમાં ઉમેરો
                      </span>
                    </motion.a>
                  </div>

                  {/* ================================================= */}
                  {/* SHARE BUTTON */}
                  {/* ================================================= */}

                  <motion.div
                    whileHover={{
                      scale: 1.01,
                    }}
                    className="mt-3"
                  >
                    <Button
                      onClick={handleShare}
                      variant="outline"
                      className="w-full h-12 rounded-2xl border-[#7DEFE3] bg-[#ECFFFC]/70 hover:bg-[#ECFFFC] text-[#0B1F33] text-xs font-bold"
                    >
                      <Share2 className="w-4 h-4 mr-2 text-[#008F86]" />

                      <span>
                        {copied
                          ? "આમંત્રણની લિંક કૉપી થઈ ગઈ!"
                          : "આમંત્રણ શેર કરો"}
                      </span>
                    </Button>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* FOOTER */}
          {/* ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
            }}
            className="text-center mt-7"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#72FFF2] hover:text-white transition-colors"
            >
              ← યુનિટીવન હેલ્થ સેન્ટરની વેબસાઇટ પર જાઓ
            </Link>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
