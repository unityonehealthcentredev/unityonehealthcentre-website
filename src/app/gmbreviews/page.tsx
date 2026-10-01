"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  ExternalLink,
  Heart,
  Languages,
  Sparkles,
  Star,
} from "lucide-react";

const GOOGLE_REVIEW_URL =
  "https://g.page/r/CS6QfRKHw2kqEBM/review";

type Language = "en" | "gu";
type Step = "language" | "department" | "experience" | "review";

const DEPARTMENTS = [
    {
  slug: "physician",
  en: "Physician",
  gu: "ફિઝિશિયન - હૃદય, ડાયાબિટીસ, થાઈરોઇડ, બ્લડ પ્રેશર વગેરેના ડોક્ટર",
},
{
  slug: "orthopedics",
  en: "Orthopedics",
  gu: "ઓર્થોપેડિક્સ - હાડકાંના ડોક્ટર",
},
{
  slug: "ent",
  en: "ENT",
  gu: "કાન-નાક-ગળા",
},
{
  slug: "dermatology",
  en: "Dermatology",
  gu: "ડર્મેટોલોજી - ચામડીના ડોક્ટર",
},
{
  slug: "oncology",
  en: "Oncology",
  gu: "ઓન્કોલોજી - કેન્સરના ડોક્ટર",
},
{
  slug: "psychiatry",
  en: "Psychiatry",
  gu: "સાયકિયાટ્રી - માનસિક સ્વાસ્થ્યના ડોક્ટર",
},
{
  slug: "ophthalmology",
  en: "Ophthalmology",
  gu: "ઓપ્થેલ્મોલોજી - આંખોના ડોક્ટર",
},
{
  slug: "pediatric",
  en: "Pediatrics",
  gu: "બાળરોગ - બાળકોના ડોક્ટર",
},

//   {
//     slug: "physician",
//     en: "Physician",
//     gu: "ફિઝિશિયન",
//   },
//   {
//     slug: "orthopedics",
//     en: "Orthopedics",
//     gu: "ઓર્થોપેડિક્સ - ",
//   },
//   {
//     slug: "ent",
//     en: "ENT",
//     gu: "કાન-નાક-ગળા",
//   },
//   {
//     slug: "dermatology",
//     en: "Dermatology",
//     gu: "ડર્મેટોલોજી",
//   },
//   {
//     slug: "oncology",
//     en: "Oncology",
//     gu: "ઓન્કોલોજી",
//   },
//   {
//     slug: "psychiatry",
//     en: "Psychiatry",
//     gu: "સાયકિયાટ્રી",
//   },
//   {
//     slug: "ophthalmology",
//     en: "Ophthalmology",
//     gu: "ઓપ્થેલ્મોલોજી",
//   },
//   {
//     slug: "pediatric",
//     en: "Pediatrics",
//     gu: "બાળરોગ",
//   },
];

const EXPERIENCE_OPTIONS = [
  {
    id: "doctor-listened",
    en: "Doctor listened carefully",
    gu: "ડૉક્ટરે ધ્યાનથી વાત સાંભળી",
  },
  {
    id: "doctor-explained",
    en: "Doctor explained clearly",
    gu: "ડૉક્ટરે દરેક બાબત સરળતાથી સમજાવી",
  },
  {
    id: "staff-helpful",
    en: "Staff was helpful",
    gu: "સ્ટાફ મદદરૂપ રહ્યો",
  },
  {
    id: "staff-courteous",
    en: "Staff was courteous",
    gu: "સ્ટાફનો વ્યવહાર સારો રહ્યો",
  },
  {
    id: "appointment",
    en: "Appointment was smooth",
    gu: "એપોઇન્ટમેન્ટની પ્રક્રિયા સરળ રહી",
  },
  {
    id: "waiting",
    en: "Waiting time was reasonable",
    gu: "રાહ જોવાનો સમય યોગ્ય રહ્યો",
  },
  {
    id: "clean",
    en: "Clinic was clean",
    gu: "ક્લિનિક સ્વચ્છ હતી",
  },
  {
    id: "comfortable",
    en: "Clinic was comfortable",
    gu: "ક્લિનિકનું વાતાવરણ આરામદાયક હતું",
  },
  {
    id: "treatment",
    en: "Treatment was explained well",
    gu: "સારવાર વિશે સારી રીતે સમજાવવામાં આવ્યું",
  },
  {
    id: "facilities",
    en: "Facilities were good",
    gu: "સુવિધાઓ સારી હતી",
  },
  {
    id: "overall",
    en: "Overall experience was good",
    gu: "એકંદર અનુભવ સારો રહ્યો",
  },
];

