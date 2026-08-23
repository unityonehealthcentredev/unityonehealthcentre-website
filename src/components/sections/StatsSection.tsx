import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00BFAF]">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[#64748B]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}