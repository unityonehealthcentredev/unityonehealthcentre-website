"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const MOCK_DOCTORS = [
  {
    slug: "dr-sohil-memon",
    name: "Dr. Sohil Memon",
    qualification: "MBBS, DTMH",
    specialty: "Senior Consultant — Physician",
    experience: "3+ Years Experience",
    image: "/drsohel.jpeg",
    timings: [
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        time: "09:00 AM – 01:00 PM",
      },
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        time: "05:00 PM – 08:00 PM",
      },
    ],
    description:
      "Dedicated clinical consultant with practical expertise in diagnosing and managing complex medical conditions.",
  },
  {
    slug: "dr-chinmay-gandhi",
    name: "Dr. Chinmay Gandhi",
    qualification: "MS (Orthopedics)",
    specialty: "Consultant — Joint Replacement & Trauma",
    experience: "1+ Year Experience",
    image: "/drchinmayg.jpeg",
    timings: [
      {
        days: ["Monday", "Wednesday", "Friday"],
        time: "11:00 AM – 05:00 PM",
      },
    ],
    description:
      "Orthopedic consultant specializing in joint replacement and trauma care, with an MS in Orthopedics, dedicated to restoring mobility and improving quality of life.",
  },
  {
    slug: "dr-yash-patel",
    name: "Dr. Yash Patel",
    qualification: "MS (ENT)",
    specialty: "Senior Consultant — ENT",
    experience: "1+ Year Experience",
    image: "/dryash.jpeg",
    timings: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        time: "03:00 PM – 04:00 PM",
      },
    ],
    description:
      "Senior ENT Consultant with an MS in ENT, specializing in comprehensive ear, nose, and throat care with a focus on accurate diagnosis and patient-centered treatment.",
  }
];

export function DoctorsSection() {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-center text-center mb-12 gap-4">
          <div>
            <span className="text-xs text-center font-bold uppercase tracking-wider text-[#008F86]">
              MEET OUR SPECIALISTS
            </span>

            <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
              Experienced Professionals. Personalized Care.
            </h2>
          </div>

        </div>

        {/* Carousel */}
        <div className="relative px-12 md:px-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {MOCK_DOCTORS.map((doc) => (
                <CarouselItem
                  key={doc.slug}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#00BFAF] transition-all group flex flex-col justify-between h-full">

                    {/* Doctor Image */}
                    <div>
                      <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Doctor Info */}
                      <div className="p-6 space-y-2">
                        <h3 className="text-xl font-bold text-[#0B1F33]">
                          {doc.name}
                        </h3>

                        <p className="text-xs font-medium text-slate-500">
                          {doc.qualification}
                        </p>

                        <p className="text-sm font-semibold text-[#334155]">
                          {doc.specialty}
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="p-6 pt-0 flex gap-3">
                      <Button
                        variant="outline"
                        className="w-full border-slate-200 hover:bg-white text-[#0B1F33] text-xs"
                      >
                        <Link href={`/doctors/${doc.slug}`}>
                          View Profile / સમય અને દિવસો જાણો
                        </Link>
                      </Button>

                      <Button
                        className="w-full bg-[#05EDD6] hover:bg-[#00BFAF] text-[#0B1F33] font-semibold text-xs"
                      >
                        <Link
                          href="#appointment"
                          className="flex items-center justify-center gap-1"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* LEFT ARROW */}
            <CarouselPrevious
              className="
                -left-2 md:-left-4
                h-12 w-12
                rounded-full
                border-2
                border-[#05EDD6]
                bg-white
                text-[#00BFAF]
                shadow-md
                hover:bg-[#05EDD6]
                hover:text-[#0B1F33]
                hover:border-[#05EDD6]
                transition-all
                z-20
              "
            />

            {/* RIGHT ARROW */}
            <CarouselNext
              className="
                -right-2 md:-right-4
                h-12 w-12
                rounded-full
                border-2
                border-[#05EDD6]
                bg-white
                text-[#00BFAF]
                shadow-md
                hover:bg-[#05EDD6]
                hover:text-[#0B1F33]
                hover:border-[#05EDD6]
                transition-all
                z-20
              "
            />
          </Carousel>
        </div>

      </div>
    </section>
  );
}