const TEXT = {
  en: {
    language: "Choose your language for review",
    languageSub: "તમારી ભાષા પસંદ કરો",
    english: "English",
    gujarati: "ગુજરાતી",

    departmentTitle: "What did you visit us for?",
    departmentSub: "Select the department you visited",

    experienceTitle: "How was your experience?",
    experienceSub:
      "Select everything that genuinely describes your visit",

    continue: "Continue",
    back: "Back",

    generate: "Create My Review",

    reviewTitle: "Your Review",
    reviewSub:
      "We've created a draft from your selections. Feel free to edit it.",

    editHint: "You can edit this before posting.",

    extraTitle: "Anything else you'd like to mention?",
    optional: "Optional",
    extraPlaceholder:
      "Add your own words if you'd like...",

    copyGoogle: "Copy & Continue to Google",
    copied: "Copied! Opening Google...",

    googleNote:
      "Your review will open on Google. Paste your text, choose the rating that reflects your experience, and post your review.",

    privacy:
      "Your review is written and submitted by you. Please make sure it reflects your genuine experience.",

    selected: "selected",

    selectDepartment:
      "Please select the department you visited.",

    selectExperience:
      "Please select at least one option.",

    startAgain: "Start Again",
  },

  gu: {
    language: "તમારી ભાષા પસંદ કરો",
    languageSub: "Choose your language",
    english: "English",
    gujarati: "ગુજરાતી",

    departmentTitle: "તમે કયા વિભાગની મુલાકાત લીધી?",
    departmentSub: "તમે જે વિભાગમાં ગયા હતા તે પસંદ કરો",

    experienceTitle: "તમારો અનુભવ કેવો રહ્યો?",
    experienceSub:
      "તમારા અનુભવને ખરેખર દર્શાવતા વિકલ્પો પસંદ કરો",

    continue: "આગળ વધો",
    back: "પાછળ",

    generate: "મારો રિવ્યૂ બનાવો",

    reviewTitle: "તમારો રિવ્યૂ",
    reviewSub:
      "તમારી પસંદગીઓ પરથી રિવ્યૂ તૈયાર કરવામાં આવ્યો છે. તમે તેને બદલી શકો છો.",

    editHint: "પોસ્ટ કરતા પહેલા તમે તેમાં ફેરફાર કરી શકો છો.",

    extraTitle: "શું તમે બીજું કંઈ જણાવવા માંગો છો?",
    optional: "વૈકલ્પિક",
    extraPlaceholder:
      "જો ઇચ્છો તો તમારા શબ્દોમાં લખો...",

    copyGoogle: "કૉપી કરો અને Google પર જાઓ",
    copied: "કૉપી થઈ ગયું! Google ખોલી રહ્યા છીએ...",

    googleNote:
      "તમારો રિવ્યૂ Google પર ખુલશે. ટેક્સ્ટ પેસ્ટ કરો, તમારા સાચા અનુભવ પ્રમાણે રેટિંગ પસંદ કરો અને રિવ્યૂ પોસ્ટ કરો.",

    privacy:
      "તમારો રિવ્યૂ તમારા દ્વારા જ લખવામાં અને સબમિટ કરવામાં આવે છે. કૃપા કરીને ખાતરી કરો કે તે તમારા સાચા અનુભવને દર્શાવે છે.",

    selected: "પસંદ",

    selectDepartment:
      "કૃપા કરીને તમે મુલાકાત લીધેલો વિભાગ પસંદ કરો.",

    selectExperience:
      "કૃપા કરીને ઓછામાં ઓછો એક વિકલ્પ પસંદ કરો.",

    startAgain: "ફરી શરૂ કરો",
  },
};

