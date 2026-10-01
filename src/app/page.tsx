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
import { PharmacyToast } from "@/components/ui/PharmacyToast";
import { DEPARTMENTS, HOSPITAL_INFO } from "@/lib/constants";
import { Phone, ArrowRight, HeartPulse, Brain, Bone, Baby, Stethoscope, Siren,Ear,UserStar,ShieldCog} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  HeartPulse, Brain, Bone, Baby, Stethoscope, Siren ,Ear,UserStar,ShieldCog
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <PharmacyToast></PharmacyToast>
      <main className="flex-grow">
        <Hero />
        {/* <StatsSection /> */}

        {/* About Section */}
        {/* <section id="about" className="py-20 bg-white">
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
                <div className="hidden flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
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
        </section> */}

        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

              {/* Left Content */}
              <div className="space-y-5 sm:space-y-6">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#008F86]">
                  <span className="w-8 h-[2px] bg-[#008F86]"></span>
                  About Our Hospital
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#0B1F33]">
                  Healthcare
                  <span className="text-[#008F86]"> Designed Around You</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Unityone Health Centre is a new-generation multispeciality polyclinic
                  committed to delivering accessible, compassionate, and advanced
                  medical care for individuals and families.
                </p>

                {/* Small feature highlights - hidden on mobile */}
                <div className="hidden sm:grid grid-cols-3 gap-4 pt-4">
                  <div className="border-l-2 border-[#008F86] pl-3">
                    <p className="text-sm font-bold text-[#0B1F33]">
                      Experienced
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Medical Team
                    </p>
                  </div>

                  <div className="border-l-2 border-[#008F86] pl-3">
                    <p className="text-sm font-bold text-[#0B1F33]">
                      Modern
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Infrastructure
                    </p>
                  </div>

                  <div className="border-l-2 border-[#008F86] pl-3">
                    <p className="text-sm font-bold text-[#0B1F33]">
                      Patient
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Centered Care
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -top-3 -right-4 w-18 h-20 bg-[#CCFBF1] rounded-full opacity-60 blur-2xl"></div>
                <div className="relative bg-[#F0FDFA] p-6 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#CCFBF1] shadow-sm">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#008F86] flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#008F86]">
                    Our Mission
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] mt-3 mb-4">
                    Better Healthcare,
                    <br />
                    <span className="text-[#008F86]">Better Lives.</span>
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    To raise the standard of quality healthcare through clinical
                    excellence, advanced medical technology, and an unyielding
                    commitment to safety.
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-5 border-t border-[#CCFBF1]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#008F86]"></div>
                      <span className="text-sm font-semibold text-[#0B1F33]">
                        Compassionate care. Clinical excellence.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Departments Section */}
        <section id="departments" className="py-20 bg-[#071827]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#05EDD6]">
                OUR DEPARTMENTS
              </span>
              <h2 className="text-3xl font-bold !text-white mt-2">
                Specialized Care Under One Roof
              </h2>
            </div>


<div className="flex flex-wrap justify-center gap-6">
  {DEPARTMENTS.map((dept) => {
    const IconComponent = iconMap[dept.icon] || Stethoscope;

    return (
      <div
        key={dept.slug}
        className="
          w-full
          md:w-[calc(50%-12px)]
          lg:w-[calc(33.333%-16px)]
          bg-[#0B1F33]
          p-6
          rounded-2xl
          border border-slate-800
          hover:border-[#00BFAF]
          transition-all
          hover:shadow-md
          group
        "
      >
        <div className="w-12 h-12 rounded-xl bg-[#00BFAF]/10 text-[#05EDD6] flex items-center justify-center mb-4 group-hover:bg-[#05EDD6] group-hover:text-[#0B1F33] transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold !text-white mb-2">
          {dept.name}
        </h3>

        <p className="text-sm text-slate-400 mb-4">
          {dept.description}
        </p>

        <Link
          href="#appointment"
          className="text-xs font-bold text-[#008F86] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          <span>Book Appointment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  })}
</div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEPARTMENTS.map((dept) => {
                const IconComponent = iconMap[dept.icon] || Stethoscope;
                return (
                  <div
                    key={dept.slug}
                    className="bg-[#0B1F33] p-6 rounded-2xl border border-slate-800 hover:border-[#00BFAF] transition-all hover:shadow-md group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#00BFAF]/10 text-[#05EDD6] flex items-center justify-center mb-4 group-hover:bg-[#05EDD6] group-hover:text-[#0B1F33] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold !text-white mb-2">{dept.name}</h3>
                    <p className="text-sm text-slate-400 mb-4">{dept.description}</p>
                    <Link
                      href="#appointment"
                      className="text-xs font-bold text-[#008F86] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Book Appointment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div> */}
          </div>
        </section>
       

        <DoctorsSection />
        <WhyChooseUs />

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