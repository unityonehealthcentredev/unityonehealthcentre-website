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
                <span><a href="mailto:info@unityonehealthcentre.com">{HOSPITAL_INFO.email}</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#05EDD6" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                <span><a href="https://www.instagram.com/unityonehealthcentre">Instagram</a></span>
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
          from UnityRx Pharmacy.
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