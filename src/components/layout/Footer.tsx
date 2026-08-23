import Link from "next/link";
import { HOSPITAL_INFO, QUICK_LINKS } from "@/lib/constants";
import { Activity, Phone, Mail, MapPin} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#071827] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 rounded-xl bg-[#05EDD6] text-[#0B1F33] flex items-center justify-center"> */}
                {/* <Activity className="w-6 h-6 stroke-[2.5]" /> */}
              <Image
                        src="/unityonelogo-rmbg.png"
                        alt="UnityOne Health Centre"
                        width={200}
                        height={60}
                        priority
                        className="h-12 w-auto object-contain rounded-lg"
                      />
              {/* </div>s */}
             
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Compassionate care. Advanced medicine. Better health outcomes for every patient we serve.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold !text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#05EDD6] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold !text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#05EDD6] shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#05EDD6] shrink-0" />
                <span><a href={`tel:+917863050470`}>{HOSPITAL_INFO.phone}</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#05EDD6] shrink-0" />
                <span>{HOSPITAL_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Emergency Alert Box */}
       <div className="bg-[#0B1F33] p-5 rounded-2xl border border-slate-800 space-y-3">
        <h2 className="text-sm font-bold !text-white uppercase tracking-wider">
          Unityrx Pharmacy
        </h2>

        <p className="text-sm leading-6 text-slate-300">
          Conveniently get your prescribed medicines and healthcare essentials
          from Unityrx Pharmacy.
        </p>

        <a
          href={`tel:+917863050471}`}
          className="inline-block text-lg font-bold text-[#05EDD6] hover:underline"
        >
          +91 7863050471
        </a>
      </div>

        </div>

        {/* Bottom Legal Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {HOSPITAL_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}