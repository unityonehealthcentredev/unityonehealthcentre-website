import Link from "next/link";
import Image from "next/image";
import { HOSPITAL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Home, Phone, ArrowLeft, Stethoscope, SearchAlert } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | UnityOne Health Centre",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ECFFFC] via-white to-[#F8FAFC] text-[#0B1F33] flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#05EDD6]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Logo */}
      <div className="max-w-7xl mx-auto w-full text-center">
        <Link href="/" className="inline-block">
          <div className="relative w-56 h-16 mx-auto rounded-lg overflow-hidden">
            <Image
              src="/unityonelogo.png"
              alt="UnityOne Health Centre"
              fill
              className="object-contain rounded-lg overflow-hidden"
              priority 
            />
          </div>
        </Link>
      </div>

      {/* Main 404 Card Content */}
      <main className="max-w-2xl mx-auto w-full text-center space-y-6 my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFFFC] border border-[#05EDD6]/40 text-[#008F86] text-xs font-bold uppercase tracking-wider">
          <SearchAlert className="w-4 h-4 text-[#00BFAF]" />
          <span>Error 404 • Page Not Found</span>
        </div>

        {/* Large Styled 404 Heading */}
        <h1 className="text-7xl sm:text-9xl font-extrabold text-[#0B1F33] tracking-tight">
          4<span className="text-[#00BFAF]">0</span>4
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33]">
            Looking for Medical Assistance?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you requested could not be found or may have been moved. Let us help you get back on track.
          </p>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            className="w-full sm:w-auto bg-[#05EDD6] hover:bg-[#00BFAF] text-[#0B1F33] font-bold py-6 px-8 rounded-xl shadow-md transition-all"
          >
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto border-slate-200 hover:bg-slate-50 text-[#0B1F33] font-semibold py-6 px-8 rounded-xl"
          >
            <Link href="/#appointment" className="flex items-center justify-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#008F86]" />
              <span>Book Appointment</span>
            </Link>
          </Button>
        </div>

        {/* Emergency Assistance Notice */}
        <div className="mt-10 p-4 rounded-2xl bg-red-50/80 border border-red-100 max-w-lg mx-auto flex items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-[#DC2626] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#DC2626] uppercase">24/7 Emergency Helpdesk</p>
              <p className="text-sm font-bold text-[#0B1F33]">{HOSPITAL_INFO.emergencyPhone}</p>
            </div>
          </div>
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
            className="text-xs font-bold text-[#DC2626] hover:underline shrink-0"
          >
            Call Now →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-slate-400">
        <p>© 2026 {HOSPITAL_INFO.name}. Healing Hands, Caring Hearts.</p>
      </footer>
    </div>
  );
}