// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { HOSPITAL_INFO } from "@/lib/constants";

// export const metadata = {
//   title: `Privacy Policy | ${HOSPITAL_INFO.name}`,
//   description: "Privacy policy regarding medical data protection and online security at UnityOne Health Centre.",
// };

// export default function PrivacyPage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Header />

//       <main className="flex-grow pt-28 sm:pt-36 pb-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
//           <div className="border-b border-slate-200 pb-6">
//             <h1 className="text-3xl font-extrabold text-[#0B1F33]">Privacy Policy</h1>
//             <p className="text-xs text-slate-500 mt-2">Last Updated: August 2026</p>
//           </div>

//           <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed text-slate-600">
//             <p>
//               At <strong>{HOSPITAL_INFO.name}</strong>, we consider patient privacy and health data security to be fundamental to our medical practice. This Privacy Policy outlines how information collected through our online portal is managed.
//             </p>

//             <h3 className="text-base font-bold text-[#0B1F33]">1. Information We Collect</h3>
//             <p>
//               We collect minimal personal data necessary for appointment requests and inquiries, including:
//             </p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Contact details (Full Name, Phone Number, Email Address)</li>
//               <li>Appointment preferences (Department, Date, Preferred Time Slot)</li>
//               <li>General non-clinical inquiries submitted through contact forms</li>
//             </ul>

//             <h3 className="text-base font-bold text-[#0B1F33]">2. Use of Information</h3>
//             <p>
//               Personal details collected online are strictly used for:
//             </p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>Confirming and managing outpatient appointments</li>
//               <li>Responding to user-initiated service inquiries</li>
//               <li>Improving website accessibility and operational efficiency</li>
//             </ul>

//             <h3 className="text-base font-bold text-[#0B1F33]">3. Confidentiality & Security</h3>
//             <p>
//               We enforce strict digital and administrative security measures to prevent unauthorized access or disclosure. We do not sell or trade personal information to external commercial entities.
//             </p>

//             <h3 className="text-base font-bold text-[#0B1F33]">4. Contact Our Compliance Team</h3>
//             <p>
//               For privacy concerns or data inquiries, reach out to us at <span className="font-semibold text-[#0B1F33]">{HOSPITAL_INFO.email}</span>.
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
  title: `Privacy Policy | ${HOSPITAL_INFO.name}`,
  description: `Privacy Policy explaining how ${HOSPITAL_INFO.name} handles information submitted through its website.`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl font-extrabold text-[#0B1F33]">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last Updated: August 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed text-slate-600">

            <p>
              At <strong>{HOSPITAL_INFO.name}</strong>, we respect the privacy
              of individuals who visit and use our website. This Privacy Policy
              explains what information may be collected through our website,
              how it is used, and how information submitted through our contact
              forms is handled.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              1. Information We Collect
            </h3>

            <p>
              We collect only the information that you voluntarily provide
              through our website forms. Depending on the form, this may
              include:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number, where requested</li>
              <li>Subject or inquiry details</li>
              <li>Other information that you voluntarily include in your message</li>
            </ul>

            <p>
              Please do not submit sensitive medical information, medical
              records, prescriptions, reports, or other confidential health
              information through general website contact forms.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              2. How We Use Your Information
            </h3>

            <p>
              Information submitted through our website is used only for
              purposes such as:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to your inquiry or request</li>
              <li>Contacting you regarding the information you requested</li>
              <li>Providing information about our hospital services</li>
              <li>Handling your communication with our administrative team</li>
            </ul>

            <h3 className="text-base font-bold text-[#0B1F33]">
              3. WhatsApp Communication
            </h3>

            <p>
              Our website may provide forms that allow you to submit your
              information through WhatsApp for communication with our hospital
              team. When you choose to use this feature, the information you
              enter into the form is transferred to WhatsApp and may be
              processed by WhatsApp in accordance with its own privacy policy
              and terms.
            </p>

            <p>
              Please review WhatsApp's applicable privacy practices before
              submitting information through WhatsApp.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              4. Website Database
            </h3>

            <p>
              We do not intentionally store information submitted through our
              website contact forms in a hospital website database. The website
              form is primarily used to prepare and send your inquiry through
              the available communication channel, such as WhatsApp.
            </p>

            <p>
              However, technical information such as server logs, security
              records, hosting-related information, or information processed by
              third-party website services may be handled by the providers of
              those services as necessary to operate and secure the website.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              5. Data Sharing
            </h3>

            <p>
              We do not sell or trade personal information submitted through
              our website for commercial purposes.
            </p>

            <p>
              Information may be processed by service providers that are
              necessary for website operation or communication, including
              hosting, security, analytics, or communication platforms where
              applicable.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              6. Information Security
            </h3>

            <p>
              We take reasonable technical and administrative measures to
              protect information handled through our website. However, no
              internet-based communication system can be guaranteed to be
              completely secure.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              7. Medical Information
            </h3>

            <p>
              The website is not intended to be used for submitting confidential
              medical records or urgent medical information. For emergencies,
              please contact the hospital directly using the emergency contact
              information provided on this website.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              8. Your Privacy Rights
            </h3>

            <p>
              Depending on applicable law, you may have rights relating to your
              personal data, including rights concerning access, correction,
              withdrawal of consent, or deletion. Requests or privacy concerns
              may be directed to our contact address below.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              9. Third-Party Websites
            </h3>

            <p>
              Our website may contain links to third-party websites or
              services. We are not responsible for the privacy practices,
              security, or content of third-party websites. We recommend
              reviewing their respective privacy policies.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              10. Changes to This Privacy Policy
            </h3>

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to our website, services, or applicable legal
              requirements. The updated version will be published on this page
              with a revised "Last Updated" date.
            </p>

            <h3 className="text-base font-bold text-[#0B1F33]">
              11. Contact Us
            </h3>

            <p>
              If you have questions, concerns, or requests regarding this
              Privacy Policy or the handling of your personal information,
              please contact us at{" "}
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
