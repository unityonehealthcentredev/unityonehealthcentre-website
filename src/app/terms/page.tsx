// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { HOSPITAL_INFO } from "@/lib/constants";

// export const metadata = {
//   title: `Terms of Use | ${HOSPITAL_INFO.name}`,
//   description: "Terms and conditions for using the website and online booking portal of UnityOne Health Centre.",
// };

// export default function TermsPage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Header />

//       <main className="flex-grow pt-28 sm:pt-36 pb-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
//           <div className="border-b border-slate-200 pb-6">
//             <h1 className="text-3xl font-extrabold text-[#0B1F33]">Terms of Use</h1>
//             <p className="text-xs text-slate-500 mt-2">Effective Date: January 2026</p>
//           </div>

//           <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed text-slate-600">
//             <h3 className="text-base font-bold text-[#0B1F33]">1. Medical Disclaimer</h3>
//             <p className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-900 font-medium">
//               Important: Content on this website is provided for informational purposes only and does not constitute formal medical diagnosis or emergency advice. If you are experiencing a life-threatening medical emergency, call emergency services immediately or visit the nearest emergency room.
//             </p>

//             <h3 className="text-base font-bold text-[#0B1F33]">2. Appointment Booking Requests</h3>
//             <p>
//               Submitting an online appointment form constitutes a request, not a finalized booking. Final confirmation will be provided by our clinical coordination staff via phone or email.
//             </p>

//             <h3 className="text-base font-bold text-[#0B1F33]">3. Intellectual Property</h3>
//             <p>
//               All branding elements, layout designs, trademarks, and content published on this site belong to <strong>{HOSPITAL_INFO.name}</strong> and are protected under copyright laws.
//             </p>
//           </div>

//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HOSPITAL_INFO } from "@/lib/constants";

export const metadata = {
  title: `Terms of Use | ${HOSPITAL_INFO.name}`,
  description: `Terms and conditions for using the ${HOSPITAL_INFO.name} website and its online communication services.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-extrabold text-[#0B1F33]">
              Terms of Use
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Effective Date: August 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed text-slate-600">

            <p>
              Welcome to the website of{" "}
              <strong>{HOSPITAL_INFO.name}</strong>. By accessing or using this
              website, you agree to comply with these Terms of Use. If you do
              not agree with these terms, please discontinue use of the website.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              1. Medical Disclaimer
            </h3>

            <p className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-900 font-medium">
              Important: Information provided on this website is intended for
              general informational purposes only. Website content does not
              constitute medical diagnosis, treatment, medical advice, or a
              substitute for consultation with a qualified healthcare
              professional.
            </p>

            <p>
              If you are experiencing a medical emergency or a life-threatening
              condition, do not rely on this website or online communication.
              Contact the appropriate emergency medical service or visit the
              nearest emergency department immediately.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              2. Website Information
            </h3>

            <p>
              We make reasonable efforts to keep information on this website
              accurate and up to date. However, medical services, doctors,
              departments, operating hours, contact information, and other
              website content may change from time to time.
            </p>

            <p>
              Information published on the website should not be considered a
              guarantee that a particular doctor, service, treatment, facility,
              or appointment will be available at any particular time.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              3. Contact Forms and WhatsApp Communication
            </h3>

            <p>
              Our website may provide forms that allow visitors to submit an
              inquiry and open a WhatsApp conversation with our hospital team.
              Submitting a form does not by itself create a doctor-patient
              relationship, confirm an appointment, or guarantee that a
              particular service will be provided.
            </p>

            <p>
              Information entered into a website form may be transferred to
              WhatsApp for the purpose of communicating with our hospital team.
              WhatsApp is a third-party communication platform and its own terms
              and privacy practices may apply.
            </p>

            <p>
              Visitors should avoid submitting sensitive medical information,
              medical records, prescriptions, diagnostic reports, or other
              confidential health information through general website forms or
              WhatsApp unless specifically instructed by the hospital through an
              appropriate and secure channel.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              4. No Guarantee of Online Communication
            </h3>

            <p>
              Sending an inquiry through the website or WhatsApp does not
              guarantee an immediate response. Response times may vary
              depending on operating hours, staff availability, technical
              conditions, and the nature of the inquiry.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              5. Emergency Communications
            </h3>

            <p>
              The website contact forms and WhatsApp communication should not be
              used for medical emergencies. The hospital cannot guarantee that
              online messages will be monitored continuously or responded to
              immediately.
            </p>

            <p>
              In an emergency, please use the emergency contact information
              displayed on this website or seek immediate medical attention at
              the nearest appropriate medical facility.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              6. Intellectual Property
            </h3>

            <p>
              Unless otherwise stated, the content of this website, including
              text, graphics, logos, branding, photographs, design elements,
              icons, and other materials, belongs to{" "}
              <strong>{HOSPITAL_INFO.name}</strong> or is used with appropriate
              permission.
            </p>

            <p>
              Website content may not be copied, reproduced, modified,
              distributed, published, or commercially exploited without prior
              written permission, except where permitted by applicable law.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              7. Third-Party Links and Services
            </h3>

            <p>
              This website may contain links to third-party websites,
              applications, or services. These services may have their own
              terms, privacy policies, and security practices.{" "}
              {HOSPITAL_INFO.name} is not responsible for the content,
              availability, or privacy practices of third-party websites or
              platforms.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              8. Website Availability
            </h3>

            <p>
              We aim to keep this website available and functioning properly,
              but we do not guarantee that the website will always be available,
              uninterrupted, error-free, or free from technical issues.
            </p>

            <p>
              Access may occasionally be interrupted for maintenance, updates,
              security reasons, technical failures, or circumstances beyond our
              reasonable control.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              9. User Responsibilities
            </h3>

            <p>
              Visitors agree to use this website lawfully and responsibly. You
              must not knowingly submit false, misleading, unlawful, abusive,
              defamatory, or fraudulent information through our website or
              communication channels.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              10. Privacy
            </h3>

            <p>
              Information submitted through the website is handled according to
              our Privacy Policy. Please review the Privacy Policy to understand
              how information submitted through our website and communication
              services is handled.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              11. Limitation of Website Information
            </h3>

            <p>
              To the extent permitted by applicable law, information provided
              through this website is provided for general informational
              purposes and should not be relied upon as a substitute for
              professional medical evaluation or advice.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              12. Changes to These Terms
            </h3>

            <p>
              We may update these Terms of Use from time to time to reflect
              changes to our website, services, or applicable legal
              requirements. Updated terms will be published on this page with a
              revised effective date.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              13. Contact Us
            </h3>

            <p>
              If you have questions regarding these Terms of Use, please
              contact us at{" "}
              <span className="font-semibold text-[#0B1F33]">
                {HOSPITAL_INFO.email}
              </span>.
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
