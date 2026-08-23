import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What are the hospital visiting hours?",
    a: "General visiting hours are between 08:00 AM and 08:00 PM daily. Emergency visitor rules vary for patient safety.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can schedule an appointment online via our appointment booking form or call our central phone desk.",
  },
  {
    q: "Do we get patient rooms/general ward?",
    a: "Yes , we do have AC facilited patient rooms.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#008F86]">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl font-bold text-[#0B1F33]">
            Got Questions? We Have Answers.
          </h2>
        </div>

        <Accordion
          className="w-full space-y-4"
        >
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="rounded-2xl border border-slate-200 bg-white px-6"
            >
              <AccordionTrigger className="text-base font-bold text-[#0B1F33] hover:text-[#008F86] hover:no-underline">
                {faq.q}
              </AccordionTrigger>

              <AccordionContent className="pb-4 text-sm leading-relaxed text-slate-600">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}