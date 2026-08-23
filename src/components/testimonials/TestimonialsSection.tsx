import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "The care and attention I received at Unityone were outstanding. The clinical team and specialists made me feel safe and supported throughout my procedure.",
    author: "Verified Patient Family",
    tag: "Derma Care",
  },
  {
    quote: "Modern facilities, clean rooms, and prompt emergency response. We are extremely grateful to the entire nursing staff.",
    author: "Local Resident",
    tag: "Emergency Unit",
  },
  {
    quote: "Booking an appointment was seamless. Dr. Sohil took time to listen and explain the entire diagnostic plan clearly.",
    author: "Outpatient Visitor",
    tag: "General Medicine",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
            PATIENT FEEDBACK
          </span>
          <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
            What Our Patients Say
          </h2>
       
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-[#00BFAF] mb-4 opacity-50" />
                <p className="text-sm text-[#334155] leading-relaxed italic mb-6">"{item.quote}"</p>
              </div>
              <div>
                <span className="text-xs font-bold text-[#008F86] block">{item.tag}</span>
                <span className="text-xs font-semibold text-[#0B1F33]">{item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}