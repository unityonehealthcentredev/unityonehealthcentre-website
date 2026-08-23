import { HOSPITAL_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function LocationSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
              VISIT OUR HOSPITAL
            </span>
            <h2 className="text-3xl font-bold text-[#0B1F33]">
              Location & Contact Details
            </h2>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00BFAF] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Address</h4>
                  <p className="text-sm font-semibold text-[#0B1F33]">{HOSPITAL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#00BFAF] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Phone Numbers</h4>
                  <p className="text-sm font-semibold text-[#0B1F33]">General: {HOSPITAL_INFO.phone}</p>
                  <p className="text-sm font-bold text-[#DC2626]">Emergency: {HOSPITAL_INFO.emergencyPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00BFAF] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Email</h4>
                  <p className="text-sm font-semibold text-[#0B1F33]">{HOSPITAL_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00BFAF] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Opening Hours</h4>
                  <p className="text-sm font-semibold text-[#0B1F33]">{HOSPITAL_INFO.openingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="lg:col-span-7 h-[380px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center relative">
            <div className="text-center p-6">
              <MapPin className="w-10 h-10 text-[#00BFAF] mx-auto mb-2" />
              <p className="text-sm font-bold text-[#0B1F33]">Map Placeholder Integration</p>
              <p className="text-xs text-slate-500 max-w-sm mt-1">
                Google Maps embed or interactive map container will render here with active coordinates[cite: 63].
              </p>
            </div>
          </div> */}

            <div className="lg:col-span-7 h-[380px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-100">
            <iframe
              title="Hospital Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                HOSPITAL_INFO.address
              )}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}   