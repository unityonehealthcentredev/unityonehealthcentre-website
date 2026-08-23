import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { DoctorsSection } from "@/components/doctors/DoctorsSection";
import { FacilitiesSection } from "@/components/facilities/FacilitiesSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { Footer } from "@/components/layout/Footer";
import { DEPARTMENTS, HOSPITAL_INFO } from "@/lib/constants";
import { Phone, ArrowRight, HeartPulse, Brain, Bone, Baby, Stethoscope, Siren } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  HeartPulse, Brain, Bone, Baby, Stethoscope, Siren
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        {/* <StatsSection /> */}

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
                  ABOUT OUR HOSPITAL
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F33]">
                  Healthcare Designed Around You
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Unityone Health Centre is a new-generation multispeciality polyclinic committed to delivering accessible, compassionate, and advanced medical care for individuals and families.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                    <div className="flex items-center gap-3">
                      <span className="text-[#008F86] font-bold">✓</span>
                      <span className="text-sm font-semibold text-[#0B1F33]">
                        Experienced Medical Team
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[#008F86] font-bold">✓</span>
                      <span className="text-sm font-semibold text-[#0B1F33]">
                        Modern Infrastructure
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[#008F86] font-bold">✓</span>
                      <span className="text-sm font-semibold text-[#0B1F33]">
                        Patient-Centered Care
                      </span>
                    </div>
                  </div>
              </div>
              <div className="bg-[#F0FDFA] p-8 rounded-3xl border border-[#CCFBF1] space-y-4">
                <h3 className="text-xl font-bold text-[#0B1F33]">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To raise standard quality of healthcare through clinical excellence, advanced medical technology, and an unyielding commitment to safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section id="departments" className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
                OUR DEPARTMENTS
              </span>
              <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
                Specialized Care Under One Roof
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEPARTMENTS.map((dept) => {
                const IconComponent = iconMap[dept.icon] || Stethoscope;
                return (
                  <div
                    key={dept.slug}
                    className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#00BFAF] transition-all hover:shadow-md group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center mb-4 group-hover:bg-[#05EDD6] group-hover:text-[#0B1F33] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F33] mb-2">{dept.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{dept.description}</p>
                    <Link
                      href="#appointment"
                      className="text-xs font-bold text-[#008F86] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Department</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <DoctorsSection />

        {/* Emergency CTA */}
        <section className="bg-[#071827] text-white py-12 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold !text-white">Need Immediate Medical Attention?</h3>
              <p className="text-sm text-slate-400 mt-1">Our emergency clinical team is available when you are in need.</p>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="bg-[#DC2626] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shrink-0"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
            </a>
          </div>
        </section>

        <FacilitiesSection />
        <AppointmentForm />
        <TestimonialsSection />
        <FAQSection />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
}