function generateReview(
  language: Language,
  department: string,
  selectedOptions: string[],
  extraText: string
) {
  const isGujarati = language === "gu";

  const departmentData = DEPARTMENTS.find(
    (item) => item.slug === department
  );

  const departmentName =
    departmentData?.[isGujarati ? "gu" : "en"] || "";

  if (isGujarati) {
    const sentences: string[] = [];

    sentences.push(
      `Unityone Health Centre ખાતે ${departmentName} વિભાગમાં મારો અનુભવ સારો રહ્યો.`
    );

    if (selectedOptions.includes("doctor-listened")) {
      sentences.push("ડૉક્ટરે મારી વાત ધ્યાનથી સાંભળી.");
    }

    if (selectedOptions.includes("doctor-explained")) {
      sentences.push(
        "ડૉક્ટરે દરેક બાબત સરળતાથી અને સ્પષ્ટ રીતે સમજાવી."
      );
    }

    if (selectedOptions.includes("staff-helpful")) {
      sentences.push("સ્ટાફ ખૂબ મદદરૂપ રહ્યો.");
    }

    if (selectedOptions.includes("staff-courteous")) {
      sentences.push("સ્ટાફનો વ્યવહાર ખૂબ સારો અને વિનમ્ર રહ્યો.");
    }

    if (selectedOptions.includes("appointment")) {
      sentences.push("એપોઇન્ટમેન્ટની પ્રક્રિયા સરળ રહી.");
    }

    if (selectedOptions.includes("waiting")) {
      sentences.push("રાહ જોવાનો સમય પણ યોગ્ય રહ્યો.");
    }

    if (selectedOptions.includes("clean")) {
      sentences.push(
        "ક્લિનિક સ્વચ્છ અને સારી રીતે જાળવવામાં આવી હતી."
      );
    }

    if (selectedOptions.includes("comfortable")) {
      sentences.push(
        "ક્લિનિકનું વાતાવરણ આરામદાયક હતું."
      );
    }

    if (selectedOptions.includes("treatment")) {
      sentences.push(
        "સારવાર વિશે યોગ્ય રીતે સમજાવવામાં આવ્યું."
      );
    }

    if (selectedOptions.includes("facilities")) {
      sentences.push(
        "ક્લિનિકની સુવિધાઓ સારી હતી."
      );
    }

    if (selectedOptions.includes("overall")) {
      sentences.push(
        "એકંદરે મારો અનુભવ ખૂબ સારો રહ્યો."
      );
    }

    if (extraText.trim()) {
      sentences.push(extraText.trim());
    }

    return sentences.join(" ");
  }

  const sentences: string[] = [];

  sentences.push(
    `I had a good experience at Unityone Health Centre in the ${departmentName} department.`
  );

  if (selectedOptions.includes("doctor-listened")) {
    sentences.push(
      "The doctor listened carefully to my concerns."
    );
  }

  if (selectedOptions.includes("doctor-explained")) {
    sentences.push(
      "The doctor explained everything clearly and patiently."
    );
  }

  if (selectedOptions.includes("staff-helpful")) {
    sentences.push(
      "The staff was helpful and supportive."
    );
  }

  if (selectedOptions.includes("staff-courteous")) {
    sentences.push(
      "The staff was courteous and welcoming."
    );
  }

  if (selectedOptions.includes("appointment")) {
    sentences.push(
      "The appointment process was smooth and convenient."
    );
  }

  if (selectedOptions.includes("waiting")) {
    sentences.push(
      "The waiting time was reasonable."
    );
  }

  if (selectedOptions.includes("clean")) {
    sentences.push(
      "The clinic was clean and well maintained."
    );
  }

  if (selectedOptions.includes("comfortable")) {
    sentences.push(
      "The clinic had a comfortable environment."
    );
  }

  if (selectedOptions.includes("treatment")) {
    sentences.push(
      "The treatment and next steps were explained clearly."
    );
  }

  if (selectedOptions.includes("facilities")) {
    sentences.push(
      "The facilities were good and well maintained."
    );
  }

  if (selectedOptions.includes("overall")) {
    sentences.push(
      "Overall, I had a positive experience."
    );
  }

  if (extraText.trim()) {
    sentences.push(extraText.trim());
  }

  return sentences.join(" ");
}

