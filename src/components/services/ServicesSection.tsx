import { Siren, Activity, Pill, Microscope, Radio, Ambulance, Heart, ShieldAlert, FileText } from "lucide-react";

const SERVICES = [
  { name: "Emergency Care", desc: "24/7 rapid critical intervention unit.", icon: Siren },
  { name: "Diagnostic Services", desc: "High-precision automated imaging and diagnostics.", icon: Activity },
  { name: "Pharmacy", desc: "24-hour fully stocked outpatient & inpatient pharmacy.", icon: Pill },
  { name: "Laboratory", desc: "Comprehensive clinical pathology and routine tests.", icon: Microscope },
  { name: "Radiology", desc: "Advanced MRI, CT Scan, X-Ray, and Ultrasound imaging.", icon: Radio },
  { name: "Ambulance", desc: "Fully equipped mobile ICU units on standby.", icon: Ambulance },
  { name: "ICU & Critical Care", desc: "Intensive care units with 1-on-1 nursing attention.", icon: ShieldAlert },
  { name: "Operation Theatres", desc: "Modular HEPA-filtered surgical suites.", icon: Heart },
  { name: "Health Packages", desc: "Preventive health screenings and checkup plans.", icon: FileText },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
            HOSPITAL SERVICES
          </span>
          <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
            Comprehensive Medical Facilities
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Integrated diagnostic, treatment, and emergency healthcare support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#00BFAF] transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33] mb-1">{service.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}