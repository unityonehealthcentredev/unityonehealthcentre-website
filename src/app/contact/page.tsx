// "use client";

// import { useState } from "react";
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { HOSPITAL_INFO } from "@/lib/constants";
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Header />

//       <main className="flex-grow pt-28 sm:pt-36 pb-20">
//         {/* Header Strip */}
//         <section className="bg-[#ECFFFC]/50 py-16 border-b border-[#CCFBF1]">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
//             <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
//               REACH OUT TO US
//             </span>
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F33]">
//               Contact UnityOne
//             </h1>
//             <p className="text-base text-[#334155] max-w-xl mx-auto">
//               Have questions about our services, specialists, or visiting policies? We are here to help.
//             </p>
//           </div>
//         </section>

//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
//               {/* Contact Info Sidebar */}
//               <div className="lg:col-span-5 space-y-8">
//                 <div>
//                   <h2 className="text-2xl font-bold text-[#0B1F33]">Get in Touch</h2>
//                   <p className="text-sm text-slate-600 mt-2">
//                     Our administrative team responds to general inquiries within 24 hours.
//                   </p>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center shrink-0">
//                       <MapPin className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-slate-400 uppercase">Address</h4>
//                       <p className="text-sm font-semibold text-[#0B1F33]">{HOSPITAL_INFO.address}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center shrink-0">
//                       <Phone className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-slate-400 uppercase">Phone Numbers</h4>
//                       <p className="text-sm font-semibold text-[#0B1F33]">General: {HOSPITAL_INFO.phone}</p>
//                       <p className="text-sm font-bold text-[#DC2626]">Emergency: {HOSPITAL_INFO.emergencyPhone}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center shrink-0">
//                       <Mail className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-slate-400 uppercase">Email</h4>
//                       <p className="text-sm font-semibold text-[#0B1F33]">{HOSPITAL_INFO.email}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center shrink-0">
//                       <Clock className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-slate-400 uppercase">Operating Hours</h4>
//                       <p className="text-sm font-semibold text-[#0B1F33]">{HOSPITAL_INFO.openingHours}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Inquiry Form */}
//               <div className="lg:col-span-7 bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-slate-200">
//                 <h3 className="text-xl font-bold text-[#0B1F33] mb-6">Send Us a Message</h3>

//                 {submitted ? (
//                   <div className="text-center py-12 space-y-4">
//                     <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
//                     <h4 className="text-xl font-bold text-[#0B1F33]">Message Sent Successfully</h4>
//                     <p className="text-sm text-slate-600 max-w-sm mx-auto">
//                       Thank you for getting in touch. A staff member will respond shortly.
//                     </p>
//                     <Button onClick={() => setSubmitted(false)} className="bg-[#05EDD6] text-[#0B1F33] font-semibold mt-4">
//                       Send Another Inquiry
//                     </Button>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <Label htmlFor="contact-name" className="text-xs font-semibold text-[#0B1F33]">Your Name</Label>
//                         <Input id="contact-name" required placeholder="Jane Doe" className="bg-white rounded-xl" />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="contact-email" className="text-xs font-semibold text-[#0B1F33]">Your Email</Label>
//                         <Input id="contact-email" type="email" required placeholder="jane@example.com" className="bg-white rounded-xl" />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="subject" className="text-xs font-semibold text-[#0B1F33]">Subject</Label>
//                       <Input id="subject" required placeholder="General Inquiry / Feedback" className="bg-white rounded-xl" />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="message" className="text-xs font-semibold text-[#0B1F33]">Message</Label>
//                       <textarea
//                         id="message"
//                         required
//                         rows={5}
//                         placeholder="How can we assist you today?"
//                         className="w-full p-3 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFAF]"
//                       />
//                     </div>

//                     <Button type="submit" className="w-full bg-[#05EDD6] hover:bg-[#00BFAF] text-[#0B1F33] font-bold py-6 rounded-xl flex items-center justify-center gap-2">
//                       <Send className="w-4 h-4" />
//                       <span>Submit Message</span>
//                     </Button>
//                   </form>
//                 )}
//               </div>

//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HOSPITAL_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    // Uses the hospital phone number as the WhatsApp number.
    // If your WhatsApp number is different, replace this with that number.
    const rawPhone = HOSPITAL_INFO.phone.replace(/\D/g, "");

    // Adds India country code if the number is a 10-digit Indian number.
    const whatsappNumber =
      rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;

    const whatsappMessage = `Hello UnityOne Hospital,

I would like to make an inquiry.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        {/* Header Strip */}
        <section className="bg-[#ECFFFC]/50 py-16 border-b border-[#CCFBF1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
              REACH OUT TO US
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F33]">
              Contact Unityone Health Centre
            </h1>
            <p className="text-base text-[#334155] max-w-xl mx-auto">
              Have questions about our services, specialists, or visiting policies? We are here to help.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#0B1F33]">Get in Touch</h2>
                  <p className="text-sm text-slate-600 mt-2">
                    Our administrative team responds to general inquiries within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase">Address</h4>
                      <p className="text-sm font-semibold text-[#0B1F33]">{HOSPITAL_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase">Phone Numbers</h4>
                      <p className="text-sm font-semibold text-[#0B1F33]">General: {HOSPITAL_INFO.phone}</p>
                      <p className="text-sm font-bold text-[#DC2626]">Emergency: {HOSPITAL_INFO.emergencyPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase">Email</h4>
                      <p className="text-sm font-semibold text-[#0B1F33]">{HOSPITAL_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ECFFFC] text-[#008F86] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase">Operating Hours</h4>
                      <p className="text-sm font-semibold text-[#0B1F33]">{HOSPITAL_INFO.openingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-7 bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-slate-200">
                <h3 className="text-xl font-bold text-[#0B1F33] mb-6">Send Us a Message</h3>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h4 className="text-xl font-bold text-[#0B1F33]">Message Sent Successfully</h4>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Your inquiry has been opened in WhatsApp. Please send the message to complete your inquiry.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#05EDD6] text-[#0B1F33] font-semibold mt-4"
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-name"
                          className="text-xs font-semibold text-[#0B1F33]"
                        >
                          Your Name
                        </Label>
                        <Input
                          id="contact-name"
                          name="name"
                          required
                          placeholder="Raj Chakravarthy"
                          className="bg-white rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-email"
                          className="text-xs font-semibold text-[#0B1F33]"
                        >
                          Your Email
                        </Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="raj@example.com"
                          className="bg-white rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-xs font-semibold text-[#0B1F33]"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        placeholder="General Inquiry / Feedback"
                        className="bg-white rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-xs font-semibold text-[#0B1F33]"
                      >
                        Message
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="How can we assist you today?"
                        className="w-full p-3 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00BFAF]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#05EDD6] hover:bg-[#00BFAF] text-[#0B1F33] font-bold py-6 rounded-xl flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </Button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
