import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPhysicianSchema } from "@/lib/jsonLd";
import { MOCK_DOCTORS } from "@/components/doctors/DoctorsSection";
import { Calendar, GraduationCap, Languages } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Dynamic SEO Metadata Generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = MOCK_DOCTORS.find((d) => d.slug === slug);

  if (!doctor) return {};

  return {
    title: `${doctor.name} - ${doctor.specialty}`,
    description: `Book a consultation with ${doctor.name} (${doctor.qualification}) at UnityOne Health Centre. Specialist in ${doctor.specialty} with ${doctor.experience}.`,
    openGraph: {
      title: `${doctor.name} | Senior Specialist`,
      description: doctor.specialty,
      images: [{ url: doctor.image }],
    },
  };
}

// 2. Page Component
export default async function DoctorProfilePage({ params }: Props) {
  const { slug } = await params;
  const doctor = MOCK_DOCTORS.find((d) => d.slug === slug);

  if (!doctor) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Inject Physician JSON-LD */}
      <JsonLd data={getPhysicianSchema(doctor)} />

      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <div className="relative h-80 w-full rounded-3xl overflow-hidden border border-slate-200">
                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" priority />
              </div>
              <Button className="w-full bg-[#05EDD6] text-[#0B1F33] font-bold py-6 rounded-xl">
                <Link href="/#appointment" className="flex items-center">
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </Link>
              </Button>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {/* <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">{doctor.experience}</span> */}
              <h1 className="text-3xl font-bold text-[#0B1F33]">{doctor.name}</h1>
              <p className="text-sm font-semibold text-[#00BFAF]">{doctor.specialty}</p>
              
              <div className="border-y border-slate-100 py-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold">Qualification</h4>
                  <p className="text-sm font-bold text-[#0B1F33]">{doctor.qualification}</p>
                </div>
              </div>

               <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0B1F33]">About the Doctor</h3>
                 <p className="text-sm text-slate-600 leading-relaxed">
                  {doctor.description}
                 </p>
               </div>

               <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#0B1F33]">
                    Available Consultation Hours
                  </h3>

                  <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200 text-sm text-[#0B1F33] space-y-3">
                    {doctor.timings.map((timing, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:justify-between gap-1"
                      >
                        <span className="text-slate-600">
                          {timing.days+"-"}
                        </span>

                        <span className="font-bold text-[#0B1F33]">
                          {timing.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}