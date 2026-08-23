// import Image from "next/image";

// const FACILITIES = [
//   { name: "Modern Patient Rooms", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" },
//   { name: "Advanced ICU", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
//   { name: "Modular Operation Theatre", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
//   { name: "Diagnostic & Radiology Center", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
// ];

// export function FacilitiesSection() {
//   return (
//     <section id="facilities" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-xl mx-auto mb-16">
//           <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
//             OUR INFRASTRUCTURE
//           </span>
//           <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
//             Explore Our Facilities
//           </h2>
//           <p className="text-sm text-slate-600 mt-2">
//             Designed for optimal clinical safety, comfort, and swift recovery.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {FACILITIES.map((fac, idx) => (
//             <div key={idx} className="relative h-72 rounded-3xl overflow-hidden group shadow-sm border border-slate-100">
//               <Image
//                 src={fac.image}
//                 alt={fac.name}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/80 via-[#071827]/20 to-transparent flex items-end p-8">
//                 <h3 className="text-xl font-bold !text-white">{fac.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const FACILITIES = [
  {
    name: "X-Ray",
    image:
      "https://images.unsplash.com/photo-1516069677018-378515003435?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "ECG",
    image:"https://unisonbiomed.com/wp-content/uploads/2024/01/Digital-Six-channel-ECG-machine-ECG-1206A-Plus.jpg",
  },
  {
    name: "BiPAP Machine",
    image:
      "https://thumbs.dreamstime.com/b/caucasian-woman-using-cough-assist-ventilator-mask-deep-breaths-respiratory-condition-home-due-to-195704805.jpg",
  },
  {
    name: "Multipara Monitor",
    image:
      "https://thumbs.dreamstime.com/b/close-up-multiparameter-patient-monitor-161877300.jpg?w=992",  
  },
  {name: "Syringe Pump",
    image:"https://thumbs.dreamstime.com/b/hospital-syringe-pump-white-background-digital-used-hospitals-iv-infusion-isolated-378129721.jpg?w=768s",
  },
  {
    name: "Minor Procedure Room",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
            OUR FACILITIES
          </span>

          <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
            Advanced Medical Facilities
          </h2>

          <p className="text-sm text-slate-600 mt-2">
            Equipped with essential diagnostic, monitoring, and treatment
            facilities to provide safe and efficient patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((fac, idx) => (
            <div
              key={idx}
              className="relative h-72 rounded-3xl overflow-hidden group shadow-sm border border-slate-100"
            >
              <Image
                src={fac.image}
                alt={fac.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/80 via-[#071827]/20 to-transparent flex items-end p-8">
                <h3 className="text-xl font-bold !text-white">
                  {fac.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}