import education from "@/assets/program-education.jpg";
import environment from "@/assets/program-environment.jpg";
import employability from "@/assets/program-employability.jpg";
import empowerment from "@/assets/program-empowerment.jpg";
import sports from "@/assets/program-sports.jpg";
import aaliya from "@/assets/volunteer-aaliya.jpg";
import imran from "@/assets/volunteer-imran.jpg";
import zoya from "@/assets/volunteer-zoya.jpg";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/stories", label: "Stories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

export const IMPACT_STATS = [
  { number: 42, suffix: "+", label: "Villages reached" },
  { number: 6800, suffix: "+", label: "Students supported" },
  { number: 320, suffix: "", label: "Active volunteers" },
  { number: 18, suffix: "", label: "Schools partnered" },
  { number: 2400, suffix: "+", label: "Women in skill programs" },
  { number: 12000, suffix: "+", label: "Saplings planted" },
];

export type Program = {
  slug: "education" | "environment" | "employability" | "empowerment" | "sports";
  name: string;
  hook: string;
  narrative: string;
  image: string;
  stat: { number: string; label: string };
  entries: { name: string; story: string }[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "education",
    name: "Education",
    hook: "We help every child keep learning — no matter how far the road.",
    narrative:
      "In the villages we walk to, a school day can begin with a two-hour climb. Our volunteers meet children where they are — with books, mentors, tuition circles, and libraries stitched into the mountains. Learning here is not a program. It is a relay of hope, carried from one village to the next.",
    image: education,
    stat: { number: "6,800+", label: "students in our learning circles" },
    entries: [
      { name: "Mountain Libraries", story: "Small, sunlit reading corners set up inside village panchayat homes." },
      { name: "After-School Tuition", story: "Free evening tuition run by senior students and college volunteers." },
      { name: "Scholarship Support", story: "Merit-and-need stipends for girls continuing beyond Class 10." },
    ],
  },
  {
    slug: "environment",
    name: "Environment",
    hook: "The forests raised us. Now we raise them back.",
    narrative:
      "The slopes above Bandipora are the reason our valleys stay green. We plant, we clean, and we teach — because a mountain forgotten is a mountain lost. Every sapling is a promise, made by a young volunteer, to a place that has always given more than it asked.",
    image: environment,
    stat: { number: "12,000+", label: "saplings planted with village youth" },
    entries: [
      { name: "Green Peaks Drive", story: "Annual community plantation across village boundaries in Bandipora." },
      { name: "Clean Wular Initiative", story: "Youth-led waste cleanup along the Wular lake shore." },
      { name: "School Eco-Clubs", story: "Weekly nature clubs in partner schools, run by senior students." },
    ],
  },
  {
    slug: "employability",
    name: "Employability",
    hook: "Skills that stay when the season ends.",
    narrative:
      "For a mountain household, one steady income can change everything. We run practical, dignified skill programs — tailoring, digital work, small business basics — designed alongside the young women and men actually looking for work. No brochures. No spectators. Just skills that fit real lives.",
    image: employability,
    stat: { number: "2,400+", label: "young people trained" },
    entries: [
      { name: "Digital Literacy Labs", story: "Basic computer, typing and internet-safety training in partner schools." },
      { name: "Tailoring Cohorts", story: "6-month cohorts for young women, ending with a starter kit." },
      { name: "Youth Entrepreneurship", story: "Micro-business mentoring for first-time earners." },
    ],
  },
  {
    slug: "empowerment",
    name: "Empowerment",
    hook: "When one woman speaks, a village listens.",
    narrative:
      "Empowerment here does not arrive in a workshop hall. It arrives when a mother asks the panchayat a question no one asked before. We support women-led collectives, health circles, and legal-rights awareness — quietly, patiently, and always led by the women themselves.",
    image: empowerment,
    stat: { number: "36", label: "women-led village collectives" },
    entries: [
      { name: "Women's Health Circles", story: "Monthly gatherings with nurses, health workers and volunteers." },
      { name: "Rights & Documentation", story: "Support with ID, banking and government-scheme paperwork." },
      { name: "Community Leadership", story: "Coaching for women standing in local panchayat elections." },
    ],
  },
  {
    slug: "sports",
    name: "Sports",
    hook: "One game. One spirit. One victory.",
    narrative:
      "Sport is how our young people practice courage. Under the aegis of Nashamukt Bharat Abhiyan, we run tournaments and coaching camps that pull an entire district onto the same field — boys and girls, sub-junior to senior. Come. Compete. Conquer.",
    image: sports,
    stat: { number: "4", label: "district championships hosted" },
    entries: [
      {
        name: "District Ball Badminton Championship 2026–27",
        story: "4th edition. SK Stadium, Bandipora. Both boys and girls, sub-junior to senior. 19–20 June 2026.",
      },
      { name: "Village Football League", story: "Inter-village league across summer months in remote panchayats." },
      { name: "Girls-Only Coaching Camps", story: "Weekend coaching camps for girls in athletics and volleyball." },
    ],
  },
];

