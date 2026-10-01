
// export const MOCK_DOCTORS = [
//   {
//     slug: "dr-sohil-memon",
//     name: "Dr. Sohil Memon",
//     qualification: "MBBS, DTMH",
//     specialty: "Senior Consultant — Physician",
//     experience: "3+ Years Experience",
//     image: "/drsohel.jpeg",
//     timings: [
//       {
//         days: [
//           "Monday",
//           "Tuesday",
//           "Wednesday",
//           "Thursday",
//           "Friday",
//           "Saturday",
//         ],
//         time: "09:00 AM – 01:00 PM",
//       },
//       {
//         days: [
//           "Monday",
//           "Tuesday",
//           "Wednesday",
//           "Thursday",
//           "Friday",
//           "Saturday",
//         ],
//         time: "05:00 PM – 08:00 PM",
//       },
//     ],
//     description:
// "Dedicated clinical consultant specializing in pulmonary and cardiac conditions, hypertension, and diabetes, with practical expertise in diagnosing and managing complex medical conditions.",
//   },
//   {
//     slug: "dr-chinmay-gandhi",
//     name: "Dr. Chinmay Gandhi",
//     qualification: "MS (Orthopedics)",
//     specialty: "Consultant — Joint Replacement & Trauma",
//     experience: "1+ Year Experience",
//     image: "/drchinmayg.jpeg",
//     timings: [
//       {
//         days: ["Monday", "Wednesday", "Friday"],
//         time: "11:00 AM – 05:00 PM",
//       },
//     ],
//     description:
//       "Orthopedic consultant specializing in joint replacement and trauma care, with an MS in Orthopedics, dedicated to restoring mobility and improving quality of life.",
//   },
//   {
//     slug: "dr-yash-patel",
//     name: "Dr. Yash Patel",
//     qualification: "MS (ENT)",
//     specialty: "Senior Consultant — ENT",
//     experience: "1+ Year Experience",
//     image: "/dryash.jpeg",
//     timings: [
//       {
//         days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//         time: "03:00 PM – 04:00 PM",
//       },
//     ],
//     description:
//       "Senior ENT Consultant with an MS in ENT, specializing in comprehensive ear, nose, and throat care with a focus on accurate diagnosis and patient-centered treatment.",
//   },
//   {
//     slug: "dr-twinkle-sarvaiya",
//     name: "Dr. Twinkle Sarvaiya",
//     qualification: "MD (Dermatology)",
//     specialty: "Dermatologist — Skincare",
//     experience: "1+ Year Experience",
//     image: "/drtwinkles.jpeg",
//     timings: [
//       {
//         days: ["Saturday"],
//         time: "01:00 PM – 02:00 PM",
//       },
//     ],
//     description:
//       "Senior Dermatology Consultant specializing in comprehensive skincare and patient-centered treatment.",
//   },
//   {
//     slug: "dr-shreyansh-patel",
//     name: "Dr. Shreyansh Patel",
//     qualification: "MD,DM (Medical Oncology)",
//     specialty: "Oncologist - Cancer Treatment ",
//     experience: "1+ Year Experience",
//     image: "/drshreyansh.jpeg",
//     timings: [
//       {
//         days: ["Saturday"],
//         time: "02:00 PM – 04:00 PM",
//       },
//     ],
//     description:
//     "Medical Oncologist specializing in cancer care, including the evaluation and management of cancer patients with a focus on personalized treatment planning and supportive care.",
//   },
//   {
//     slug: "dr-bhumika-patel",
//     name: "Dr. Bhumika Patel",
//     qualification: "M.D. (Psychiatry), MBBS",
//     specialty: "Psychiatrist",
//     experience: "1+ Year Experience",
//     image: "/drbhoomika.jpeg",
//     timings: [
//       {
//         days: ["Thursday"],
//         time: "03:00 PM – 04:00 PM",
//       },
//     ],
//     description:
//     "Psychiatrist specializing in the assessment and treatment of mental health conditions, with a patient-centered approach focused on emotional well-being, behavioral health, and personalized care.",
//   },
//   {
//     slug: "dr-mehul-shah",
//     name: "Dr. Mehul Shah",
//     qualification: "MS (Ophthalmology)",
//     specialty: "Ophthalmologist - Eye Treatment",
//     experience: "7+ Year Experience",
//     image: "/drmehul.jpeg",
//     timings: [
//       {
//        days: ["Wednesday"],
//         time: "03:00 PM – 04:00 PM",
//       },
//     ],
//     description:
//     "Ophthalmologist specializing in comprehensive eye care, including the diagnosis and treatment of common eye conditions, with a focus on maintaining and improving patients' vision and eye health.",
//   },
// ];


