import { HOSPITAL_INFO } from "./constants";


export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.unityonehealthcentre.com/#website",
    name: "Unityone Health Centre",
    alternateName: ["Unityone", "Unityone Polyclinic"],
    url: "https://www.unityonehealthcentre.com",
  };
}


export function getHospitalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "@id": "https://www.unityonehealthcentre.com/#hospital",
    name: HOSPITAL_INFO.name,
    alternateName: "UnityOne Polyclinic",
    url: "https://www.unityonehealthcentre.com",
    logo: "https://www.unityonehealthcentre.com/logo512.png",
    image: "https://www.unityonehealthcentre.com/unityonegmb.png", //change this image 
    telephone: HOSPITAL_INFO.phone,
    emergencyTelephone: HOSPITAL_INFO.emergencyPhone,
    email: HOSPITAL_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unityone Health Centre, Opp Sahar Party Plot, Marida Bhagol,Nadiad",
      addressLocality: "Nadiad",
      addressRegion: "Gujarat",
      postalCode: "387001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.70025906361386",
      longitude: "72.86950455324114",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    medicalSpecialty: [
      "Diabetes & Hypertension",
      "Dermatology",
      "Orthopedic",
      "Pediatric",
      "GeneralCare",
    ],
    isAcceptingNewPatients: true,
  };
}

export function getPhysicianSchema(doctor: {
  name: string;
  specialty: string;
  qualification: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.specialty,
    description: doctor.qualification,
    image: doctor.image,
    url: `https://www.unityonehealthcentre.com/doctors/${doctor.slug}`,
    worksFor: {
      "@type": "Hospital",
      name: HOSPITAL_INFO.name,
    },
    medicalSpecialty: doctor.specialty,
  };
}

export function getFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}