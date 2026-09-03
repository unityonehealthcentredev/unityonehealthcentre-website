"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEPARTMENTS } from "@/lib/constants";
// import { MOCK_DOCTORS } from "@/components/doctors/DoctorsSection";
import { MOCK_DOCTORS } from "@/data/doctors";
import {Calendar,Clock,User,Phone,Mail,MessageCircle,Stethoscope} from "lucide-react";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimings, setAvailableTimings] = useState<
    { days: string[]; time: string }[]
  >([]);

  const WHATSAPP_NUMBER = "917863050470";

  /*
   * Get available timings whenever doctor or date changes
   */
  useEffect(() => {
    if (!selectedDoctor || !selectedDate) {
      setAvailableTimings([]);
      return;
    }

    const doctor = MOCK_DOCTORS.find(
      (doc) => doc.slug === selectedDoctor
    );

    if (!doctor) {
      setAvailableTimings([]);
      return;
    }

    // Get day name from selected date
    const date = new Date(`${selectedDate}T00:00:00`);

    const dayName = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    // Find timings available on that day
    const timingsForDay = doctor.timings.filter((timing) =>
      timing.days.includes(dayName)
    );

    setAvailableTimings(timingsForDay);
  }, [selectedDoctor, selectedDate]);

  const handleDoctorChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDoctor(e.target.value);

    // Reset time when doctor changes
    setAvailableTimings([]);
  };

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const departmentSlug =
      formData.get("department")?.toString() || "";
    const doctorSlug =
      formData.get("doctor")?.toString() || "";
    const date = formData.get("date")?.toString() || "";
    const time = formData.get("time")?.toString() || "";

    const department = DEPARTMENTS.find(
      (dept) => dept.slug === departmentSlug
    )?.name;

    const doctor = MOCK_DOCTORS.find(
      (doc) => doc.slug === doctorSlug
    );

    const message = `Hello UnityOne Health Centre,

I would like to book an appointment.

*Patient Details*
Name: ${name}
Phone: ${phone}
Email: ${email}

*Appointment Details*
Department: ${department || departmentSlug}
Doctor: ${doctor?.name || doctorSlug}
Preferred Date: ${date}
Preferred Time: ${time}

Please confirm the availability and appointment.

Thank you.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">

          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008F86]">
              Timely Healthcare
            </span>

            <h2 className="text-3xl font-bold text-[#0B1F33] mt-2">
              Book an Appointment
            </h2>

            <p className="text-sm text-[#64748B] mt-2">
              Schedule a consultation with our experienced clinical
              specialists.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <MessageCircle className="w-16 h-16 text-[#00BFAF] mx-auto" />

              <h3 className="text-2xl font-bold text-[#0B1F33]">
                Continue on WhatsApp
              </h3>

              <p className="text-sm text-[#64748B] max-w-md mx-auto">
                Your appointment details have been prepared in WhatsApp.
                Please send the message to complete your appointment request.
              </p>

              <Button
                onClick={() => setSubmitted(false)}
                className="bg-[#05EDD6] text-[#0B1F33] hover:bg-[#00BFAF] font-semibold mt-4"
              >
                Book Another Appointment
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Full Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs font-semibold text-[#0B1F33]"
                  >
                    Full Name
                  </Label>

                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-2 text-slate-400" />
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Rahul"
                      maxLength={50}
                      className="pl-10 rounded-xl"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-xs font-semibold text-[#0B1F33]"
                  >
                    Phone Number
                  </Label>

                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-2 text-slate-400" />

                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="+91 98765 43210"
                      className="pl-10 rounded-xl"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-semibold text-[#0B1F33]"
                  >
                    Email Address
                  </Label>

                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-2 text-slate-400" />

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      className="pl-10 rounded-xl"
                    />
                  </div>
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <Label
                    htmlFor="department"
                    className="text-xs font-semibold text-[#0B1F33]"
                  >
                    Department
                  </Label>

                  <select
                    id="department"
                    name="department"
                    required
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#00BFAF]"
                  >
                    <option value="">
                      Select Department
                    </option>

                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.slug} value={dept.slug}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor */}
                <div className="space-y-2">
                  <Label
                    htmlFor="doctor"
                    className="text-xs font-semibold text-[#0B1F33]"
                  >
                    Select Doctor
                  </Label>

                  <div className="relative">
                    <Stethoscope className="w-4 h-4 absolute left-3 top-3.5 text-slate-400 z-10" />

                    <select
                      id="doctor"
                      name="doctor"
                      required
                      value={selectedDoctor}
                      onChange={handleDoctorChange}
                      className="w-full h-10 pl-10 pr-3 rounded-xl border border-slate-200 bg-white text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#00BFAF]"
                    >
                      <option value="">
                        Select Doctor
                      </option>

                      {MOCK_DOCTORS.map((doctor) => (
                        <option
                          key={doctor.slug}
                          value={doctor.slug}
                        >
                          {doctor.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <Label
                    htmlFor="date"
                    className="text-xs font-semibold text-[#0B1F33]"
                  >
                    Preferred Date
                  </Label>

                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />

                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={selectedDate}
                      onChange={handleDateChange}
                      className="pl-10 rounded-xl"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div className="space-y-2">
                  <Label
                    htmlFor="time"
                    className="text-xs font-semibold text-[#0B1F33]"
                  >
                    Preferred Time Slot
                  </Label>

                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3 top-3 text-slate-400 z-10" />

                    <select
                      id="time"
                      name="time"
                      required
                      disabled={
                        !selectedDoctor ||
                        !selectedDate ||
                        availableTimings.length === 0
                      }
                      className="w-full h-10 pl-10 pr-3 rounded-xl border border-slate-200 bg-white text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#00BFAF] disabled:bg-slate-100 disabled:text-slate-400"
                    >
                      <option value="">
                        {!selectedDoctor
                          ? "Select Doctor First"
                          : !selectedDate
                          ? "Select Date First"
                          : availableTimings.length === 0
                          ? "No Consultation Available"
                          : "Select Time Slot"}
                      </option>

                      {availableTimings.map((timing, index) => (
                        <option
                          key={`${timing.time}-${index}`}
                          value={timing.time}
                        >
                          {timing.time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Show availability information */}
                  {selectedDoctor &&
                    selectedDate &&
                    availableTimings.length === 0 && (
                      <p className="text-xs text-red-500">
                        This doctor is not available for consultation
                        on the selected date.
                      </p>
                    )}
                </div>
              </div>

              {/* WhatsApp Button */}
              {/* <Button
                type="submit"
                disabled={
                  !selectedDoctor ||
                  !selectedDate ||
                  availableTimings.length === 0
                }
                className="w-full bg-[#05EDD6] hover:bg-[#1DA851] hover:text-white text-[#0B1F33] font-bold text-base py-6 rounded-xl transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Appointment on WhatsApp
              </Button> */}
              {/* <Button
  type="submit"
  disabled={
    !selectedDoctor ||
    !selectedDate ||
    availableTimings.length === 0
  }
  className="w-full bg-[#05EDD6] hover:bg-[#1DA851] hover:text-white text-[#0B1F33] font-bold text-base py-6 px-4 rounded-xl transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-normal text-center"
>
  <MessageCircle className="w-5 h-5 shrink-0" />
  <span className="min-w-0 break-words">
    Book Appointment on WhatsApp
  </span>
</Button> */}

<Button
  type="submit"
  disabled={
    !selectedDoctor ||
    !selectedDate ||
    availableTimings.length === 0
  }
  className="w-full bg-[#05EDD6] hover:bg-[#1DA851] hover:text-white text-[#0B1F33] font-bold text-sm sm:text-base py-6 px-3 rounded-xl transition-all mt-4 flex items-center justify-center gap-2 whitespace-nowrap"
>
  <MessageCircle className="w-5 h-5 shrink-0" />
  <span>Book Appointment on WhatsApp</span>
</Button>


              <p className="text-[12px] text-center text-[#64748B]">
                Your appointment details will be securely prepared in
                WhatsApp. Please review them before sending.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}