export const MOCK_DOCTORS = [
  {
    slug: "dr-sohil-memon",
    name: "Dr. Sohil Memon",
    qualification: "MBBS, DTMH",
    specialty: "Senior Consultant — Physician",
    department: "physician",
    experience: "3+ Years Experience",
    image: "/drsohel.jpeg",
    timings: [
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        time: "09:00 AM – 01:00 PM",
      },
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        time: "05:00 PM – 08:00 PM",
      },
    ],
    description:
      "Dedicated clinical consultant specializing in pulmonary and cardiac conditions, hypertension, and diabetes, with practical expertise in diagnosing and managing complex medical conditions.",
  },

  {
    slug: "dr-chinmay-gandhi",
    name: "Dr. Chinmay Gandhi",
    qualification: "MS (Orthopedics)",
    specialty: "Consultant — Joint Replacement & Trauma",
    department: "orthopedics",
    experience: "1+ Year Experience",
    image: "/drchinmayg.jpeg",
    timings: [
      {
        days: ["Monday", "Wednesday", "Friday"],
        time: "11:00 AM – 05:00 PM",
      },
    ],
    description:
      "Orthopedic consultant specializing in joint replacement and trauma care, with an MS in Orthopedics, dedicated to restoring mobility and improving quality of life.",
  },

  {
    slug: "dr-yash-patel",
    name: "Dr. Yash Patel",
    qualification: "MS (ENT)",
    specialty: "Senior Consultant — ENT",
    department: "ent",
    experience: "1+ Year Experience",
    image: "/dryash.jpeg",
    timings: [
      {
        days: ["Tuesday","Saturday"],
        time: "03:00 PM – 04:00 PM",
      },
    ],
    description:
      "Senior ENT Consultant with an MS in ENT, specializing in comprehensive ear, nose, and throat care with a focus on accurate diagnosis and patient-centered treatment.",
  },

  {
    slug: "dr-twinkle-sarvaiya",
    name: "Dr. Twinkle Sarvaiya",
    qualification: "MD (Dermatology)",
    specialty: "Dermatologist — Skincare",
    department: "dermatology",
    experience: "1+ Year Experience",
    image: "/drtwinkles.jpeg",
    timings: [
      {
        days: ["Saturday"],
        time: "01:00 PM – 02:00 PM",
      },
    ],
    description:
      "Senior Dermatology Consultant specializing in comprehensive skincare and patient-centered treatment.",
  },

  {
    slug: "dr-shreyansh-patel",
    name: "Dr. Shreyansh Patel",
    qualification: "MD,DM (Medical Oncology)",
    specialty: "Oncologist - Cancer Treatment",
    department: "oncology",
    experience: "1+ Year Experience",
    image: "/drshreyansh.jpeg",
    timings: [
      {
        days: ["Saturday"],
        time: "02:00 PM – 04:00 PM",
      },
    ],
    description:
      "Medical Oncologist specializing in cancer care, including the evaluation and management of cancer patients with a focus on personalized treatment planning and supportive care.",
  },

  {
    slug: "dr-bhumika-patel",
    name: "Dr. Bhumika Patel",
    qualification: "M.D. (Psychiatry)",
    specialty: "Psychiatrist",
    department: "psychiatry",
    experience: "1+ Year Experience",
    image: "/drbhoomika.jpeg",
    timings: [
      {
        days: ["Thursday"],
        time: "03:00 PM – 04:00 PM",
      },
    ],
    description:
      "Psychiatrist specializing in the assessment and treatment of mental health conditions, with a patient-centered approach focused on emotional well-being, behavioral health, and personalized care.",
  },

  {
    slug: "dr-mehul-shah",
    name: "Dr. Mehul Shah",
    qualification: "MS (Ophthalmology)",
    specialty: "Ophthalmologist - Eye Treatment",
    department: "ophthalmology",
    experience: "7+ Year Experience",
    image: "/drmehul.jpeg",
    timings: [
      {
        days: ["Wednesday"],
        time: "03:00 PM – 04:00 PM",
      },
    ],
    description:
      "Ophthalmologist specializing in comprehensive eye care, including the diagnosis and treatment of common eye conditions, with a focus on maintaining and improving patients' vision and eye health.",
  },
  {
    slug: "dr-saalim-kadiyawala",
    name: "Dr. Saalim Kadiyawala",
    qualification: "MD (Pediatrics)",
    specialty: "Pediatrician - Child Care",
    department: "pediatric",
    experience: "3+ Year Experience",
    image: "/drsaalim.jpg",
    timings: [
      {
        days: ["Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"],
        time: "09:30 AM – 11:00 AM",
      },
    ],
    description:
"Pediatrician specializing in comprehensive child healthcare, including the diagnosis and treatment of common childhood illnesses, with a focus on supporting healthy growth, development, and overall well-being.",  },
];


export const DEPARTMENTS = [
  {
    slug: "physician",
    name: "Physician",
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
  },
  {
    slug: "ent",
    name: "ENT",
  },
  {
    slug: "dermatology",
    name: "Dermatology",
  },
  {
    slug: "oncology",
    name: "Oncology",
  },
  {
    slug: "psychiatry",
    name: "Psychiatry",
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
  },
  {
    slug: "pediatric",
    name: "pediatric"
  }
];
