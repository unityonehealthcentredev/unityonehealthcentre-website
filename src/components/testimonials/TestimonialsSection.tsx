import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Jahid Khan",
    initial: "J",
    rating: 5,
    // date: "2 weeks ago",
    whom: "Patient",
    review:
      "The care and attention I received at Unityone were outstanding. The clinical team and specialists made me feel safe and supported throughout my procedure.",
  },
  {
    name: "Rajib Mansuri",
    initial: "R",
    whom : "Guide",
    rating: 5,
    // date: "1 month ago",
    review:
      "Modern facilities, clean rooms, and prompt emergency response. We are extremely grateful to the entire nursing staff.",
  },
  {
    name: "Vedant Tailor",
    initial: "V",
    whom :"Patient",
    rating: 5,
    // date: "2 months ago",
    review:
      "Booking an appointment was seamless. Dr. Sohil took time to listen and explain the entire diagnostic plan clearly.",
  },
];

function GoogleStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? "fill-[#FBBC04] text-[#FBBC04]"
              : "text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
            PATIENT REVIEWS
          </span>

          <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
            What Our Patients Say
          </h2>

          <p className="text-sm text-slate-500 mt-3">
            See what our patients have to say about their experience with
            Unityone Hospital.
          </p>
        </div>

        {/* Google Rating Summary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {/* <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-[#0B1F33]">
              
            </span>

            <div>
              <GoogleStars rating={5} />

              <p className="text-xs text-slate-500 mt-1">
                Based on 250+ Google Reviews
              </p>
            </div>
          </div> */}

          {/* Google Logo */}
          <div className="hidden sm:block w-px h-10 bg-slate-200" />

          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <span className="text-lg font-bold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>

            <span>Reviews</span>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Patient Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1967D2] flex items-center justify-center font-semibold text-sm">
                    {item.initial}
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-semibold text-[#202124]">
                        {item.name}
                      </h3>

                      {/* Google-style verified icon */}
                      <span className="text-[#4285F4] text-xs">✓</span>
                    </div>

                    <p className="text-xs text-[#5F6368]">
                      {item.whom}
                    </p>
                  </div>
                </div>

                {/* Google G */}
                <span className="text-xl font-bold">
                  <span className="text-[#4285F4]">G</span>
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <GoogleStars rating={item.rating} />

                <span className="text-xs text-[#5F6368]">
                  {/* {item.date} */}
                </span>
              </div>

              {/* Review */}
              <p className="text-sm text-[#3C4043] leading-6 mt-4 line-clamp-5">
                {item.review}
              </p>

              {/* Read more */}
              {/* <button className="text-sm font-medium text-[#1A73E8] mt-3 hover:underline">
                Read more
              </button> */}
            </div>
          ))}
        </div>

        {/* View all reviews */}
        <div className="flex justify-center mt-10">
          <a
            href="https://share.google/YooXckqVmfx81efmG"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-slate-300 text-sm font-semibold text-[#1A73E8] hover:bg-[#F8FAFF] transition-colors"
          >
            View all Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}