export const VOLUNTEERS = [
  {
    name: "Aaliya",
    location: "Sopore, J&K",
    contribution: "Teaches weekend English circles for Class 6–8 girls.",
    story: "I grew up two valleys from here. Teaching where I once studied is the closest thing to coming home twice.",
    image: aaliya,
  },
  {
    name: "Imran",
    location: "Bandipora, J&K",
    contribution: "Leads the Green Peaks plantation drive.",
    story: "I planted my first sapling with my grandfather. Now I plant with 40 kids every Saturday.",
    image: imran,
  },
  {
    name: "Zoya",
    location: "Delhi (from Baramulla)",
    contribution: "Mentors first-generation college applicants remotely.",
    story: "Being far from home does not mean being far from your people. Every call is a small road back.",
    image: zoya,
  },
];

export const STORIES = [
  {
    slug: "the-road-to-class-nine",
    title: "The road to Class Nine",
    excerpt: "Sana walked 6 km to school every day. This year, so did her little sister.",
    category: "Education",
    quote: "I did not want to be the last girl in my family to finish school.",
    attribution: "Sana, 15 — Bandipora",
    image: education,
  },
  {
    slug: "planting-with-grandfathers",
    title: "Planting with grandfathers",
    excerpt: "How one village turned a barren slope into 900 young pine trees.",
    category: "Environment",
    quote: "The forest was my classroom before I ever had one.",
    attribution: "Imran, volunteer",
    image: environment,
  },
  {
    slug: "the-first-serve",
    title: "The first serve",
    excerpt: "For most of these girls, it was the first time they held a racquet.",
    category: "Sports",
    quote: "We played until the mountains went dark.",
    attribution: "Ball Badminton participant, 2025",
    image: sports,
  },
];

export const EVENTS = [
  {
    slug: "ball-badminton-championship-2026",
    title: "4th District Bandipora Ball Badminton Championship",
    date: "19–20 June 2026",
    location: "SK Stadium, Bandipora, Jammu & Kashmir",
    category: "Sports",
    description:
      "Boys and girls, sub-junior to senior. Come. Compete. Conquer. Under the aegis of Nashamukt Bharat Abhiyan — Drug Free Bandipora.",
    image: sports,
    program: "sports" as const,
  },
  {
    slug: "green-peaks-plantation-drive-2026",
    title: "Green Peaks Plantation Drive",
    date: "Autumn 2026",
    location: "Bandipora hillslopes",
    category: "Environment",
    description: "A district-wide plantation drive with village schools and youth groups.",
    image: environment,
    program: "environment" as const,
  },
  {
    slug: "winter-learning-camp-2026",
    title: "Winter Learning Camp",
    date: "December 2026",
    location: "Bandipora village schools",
    category: "Education",
    description: "Two weeks of maths, English and creative-writing circles across partner schools.",
    image: education,
    program: "education" as const,
  },
];

export const PARTNERS = [
  { name: "Nashamukt Bharat Abhiyan", type: "Government" },
  { name: "District Administration, Bandipora", type: "Government" },
  { name: "SK Stadium", type: "Institutional" },
  { name: "J&K Sports Council", type: "Sports" },
  { name: "Local Panchayats", type: "Community" },
  { name: "Village Schools Network", type: "Institutional" },
];

export const MILESTONES = [
  { year: "2019", title: "A movement begins", body: "First volunteers walk into three villages with books and a plan." },
  { year: "2021", title: "The first library", body: "A single-room mountain library opens in a partner village." },
  { year: "2023", title: "Programs take shape", body: "Five pillars are formalised: Education, Environment, Employability, Empowerment, Sports." },
  { year: "2024", title: "First district championship", body: "The inaugural District Ball Badminton Championship is held in Bandipora." },
  { year: "2026", title: "Reaching 42 villages", body: "The foundation now works across 42 villages of Bandipora district." },
];
