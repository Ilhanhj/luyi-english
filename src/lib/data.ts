import type { Tutor, Testimonial, PricingPackage, FAQItem, GalleryTestimonial } from "./types";

// --- HAPUS IMPORT JSON YANG BIKIN ERROR ---
// import jsonData from "./placeholder-images.json"; ❌ HAPUS INI
// const PlaceHolderImages = jsonData.placeholderImages; ❌ HAPUS INI

// --- GANTI JADI FUNCTION SEDERHANA (Biar kode bawah gak error) ---
const findImage = (id: string) => {
  // Kita kembalikan link placeholder aman, jadi gak perlu file JSON lagi
  return {
    url: `https://placehold.co/400x600?text=${id}`,
    hint: "placeholder",
  };
};

export const tutors = (t?: any): Tutor[] => [
  {
    id: 1,
    name: "Miss Luyi",
    role: "Founder & Speaking/Grammar Expert",
    experience: "5 Tahun",
    bio: "No longer worry to speak English! Di kelas Miss Luyi, media visual dan audio-visual punya peran besar. Kita akan fokus membedah 'Real Life English Conversation' agar kamu percaya diri ngomong Inggris tanpa takut salah grammar.",
    image: "/images/tutors/miss-luyi.png",
    testimonials: [
      {
        quote: "Having class with Miss Luyi is very enjoyable, easy to follow, and very enthusiastic. You can choose what you wanna learn. The class schedule is adaptive too!",
        author: "Kak Latif",
      },
      {
        quote: "Aku lolos PNS Mahkamah Agung Republik Indonesia. Makasih ilmunya Miss!",
        author: "Kak Lis",
      },
      {
        quote: "Thank you Miss for helping me. Kalau aku gak take course di Miss, writing sama speaking ku mungkin anjlok karena gak pede.",
        author: "Kak Azzah",
      },
    ],
  },
  {
    id: 2,
    name: "Mr. Han",
    role: "Speaking Expert",
    experience: "4 Tahun",
    bio: "Belajar bahasa Inggris itu harusnya seru, bukan bikin panik!  Di kelas ini, rasanya kayak lagi ngobrol santai sama temen. Kita bakal hajar perbanyak praktek dan bedah kasus real-life. Teorinya gimana? Tenang, Mr bakal bongkar penjelasannya pakai penje;asan super simpel sampai kamu ngerasa 'Ohh, cuma gini doang!'. Pondasi teori dijamin kokoh, tapi kamu tetap bisa ngomong inggris dengan pede! 🚀✨",
    image: "/images/tutors/han.png",
    testimonials: [
      {
        quote:
          "Classes with mr.han was really amazing. Mr. Han is a kind, funny and smart person. He explains the material clearly. His example is funny and make me laugh, mr han sometimes makes jokes in class which make me more enthusiastic to learn. In a free talk sessions we can talk about many things like movies, books and many more. Mr is perfect and mr is the teacher i expected. Thank you very much mr for actually helped me to improve my english",
        author: "Natallie",
      },
      {
        quote:
          "I agree with statement that mr. han is the best english tutor that i've met. Learning with you its really fun and relax because i can understand it quickly. the way you teach is very good and i will continue to learn english and never stop as you said",
        author: "Devika",
      },
      {
        quote:
          "Learning english with mr. han has been a great experience. Your teaching style is engaging and easy to understand, which makes learning even more enjoyable. One of the most interesting sessions was when we joined the class from another country. It was fun and unique way to practice speaking english",
        author: "Fika",
      },
    ],
  },
  {
    id: 3,
    name: "Miss Shalsa",
    role: "TOEFL/IELTS & Speaking Expert",
    experience: "6 Tahun",
    bio: "Gaya mengajar saya santai, interaktif, dan tidak kaku. Materi dan metode saya sesuaikan dengan level, kebutuhan, dan target masing-masing murid, terutama untuk penggunaan Bahasa Inggris sehari-hari.",
    image: "/images/tutors/shalsa.png",
    testimonials: [
      {
        quote: "Miss Salsa my lovely mentor, thanks to you my Visa to Dubai has been approved and I will be leaving next Wednesday!",
        author: "Manda (Bekerja di Dubai)",
      },
      {
        quote: "Thanks Miss, kalau begini saya bisa dapet beasiswa. Kenapa gak dari awal kenal Miss Salsa. Sat set sat set menjawabnya.",
        author: "Hanna (S2 di Taiwan)",
      },
      {
        quote: "Miss aku udah di ACC Alhamdulillah, sekarang aku udah di Pontianak, kerja di Pelayaran. Thank you so much for everything Miss!",
        author: "Puji (Pelayaran)",
      },
    ],
  },
  {
    id: 4,
    name: "Miss Indi",
    role: "IELTS, Speaking & Writing Specialist",
    experience: "3.5 Tahun",
    bio: "Lulusan Pendidikan Bahasa Inggris Universitas Brawijaya yang sedang menempuh S2. Saya fokus membantu murid mencapai target skor IELTS dan meningkatkan kemampuan akademik bahasa Inggris mereka.",
    image: "/images/tutors/indi.png",
    testimonials: [
      {
        quote: "Thanks to Miss's guidance, I passed the IELTS on my first attempt, and many of the questions were exactly the same as practiced in class.",
        author: "Kak Naira & Arifa",
      },
      {
        quote: "Thanks for always explaining things so clearly and patiently, even when I'm slow or confused. I enjoyed learning with you a lot.",
        author: "Aisyah",
      },
      {
        quote: "You've been such a great support and I'll never forget how much you helped me grow.",
        author: "Sis Adinda",
      },
    ],
  },
  {
    id: 5,
    name: "Miss Dhita",
    role: "TOEFL & English for Kids",
    experience: "8 Tahun",
    bio: "Learning English with fun! Saya menggunakan metode audio, video, dan visual learning yang disesuaikan dengan kebutuhan dan gaya belajar unik setiap murid.",
    image: "/images/tutors/dhita.png",
    testimonials: [
      {
        quote: "Selama bimbingan belajar oleh Miss Dhita aku mendapat juara dalam Olimpiade Bahasa Inggris tingkat SMP.",
        author: "Kak Cinta",
      },
    ],
  },
  {
    id: 6,
    name: "Miss Rita",
    role: "TOEIC/TOEFL & Speaking Coach",
    experience: "5 Tahun",
    bio: "Fokus dalam komunikasi praktis dan real-life English. Metode saya interaktif, diskusi aktif, dan support penuh buat tiap student agar belajar English jadi lebih fun, jelas, dan relevan.",
    image: "/images/tutors/rita.png",
    testimonials: [
      {
        quote: "I enjoyed our first class, it feels like we didn't in the study circumstances. And it's increase my motivation to learn more about english.",
        author: "Student",
      },
    ],
  },
  {
    id: 7,
    name: "Miss Nafiisa",
    role: "Speaking & English for Kids",
    experience: "+2 Tahun",
    bio: "My class method is fun learning and speak a lot! Kita akan banyak bermain games dan deeptalk seru biar kamu gak bosan belajar bahasa Inggris.",
    image: "/images/tutors/nafiisa.png",
    testimonials: [
      {
        quote: "Kelas sama Miss Nafiisa seru ada games-nya.",
        author: "Kak Arin",
      },
      {
        quote: "Kelas seru bisa sambil deeptalk.",
        author: "Kak Alya",
      },
      {
        quote: "Interview saya diterima Miss!",
        author: "Kak Heru",
      },
    ],
  },
  {
    id: 8,
    name: "Miss Jihan",
    role: "Speaking Specialist",
    experience: "2 Tahun",
    bio: "'We Listen, We Don't Judge!' Itu motto kelas saya. Saya pastikan kamu nyaman dan percaya diri tanpa takut atau ragu untuk bicara. Let's have a conversation with me!",
    image: "/images/tutors/jihan.png",
    testimonials: [
      {
        quote: "You're already build my confidence to speak english and always know something that I need Ka Jihan.",
        author: "Kak Nazla",
      },
      {
        quote: "Thankyouu kak SERUUU!!!",
        author: "Kak Intan",
      },
      {
        quote: "Makasii Miss Jihan, Alhamdulillah, I'm happy to know and study with Miss Jihan.",
        author: "Kak Rayhan",
      },
    ],
  },
  {
    id: 9,
    name: "Miss Titin",
    role: "Speaking & Grammar",
    experience: "1.5 Tahun",
    bio: "Saya menjelaskan pelajaran dengan inovatif dan detail, namun tetap humble menghargai proses belajar setiap siswa. Kita perbaiki speaking skill bukan cuma teori, tapi praktik.",
    image: "/images/tutors/titin.png",
    testimonials: [
      {
        quote: "Miss Titin explains lessons clearly, teaches in an innovative and detailed way.",
        author: "Kak Tengku",
      },
      {
        quote: "The tutor makes learning English feel easy, enjoyable, and inspiring.",
        author: "Kak Nunu",
      },
      {
        quote: "She helps me improve my speaking skills... she is truly smart and humble.",
        author: "Mr. Irwan",
      },
    ],
  },
  {
    id: 10,
    name: "Miss Kenisha",
    role: "Speaking & Grammar Expert",
    experience: "3 Tahun",
    bio: "Background saya Tours & Travel, jadi saya terbiasa pakai bahasa Inggris di situasi nyata. Grammar aku jelasin pelan dan simpel, speaking kita latih step by step sampai kamu terbiasa ngomong tanpa mikir lama.",
    image: "/images/tutors/kenis.png",
    testimonials: [
      {
        quote: "Sekarang jadi lebih berani ngomong Inggris.",
        author: "Student A",
      },
      {
        quote: "Grammar akhirnya masuk akal dan engga bikin pusing.",
        author: "Student B",
      },
      {
        quote: "Belajarnya pelan tapi konsisten, progresnya kerasa.",
        author: "Student C",
      },
    ],
  },
  {
    id: 11,
    name: "Mr. Rieki (Eki)",
    role: "Speaking English Coach",
    experience: "3 Tahun",
    bio: "I teach English in a relaxed, café-style atmosphere. Kelas saya fleksibel, didesain biar kamu merasa pede ngomong dan menikmati proses belajarnya.",
    image: "/images/tutors/eki.png",
    testimonials: [
      {
        quote: "Sejauh ini diajarin Kak Eki seru banget, materi masuk, dan ngebantu banget memperlancar bahasa Inggris saya.",
        author: "Kak Kamala",
      },
      {
        quote: "Seru kak, ga kaku juga, sejauh ini aman sih kak.",
        author: "Kak Ivony",
      },
    ],
  },
  {
    id: 12,
    name: "Miss Siska",
    role: "Speaking & English for Corporate  ",
    experience: "2 Tahun",
    bio: "I'm not just a tutor, but your English speaking companion! Belajar Inggris gak harus susah. Di kelas saya, suasananya fun, mudah, dan interaktif seperti ngobrol biasa.",
    image: "/images/tutors/siska.png",
    testimonials: [
      {
        quote: "Sessions feel more like real conversations than lessons. I can see a big improvement in my speaking fluency.",
        author: "Kak Putri",
      },
      {
        quote: "She's patient, supportive, and always encourages me to express my ideas in English.",
        author: "Kak Wulan",
      },
      {
        quote: "She doesn't just teach grammar, but really helps me speak confidently in real conversations.",
        author: "Kak Shafira",
      },
    ],
  },
  {
    id: 13,
    name: "Miss Kuni",
    role: "Speaking & Confidence",
    experience: "± 1 Tahun",
    bio: "Saya membantu murid mengembangkan kemampuan berbicara bahasa Inggris dengan percaya diri melalui pendekatan public speaking dan pengembangan diri. Siap presentasi akademik maupun profesional!",
    image: "/images/tutors/kuni.png",
    testimonials: [
      {
        quote: "Penyampaian terstruktur, tenang dan meyakinkan.",
        author: "Natario",
      },
      {
        quote: "Membantu saya berbicara dengan percaya diri untuk persiapan interview.",
        author: "Novita",
      },
      {
        quote: "Belajar bahasa sekaligus berkembang secara pribadi.",
        author: "Dela",
      },
    ],
  },
  {
    id: 14,
    name: "Ms. Kania",
    role: "Speaking & Translation",
    experience: "2 Tahun",
    bio: "Lulusan Pendidikan Bahasa Inggris yang fokus pada praktik berbicara aktif. Tujuannya agar siswa lebih percaya diri dan terbiasa menggunakan bahasa Inggris dalam situasi sehari-hari.",
    image: "/images/tutors/kania.png",
    testimonials: [
      {
        quote: "The learning sessions run well.",
        author: "Student",
      },
      {
        quote: "The materials are delivered according to the needs.",
        author: "Student",
      },
      {
        quote: "The class feels effective and well-structured.",
        author: "Student",
      },
    ],
  },
  {
    id: 15,
    name: "Miss Thea",
    role: "Speaking Tutor",
    experience: "1 Tahun",
    bio: "Kita singkirkan buku teks yang kaku! Kita fokus ngobrol santai tentang hal-hal yang kamu suka, jadi kemampuan bicaramu bisa langsung terasah tanpa terasa seperti belajar.",
    image: "/images/tutors/thea.png",
    testimonials: [
      {
        quote: "Miss Thea telaten, sabar, cara mengajarnya juga cepet dipahami. Best banget!",
        author: "Rika Rasma",
      },
      {
        quote: "Jadi lebih confident kalau mau ngomong bahasa Inggris, ga overthinking kalau salah.",
        author: "Nabila H.",
      },
      {
        quote: "Kelasnya enjoy feels like learning with a friend.",
        author: "Anggi Siti",
      },
    ],
  },
  {
    id: 16,
    name: "Miss Riris",
    role: "Speaking & Grammar",
    experience: "3 Tahun",
    bio: "Caz ciz cuzzz, kita praktik! Kelas saya penuh praktik langsung agar English terasa hidup, mudah dipakai, dan membangun kepercayaan diri. Bukan cuma teori, tapi langsung bicara.",
    image: "/images/tutors/riris.png",
    testimonials: [
      {
        quote: "Belajar bareng Miss Riris seneng banget. Penjelasannya simpel, jelas, dan langsung masuk.",
        author: "Kak Cipay",
      },
      {
        quote: "Seru banget, berasa belajar sama bestie. Jadi ketagihan belajar sama Miss Riris.",
        author: "Kak Siska",
      },
      {
        quote: "Miss Riris bikin aku pede speaking, kelasnya fun banget.",
        author: "Kak Shakira",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  { quote: "Placeholder testimonial", author: "Adwiyah" }, // Contoh sementara kalau array ini dipake
  // ... bagian bawah testimonials biarkan seperti yang kamu punya jika berbeda
];

// ==============================================================================
// BAGIAN BAWAH INI BIARKAN SAMA SEPERTI FILE ASLI KAMU
// ==============================================================================

export const pricingPackages = (t: any): PricingPackage[] => [
  {
    id: "grouping",
    title: t.pricing.packages.group.title,
    description: t.pricing.packages.group.description,
    price: "",
    priceDetails: t.pricing.perMonth,
    features: [
      { name: t.pricing.features.meetings12, included: true },
      { name: t.pricing.features.flexibleSchedule, included: true },
      { name: t.pricing.features.max15, included: true },
      { name: t.pricing.features.minutes60, included: true },
      { name: t.pricing.features.dailyMaterial, included: true },
    ],
    isPopular: false,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.bestValue,
  },
  {
    id: "semi-private",
    title: t.pricing.packages.semiPrivate.title,
    description: t.pricing.packages.semiPrivate.description,
    price: "",
    priceDetails: t.pricing.perMonth,
    features: [
      { name: t.pricing.features.meetings12, included: true },
      { name: t.pricing.features.flexibleSchedule, included: true },
      { name: t.pricing.features.max6, included: true },
      { name: t.pricing.features.minutes60, included: true },
      { name: t.pricing.features.dailyMaterial, included: true },
    ],
    isPopular: false,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.maxFocus,
  },
  {
    id: "private",
    title: t.pricing.packages.private.title,
    description: t.pricing.packages.private.description,
    price: "",
    priceDetails: t.pricing.perMonth,
    features: [
      { name: t.pricing.features.meetings12, included: true },
      { name: t.pricing.features.flexibleSchedule, included: true },
      { name: t.pricing.features.minutes60, included: true },
      { name: t.pricing.features.dailyMaterial, included: true },
      { name: t.pricing.features.oneOnOne, included: true },
      { name: t.pricing.features.moduleIncluded, included: true },
    ],
    isPopular: true,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.mostPopular,
  },
  {
    id: "toefl",
    title: t.pricing.packages.toefl.title,
    description: t.pricing.packages.toefl.description,
    price: "",
    priceDetails: t.pricing.perProgram,
    features: [
      { name: t.pricing.features.meetings12, included: true },
      { name: t.pricing.features.flexibleSchedule, included: true },
      { name: t.pricing.features.minutes60, included: true },
      { name: t.pricing.features.oneOnOne, included: true },
      { name: t.pricing.features.prePostTest, included: true },
      { name: t.pricing.features.moduleIncluded, included: true },
    ],
    isPopular: false,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.dreamScore,
  },
  {
    id: "ielts",
    title: t.pricing.packages.ielts.title,
    description: t.pricing.packages.ielts.description,
    price: "",
    priceDetails: t.pricing.perProgram,
    features: [
      { name: t.pricing.features.meetings12, included: true },
      { name: t.pricing.features.flexibleSchedule, included: true },
      { name: t.pricing.features.minutes60, included: true },
      { name: t.pricing.features.oneOnOne, included: true },
      { name: t.pricing.features.prePostTest, included: true },
      { name: t.pricing.features.moduleIncluded, included: true },
    ],
    isPopular: false,
    ctaText: t.pricing.cta,
    badgeText: t.pricing.badges.goInternational,
  },
];

export const faqItems = (t: any): FAQItem[] => t.faq.items;

export const galleryTestimonials: GalleryTestimonial[] = [
  { id: "1", src: findImage("testimonial-adwiyah").url, alt: "Testimonial from Adwiyah" },
  { id: "2", src: findImage("testimonial-aprial").url, alt: "Testimonial from Aprial" },
  { id: "3", src: findImage("testimonial-bianca").url, alt: "Testimonial from Bianca" },
  { id: "5", src: findImage("testimonial-devika").url, alt: "Testimonial from Devika" },
  { id: "6", src: findImage("testimonial-eva").url, alt: "Testimonial from Eva" },
  { id: "7", src: findImage("testimonial-fika").url, alt: "Testimonial from Fika" },
  { id: "8", src: findImage("testimonial-juliana").url, alt: "Testimonial from Juliana" },
  { id: "10", src: findImage("testimonial-khalid").url, alt: "Testimonial from Khalid" },
  { id: "11", src: findImage("testimonial-nat").url, alt: "Testimonial from Nat" },
  { id: "12", src: findImage("testimonial-nisa").url, alt: "Testimonial from Nisa" },
  { id: "13", src: findImage("testimonial-nofvia").url, alt: "Testimonial from Nofvia" },
  { id: "14", src: findImage("testimonial-teguh").url, alt: "Testimonial from Teguh" },
  { id: "15", src: findImage("testimonial-vania").url, alt: "Testimonial from Vania" },
  { id: "16", src: findImage("testimonial-wiwin").url, alt: "Testimonial from Wiwin" },
];
