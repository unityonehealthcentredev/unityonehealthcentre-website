import { ShieldCheck, Cpu, UserCheck, Clock, Building2, Stethoscope } from "lucide-react";

const FEATURES = [
  {
    title: "Advanced Technology",
    description: "Modern diagnostic and treatment facilities equipped with state-of-the-art medical equipment.",
    icon: Cpu,
  },
  {
    title: "Experienced Specialists",
    description: "Qualified clinical professionals and senior consultants dedicated to personalized care.",
    icon: UserCheck,
  },
  {
    title: "Patient-Centered Care",
    description: "Every treatment plan and operational decision starts with patient safety and comfort in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Care Under One Roof",
    description: "Access comprehensive healthcare across multiple specialties, with coordinated care and expert medical support all in one place.",
    icon: Clock,
  },
  {
    title: "Modern Infrastructure",
    description: "Architecturally designed clinical environments focused on cleanliness, safety, and efficiency.",
    icon: Building2,
  },
  {
    title: "Integrated Healthcare",
    description: "Multiple clinical specialties collaborating closely to deliver multi-faceted medical outcomes.",
    icon: Stethoscope,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#071827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#05EDD6]">
            EXCELLENCE IN CARE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold !text-white mt-2">
            Why Families Choose Us
          </h2>
          <p className="text-sm text-slate-400 mt-3">
            Combining medical expertise with compassionate care to ensure the best health outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#0B1F33] p-8 rounded-2xl border border-slate-800 hover:border-[#00BFAF]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00BFAF]/10 text-[#05EDD6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold !text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}