export default function GoogleReviewPage() {
  const [language, setLanguage] = useState<Language>("en");

  const [step, setStep] = useState<Step>("language");

  const [department, setDepartment] = useState("");

  const [selectedOptions, setSelectedOptions] =
    useState<string[]>([]);

  const [extraText, setExtraText] = useState("");

  const [review, setReview] = useState("");

  const [copied, setCopied] = useState(false);

  const t = TEXT[language];

  const toggleOption = (id: string) => {
    setSelectedOptions((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const generatedReview = useMemo(() => {
    if (!department || selectedOptions.length === 0) {
      return "";
    }

    return generateReview(
      language,
      department,
      selectedOptions,
      extraText
    );
  }, [
    language,
    department,
    selectedOptions,
    extraText,
  ]);

  /*
   * STEP 1
   */
  const handleLanguageContinue = () => {
    setStep("department");
  };

  /*
   * STEP 2
   */
  const handleDepartmentContinue = () => {
    if (!department) {
      alert(t.selectDepartment);
      return;
    }

    setStep("experience");
  };

  /*
   * STEP 3
   */
  const handleGenerateReview = () => {
    if (selectedOptions.length === 0) {
      alert(t.selectExperience);
      return;
    }

    const generated = generateReview(
      language,
      department,
      selectedOptions,
      extraText
    );

    setReview(generated);
    setStep("review");
  };

  /*
   * COPY + OPEN GOOGLE
   */
  const handleCopyAndOpenGoogle = async () => {
    if (!review.trim()) return;

    try {
      await navigator.clipboard.writeText(review);

      setCopied(true);

      setTimeout(() => {
        window.location.href = GOOGLE_REVIEW_URL;
      }, 700);
    } catch (error) {
      console.error("Clipboard error:", error);

      // Clipboard fallback
      const textarea =
        document.createElement("textarea");

      textarea.value = review;

      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      document.execCommand("copy");

      document.body.removeChild(textarea);

      setCopied(true);

      setTimeout(() => {
        window.location.href = GOOGLE_REVIEW_URL;
      }, 700);
    }
  };

  /*
   * RESET
   */
  const startAgain = () => {
    setStep("language");
    setDepartment("");
    setSelectedOptions([]);
    setExtraText("");
    setReview("");
    setCopied(false);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="border-b border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto px-5 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Unityone Health Centre"
              className="h-12 w-auto object-contain"
            />

            <div className="hidden sm:block">
              <p className="font-bold text-slate-900">
                Unityone Health Centre
              </p>

              <p className="text-xs text-slate-500">
                Healing hands, Caring Hearts
              </p>
            </div>

          </div>

          {/* LANGUAGE */}
          <div className="flex items-center gap-1 p-1 bg-slate-50 border border-slate-200 rounded-full">

            <Languages className="w-4 h-4 text-slate-400 ml-2" />

            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                language === "en"
                  ? "bg-[#05EDD6] text-slate-900"
                  : "text-slate-500"
              }`}
            >
              English
            </button>

            <button
              onClick={() => setLanguage("gu")}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                language === "gu"
                  ? "bg-[#05EDD6] text-slate-900"
                  : "text-slate-500"
              }`}
            >
              ગુજરાતી
            </button>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <div className="max-w-3xl mx-auto px-5 py-10 sm:py-16">

        {/* ================= LANGUAGE ================= */}

        {step === "language" && (
          <div>

            <div className="text-center mb-10">

              <div className="mx-auto w-16 h-16 rounded-2xl bg-[#05EDD6]/10 flex items-center justify-center mb-5">
                <Heart className="w-8 h-8 text-[#05EDD6]" />
              </div>

              <p className="text-xs font-bold tracking-widest uppercase text-[#008F86] mb-3">
                UNITYONE HEALTH CENTRE | Google Review Help
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold">
                {t.language}
              </h1>

              <p className="text-slate-500 mt-3">
                {t.languageSub}
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">

              <button
                onClick={() => setLanguage("en")}
                className={`p-6 rounded-2xl border-2 text-left transition ${
                  language === "en"
                    ? "border-[#05EDD6] bg-[#05EDD6]/5"
                    : "border-slate-200 hover:border-[#05EDD6]/50"
                }`}
              >

                <span className="text-3xl">
                  🇬🇧
                </span>

                <p className="font-bold text-lg mt-4">
                  English
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Write your review in English
                </p>

                {language === "en" && (
                  <div className="mt-4 w-7 h-7 rounded-full bg-[#05EDD6] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                )}

              </button>

              <button
                onClick={() => setLanguage("gu")}
                className={`p-6 rounded-2xl border-2 text-left transition ${
                  language === "gu"
                    ? "border-[#05EDD6] bg-[#05EDD6]/5"
                    : "border-slate-200 hover:border-[#05EDD6]/50"
                }`}
              >

                <span className="text-3xl">
                  🇮🇳
                </span>

                <p className="font-bold text-lg mt-4">
                  ગુજરાતી
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  ગુજરાતીમાં રિવ્યૂ લખો
                </p>

                {language === "gu" && (
                  <div className="mt-4 w-7 h-7 rounded-full bg-[#05EDD6] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                )}

              </button>

            </div>

            <button
              onClick={handleLanguageContinue}
              className="w-full max-w-xl mx-auto mt-8 flex items-center justify-center gap-2 bg-[#05EDD6] hover:bg-[#00d8c3] text-slate-950 font-bold py-4 px-6 rounded-xl"
            >
              {t.continue}

              <ArrowRight className="w-5 h-5" />
            </button>

          </div>
        )}

        {/* ================= DEPARTMENT ================= */}

        {step === "department" && (
          <div>

            <button
              onClick={() => setStep("language")}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />

              {t.back}
            </button>

            <div className="mb-8">

              <p className="text-xs font-bold uppercase tracking-widest text-[#008F86] mb-2">
                STEP 1 OF 2
              </p>

              <h1 className="text-3xl font-bold">
                {t.departmentTitle}
              </h1>

              <p className="text-slate-500 mt-2">
                {t.departmentSub}
              </p>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

              {DEPARTMENTS.map((item) => {

                const selected =
                  department === item.slug;

                return (
                  <button
                    key={item.slug}
                    onClick={() =>
                      setDepartment(item.slug)
                    }
                    className={`relative p-4 rounded-xl border-2 text-left transition ${
                      selected
                        ? "border-[#05EDD6] bg-[#05EDD6]/5"
                        : "border-slate-200 hover:border-[#05EDD6]/50"
                    }`}
                  >

                    {selected && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#05EDD6] flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                    )}

                    <p className="font-semibold text-sm">
                      {item[language]}
                    </p>

                  </button>
                );
              })}

            </div>

            <button
              disabled={!department}
              onClick={handleDepartmentContinue}
              className="w-full mt-8 flex items-center justify-center gap-2 bg-[#05EDD6] disabled:bg-slate-200 disabled:text-slate-400 hover:bg-[#00d8c3] text-slate-950 font-bold py-4 px-6 rounded-xl transition"
            >
              {t.continue}

              <ArrowRight className="w-5 h-5" />
            </button>

          </div>
        )}

        {/* ================= EXPERIENCE ================= */}

        {step === "experience" && (
          <div>

            <button
              onClick={() => setStep("department")}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />

              {t.back}
            </button>

            <div className="mb-8">

              <p className="text-xs font-bold uppercase tracking-widest text-[#008F86] mb-2">
                STEP 2 OF 2
              </p>

              <h1 className="text-3xl font-bold">
                {t.experienceTitle}
              </h1>

              <p className="text-slate-500 mt-2">
                {t.experienceSub}
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {EXPERIENCE_OPTIONS.map((item) => {

                const selected =
                  selectedOptions.includes(item.id);

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      toggleOption(item.id)
                    }
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition ${
                      selected
                        ? "border-[#05EDD6] bg-[#05EDD6]/5"
                        : "border-slate-200 hover:border-[#05EDD6]/50"
                    }`}
                  >

                    <div
                      className={`w-5 h-5 shrink-0 rounded-md border flex items-center justify-center ${
                        selected
                          ? "bg-[#05EDD6] border-[#05EDD6]"
                          : "border-slate-300"
                      }`}
                    >
                      {selected && (
                        <Check className="w-3.5 h-3.5" />
                      )}
                    </div>

                    <span className="text-sm font-medium">
                      {item[language]}
                    </span>

                  </button>
                );
              })}

            </div>

            <div className="mt-8">

              <div className="flex items-center justify-between mb-2">

                <label className="text-sm font-semibold">
                  {t.extraTitle}
                </label>

                <span className="text-xs text-slate-400">
                  {t.optional}
                </span>

              </div>

              <textarea
                value={extraText}
                onChange={(e) =>
                  setExtraText(e.target.value)
                }
                placeholder={t.extraPlaceholder}
                rows={4}
                className="w-full rounded-xl border border-slate-200 focus:border-[#05EDD6] focus:ring-2 focus:ring-[#05EDD6]/20 outline-none p-4 text-sm resize-none"
              />

            </div>

            <button
              disabled={selectedOptions.length === 0}
              onClick={handleGenerateReview}
              className="w-full mt-6 flex items-center justify-center gap-2 bg-[#05EDD6] disabled:bg-slate-200 disabled:text-slate-400 hover:bg-[#00d8c3] text-slate-950 font-bold py-4 px-6 rounded-xl transition"
            >
              <Sparkles className="w-5 h-5" />

              {t.generate}
            </button>

          </div>
        )}

        {/* ================= REVIEW ================= */}

        {step === "review" && (
          <div>

            <div className="text-center mb-8">

              <div className="mx-auto w-14 h-14 rounded-full bg-[#05EDD6]/10 flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-[#05EDD6]" />
              </div>

              <h1 className="text-3xl font-bold">
                {t.reviewTitle}
              </h1>

              <p className="text-slate-500 mt-2">
                {t.reviewSub}
              </p>

            </div>

            {/* REVIEW CARD */}

            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">

              <div className="px-5 py-4 border-b border-slate-100 bg-slate-50 flex items-center gap-3">

                <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {t.reviewTitle}
                  </p>

                  <p className="text-xs text-slate-500">
                    Unityone Health Centre
                  </p>
                </div>

              </div>

              <div className="p-5">

                <textarea
                  value={review}
                  onChange={(e) =>
                    setReview(e.target.value)
                  }
                  rows={9}
                  className="w-full border-0 outline-none resize-none text-[15px] leading-7 text-slate-700 bg-transparent"
                />

                <p className="text-xs text-slate-400 mt-2">
                  {t.editHint}
                </p>

              </div>

            </div>

            {/* GOOGLE INFO */}

            <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4">

              <div className="flex gap-3">

                <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  <span className="font-bold">
                    <span className="text-[#4285F4]">
                      G
                    </span>
                  </span>
                </div>

                <p className="text-xs leading-5 text-slate-500">
                  {t.googleNote}
                </p>

              </div>

            </div>

            {/* COPY BUTTON */}

            <button
              onClick={handleCopyAndOpenGoogle}
              disabled={!review.trim() || copied}
              className="w-full mt-6 flex items-center justify-center gap-2 bg-[#05EDD6] hover:bg-[#00d8c3] disabled:bg-[#05EDD6] text-slate-950 font-bold py-4 px-6 rounded-xl transition"
            >

              {copied ? (
                <>
                  <Check className="w-5 h-5" />

                  {t.copied}
                </>
              ) : (
                <>
                  <Clipboard className="w-5 h-5" />

                  {t.copyGoogle}

                  <ExternalLink className="w-4 h-4" />
                </>
              )}

            </button>

            <button
              onClick={startAgain}
              className="w-full mt-3 py-3 text-sm font-semibold text-slate-500 hover:text-slate-900"
            >
              {t.startAgain}
            </button>

            <p className="text-center text-[11px] leading-5 text-slate-400 max-w-md mx-auto mt-8">
              {t.privacy}
            </p>

          </div>
        )}

      </div>

      {/* FOOTER */}

      <footer className="border-t border-slate-100 py-6">

        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Unityone Health Centre
        </p>

      </footer>

    </main>
  );
}
