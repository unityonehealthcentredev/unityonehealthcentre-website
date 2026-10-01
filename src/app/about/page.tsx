import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { HOSPITAL_INFO } from "@/lib/constants";
import { ShieldCheck, Heart, Award, Target, Eye, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: `About Us | ${HOSPITAL_INFO.name}`,
  description: "Learn about UnityOne Health Centre, our mission, vision, values, and our commitment to advanced, compassionate healthcare.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every patient interaction is grounded in empathy, dignity, and personal respect.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Safety",
    description: "Strict adherence to safety standards and evidence-based clinical protocols.",
  },
  {
    icon: Award,
    title: "Medical Excellence",
    description: "Continuous innovation through advanced medical technology and experienced specialists.",
  },
  {
    icon: Users,
    title: "Community Commitment",
    description: "Accessible, transparent healthcare designed to serve all members of our community.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        {/* Page Hero Header */}
        <section className="bg-[#ECFFFC]/50 py-16 border-b border-[#CCFBF1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
              ABOUT OUR CENTRE
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F33]">
              Pioneering Healthcare with Heart
            </h1>
            <p className="text-base sm:text-lg text-[#334155] max-w-2xl mx-auto">
              Unityone Health Centre brings together world-class specialists, state-of-the-art diagnostic technology, and a patient-first focus.
            </p>
          </div>
        </section>

        {/* Overview & Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/unityonehero.png"
                    alt="UnityOne Health Centre facility"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
                  OUR STORY
                </span>
                <h2 className="text-3xl font-bold text-[#0B1F33]">
                  A New Era of Multispeciality Medical Care
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Founded with a vision to redefine community healthcare, Unityone Health Centre is a modern multispeciality polyclinic designed around convenience, safety, and superior clinical outcomes.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  By bringing outpatient specialty consultations, diagnostic imaging, pathology, and urgent medical assistance under one roof, we eliminate unnecessary delays in treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-[#F8FAFC] border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F33]">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To deliver accessible, high-quality, and evidence-based medical care that enhances health, instills trust, and restores vitality to every patient we serve.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F33]">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To become the most trusted regional healthcare brand, recognized for clinical excellence, ethical medical practice, and advanced patient care technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
                OUR GUIDING PRINCIPLES
              </span>
              <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
                Core Values We Stand By
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-[#05EDD6]/20 text-[#008F86] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1F33] mb-2">{val.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Strip */}
        <section className="bg-[#071827] text-white py-16">
          <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl !text-white font-bold">Ready to Experience Modern Care?</h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Schedule your appointment or visit our state-of-the-art facility today.
            </p>
            <Button  className="bg-[#05EDD6] hover:bg-[#00BFAF] text-[#0B1F33] font-bold px-8 py-6 rounded-xl">
              <Link href="/#appointment" className="inline-flex items-center gap-2">
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}