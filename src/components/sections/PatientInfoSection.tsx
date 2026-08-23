import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PATIENT_RESOURCES = [
  { id: "visit", title: "Before Your Visit", text: "Please arrive 15 minutes prior to your scheduled appointment." },
  { id: "patientroom", title: "Does Unityone health centre has patient room?", text: "Yes, we do have patient room." },
  { id: "hours", title: "Visiting Hours", text: "Opening from 8:00 AM - 8:00 PM." },
];

export function PatientInfoSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
            PATIENT RESOURCES
          </span>
          <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
            Essential Information for Patients & Visitors
          </h2>
        </div>

        <Accordion className="w-full space-y-4">
          {PATIENT_RESOURCES.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="bg-white border border-slate-200 rounded-2xl px-6">
              <AccordionTrigger className="text-base font-bold text-[#0B1F33] hover:text-[#008F86] hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-4">
                {item.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}