import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

// export const MOCK_DOCTORS = [
//   {
//     slug: "dr-sohil-memon",
//     name: "Dr. Sohil Memon",
//     qualification: "MBBS, DTMH",
//     specialty: "Senior Consultant — Physician",
//     experience: "3+ Years Experience",
//     image: "/drsohel.jpeg",
//     timings: [ { days: "Monday – Saturday", time: "09:00 AM – 01:00 PM" }, { days: "Monday – Saturday", time: "05:00 PM – 08:00 PM" }, ],
//   },
//   {
//     slug: "dr-chinmay-gandhi",
//     name: "Dr. Chinmay Gandhi",
//     qualification: "MS (Orthopedics)",
//     specialty: "Consultant — Joint Replacement & Trauma",
//     experience: "12+ Years Experience",
//     image: "/drchinmayg.jpeg",
//     timings: [
//       { days: "Monday – Wednesday – Friday", time: "11:00 AM – 05:00 PM" },
//     ],
//   },
//   {
//     slug: "dr-yash-patel",
//     name: "Dr. Yash Patel",
//     qualification: "MS (ENT)",
//     specialty: "Senior Consultant — ENT",
//     experience: "10+ Years Experience",
//     image: "/dryash.jpeg",
//     timings: [
//       { days: "Tuesday – Saturday", time: "03:00 PM – 04:00 PM" },
//     ],
//   },
// ];


export const MOCK_DOCTORS = [
  {
    slug: "dr-sohil-memon",
    name: "Dr. Sohil Memon",
    qualification: "MBBS, DTMH",
    specialty: "Senior Consultant — Physician",
    experience: "3+ Years Experience",
    image: "/drsohel.jpeg",
    timings: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], time: "09:00 AM – 01:00 PM" },
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], time: "05:00 PM – 08:00 PM" },
    ],
    description:"Dedicated clinical consultant with practical expertise in diagnosing and managing complex medical conditions."

  },
  {
    slug: "dr-chinmay-gandhi",
    name: "Dr. Chinmay Gandhi",
    qualification: "MS (Orthopedics)",
    specialty: "Consultant — Joint Replacement & Trauma",
    experience: "1+ Year Experience",
    image: "/drchinmayg.jpeg",
    timings: [
      { days: ["Monday", "Wednesday", "Friday"], time: "11:00 AM – 05:00 PM" },
    ],
        description:"Orthopedic consultant specializing in joint replacement and trauma care, with an MS in Orthopedics, dedicated to restoring mobility and improving quality of life."

  },
  {
    slug: "dr-yash-patel",
    name: "Dr. Yash Patel",
    qualification: "MS (ENT)",
    specialty: "Senior Consultant — ENT",
    experience: "1+ Year Experience",
    image: "/dryash.jpeg",
    timings: [
      { days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], time: "03:00 PM – 04:00 PM" },
    ],
    description:"Senior ENT Consultant with an MS in ENT, specializing in comprehensive ear, nose, and throat care with a focus on accurate diagnosis and patient-centered treatment.."
  },
];

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
              MEET OUR SPECIALISTS
            </span>
            <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
              Experienced Professionals. Personalized Care.
            </h2>
          </div>
          <Button  variant="outline" className="border-slate-200 text-[#0B1F33] hover:bg-slate-50">
            <Link href="#appointment" className="flex items-center gap-2">
              {/* <span>View All Doctors</span> */}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_DOCTORS.map((doc) => (
            <div
              key={doc.slug}
              className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#00BFAF] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover  object-[center_20%] group-hover:scale-120 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  {/* <span className="text-xs font-semibold text-[#008F86] uppercase">{doc.experience}</span> */}
                  <h3 className="text-xl font-bold text-[#0B1F33]">{doc.name}</h3>
                  <p className="text-xs font-medium text-slate-500">{doc.qualification}</p>
                  <p className="text-sm font-semibold text-[#334155]">{doc.specialty}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <Button
                  
                  variant="outline"
                  className="w-full border-slate-200 hover:bg-white text-[#0B1F33] text-xs"
                >
                  <Link href={`/doctors/${doc.slug}`}>View Profile</Link>
                </Button>
                <Button
                  
                  className="w-full bg-[#05EDD6] hover:bg-[#00BFAF] text-[#0B1F33] font-semibold text-xs"
                >
                  <Link href="#appointment" className="flex items-center justify-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}