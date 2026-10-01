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
        days: ["Tuesday","Saturday"],
        time: "03:00 PM – 04:00 PM",
      },
    ],
    description:
      "Senior ENT Consultant with an MS in ENT, specializing in comprehensive ear, nose, and throat care with a focus on accurate diagnosis and patient-centered treatment.",
  },
  {
    slug: "dr-bhumika-patel",
    name: "Dr. Bhumika Patel",
    qualification: "M.D. (Psychiatry)",
    specialty: "Psychiatrist",
    experience: "7+ Year Experience",
    image: "/drbhoomika.jpeg",
    timings: [
      {
        days: ["Thursday"],
        time: "03:00 PM – 04:00 PM",
      },
    ],
    description:
    "Psychiatrist specializing in the assessment and treatment of mental health conditions, with a patient-centered approach focused on emotional well-being, behavioral health, and personalized care.",
  },
  {
    slug: "dr-twinkle-sarvaiya",
    name: "Dr. Twinkle Sarvaiya",
    qualification: "MD (Dermatology)",
    specialty: "Dermatologist — Skincare",
    experience: "1+ Year Experience",
    image: "/drtwinkles.jpeg",
    timings: [
      {
        days: ["Saturday"],
        time: "01:00 PM – 02:00 PM",
      },
    ],
    description:
      "Senior ENT Consultant with an MS in ENT, specializing in comprehensive ear, nose, and throat care with a focus on accurate diagnosis and patient-centered treatment.",
  },
  {
    slug: "dr-shreyansh-patel",
    name: "Dr. Shreyansh Patel",
    qualification: "MD,DM (Medical Oncology)",
    specialty: "Onco Physician - Cancer Treatment",
    experience: "1+ Year Experience",
    image: "/drshreyansh.jpeg",
    timings: [
      {
        days: ["Saturday"],
        time: "02:00 PM – 04:00 PM",
      },
    ],
    description:
    "Medical Oncologist specializing in cancer care, including the evaluation and management of cancer patients with a focus on personalized treatment planning and supportive care.",
  },
  {
    slug: "dr-mehul-shah",
    name: "Dr. Mehul Shah",
    qualification: "MS (Ophthalmology)",
    specialty: "Ophthalmologist - Eye Treatment",
    experience: "1+ Year Experience",
    image: "/drmehul.jpeg",
    timings: [
      {
        days: ["Wednesday"],
        time: "03:00 PM – 04:00 PM",
      },
    ],
    description:
    "Ophthalmologist specializing in comprehensive eye care, including the diagnosis and treatment of common eye conditions, with a focus on maintaining and improving patients' vision and eye health.",
  },
  {
    slug: "dr-saalim-kadiyawala",
    name: "Dr. Saalim Kadiyawala",
    qualification: "MD (Pediatric)",
    specialty: "Pediatrician - Child Care",
    experience: "3+ Year Experience",
    image: "/drsaalim.jpg",
    timings: [
      {
        days: ["Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"],
        time: "09:30 AM – 11:00 AM",
      },
    ],
    description:
"Pediatrician specializing in comprehensive child healthcare, including the diagnosis and treatment of common childhood illnesses, with a focus on supporting healthy growth, development, and overall well-being.",  }
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
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"

                          // className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-300"
                          className={`${doc.name==="Dr. Mehul Shah" ? "object-contain" : "object-cover object-[center_20%]"}`}
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
