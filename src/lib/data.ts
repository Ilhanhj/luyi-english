
import type { Tutor, Testimonial, PricingPackage, FAQItem, CompanyLogo } from './types';
import jsonData from './placeholder-images.json';

const PlaceHolderImages = jsonData.placeholderImages;

const findImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        console.error(`Placeholder image with id "${id}" not found.`);
        return { url: `https://picsum.photos/seed/${id}/400/600`, hint: 'placeholder' };
    }
    return { url: img.imageUrl, hint: img.imageHint };
}

export const tutors: Tutor[] = [
  {
    id: '1',
    name: 'Sarah L.',
    photoUrl: findImage('tutor-1').url,
    photoHint: findImage('tutor-1').hint,
    specialization: 'Business English',
    rating: 4.9,
    bio: 'Lulusan S2 di UK dengan pengalaman mengajar 5 tahun di perusahaan multinasional.',
    review: {
      quote: 'Cara mengajarnya sangat interaktif dan mudah dipahami. Highly recommended!',
      author: 'Budi, Karyawan Swasta'
    }
  },
  {
    id: '2',
    name: 'John D.',
    photoUrl: findImage('tutor-2').url,
    photoHint: findImage('tutor-2').hint,
    specialization: 'IELTS & TOEFL Prep',
    rating: 5.0,
    bio: 'Native speaker dari USA. Berpengalaman membantu ratusan siswa mencapai skor impian.',
    review: {
      quote: 'Thanks to Mr. John, I got 7.5 on my IELTS! The best tutor ever!',
      author: 'Citra, Mahasiswa'
    }
  },
  {
    id: '3',
    name: 'Emily S.',
    photoUrl: findImage('tutor-3').url,
    photoHint: findImage('tutor-3').hint,
    specialization: 'Conversational English',
    rating: 4.8,
    bio: 'Fokus pada conversation practice agar siswa lebih percaya diri berbicara bahasa Inggris.',
    review: {
      quote: 'Sekarang saya jadi lebih PD ngobrol sama bule. Sesi dengan Ms. Emily selalu seru!',
      author: 'Dewi, Ibu Rumah Tangga'
    }
  },
  {
    id: '4',
    name: 'Michael B.',
    photoUrl: findImage('tutor-4').url,
    photoHint: findImage('tutor-4').hint,
    specialization: 'English for Kids',
    rating: 4.9,
    bio: 'Membuat belajar bahasa Inggris menyenangkan bagi anak-anak dengan metode kreatif.',
    review: {
      quote: 'Anak saya jadi suka belajar bahasa Inggris. Gurunya sabar dan kreatif.',
      author: 'Rina, Orang Tua Murid'
    }
  },
  {
    id: '5',
    name: 'Jessica P.',
    photoUrl: findImage('tutor-5').url,
    photoHint: findImage('tutor-5').hint,
    specialization: 'Grammar & Writing',
    rating: 4.9,
    bio: 'Ahli dalam tata bahasa dan penulisan, membantu siswa menyusun kalimat dengan benar dan efektif.',
    review: {
      quote: 'Penjelasan grammar dari Ms. Jessica sangat jelas. Tulisan saya jadi jauh lebih baik.',
      author: 'Andi, Penulis'
    }
  },
  {
    id: '6',
    name: 'David K.',
    photoUrl: findImage('tutor-6').url,
    photoHint: findImage('tutor-6').hint,
    specialization: 'Public Speaking',
    rating: 4.9,
    bio: 'Pemenang kompetisi debat internasional, David akan mengubahmu menjadi pembicara yang percaya diri.',
    review: {
      quote: 'Sesi dengan David membuatku lebih berani bicara di depan umum. Sangat transformatif!',
      author: 'Eka, Manajer'
    }
  }
];

export const testimonials: Testimonial[] = [
  { 
    id: '1', 
    imageUrl: findImage('testimonial-adwiyah-full').url,
    imageAlt: 'Testimonial from Adwiyah' 
  },
  { 
    id: '2', 
    imageUrl: findImage('testimonial-april-full').url,
    imageAlt: 'Testimonial from April' 
  },
  { 
    id: '3', 
    imageUrl: findImage('testimonial-rani-full').url,
    imageAlt: 'Testimonial from Rani' 
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'grouping',
    title: 'Grouping Class',
    description: 'Belajar seru bareng teman-teman baru.',
    price: 'Rp 350K',
    priceDetails: '/bulan',
    features: [
      { name: '12x pertemuan/bulan', included: true },
      { name: 'Jadwal ditentukan bersama', included: true },
      { name: 'Maks. 15 siswa/ruang', included: true },
      { name: '60 menit/pertemuan', included: true },
      { name: 'Materi Bahasa Inggris Harian', included: true },
    ],
    isPopular: false,
    ctaText: 'Pilih Paket',
    badgeText: 'Paling Hemat'
  },
  {
    id: 'semi-private',
    title: 'Semi Private Class',
    description: 'Kelompok kecil, perhatian lebih personal.',
    price: 'Rp 550K',
    priceDetails: '/bulan',
    features: [
      { name: '12x pertemuan/bulan', included: true },
      { name: 'Jadwal ditentukan bersama', included: true },
      { name: 'Maks. 6 siswa/ruang', included: true },
      { name: '60 menit/pertemuan', included: true },
      { name: 'Materi Bahasa Inggris Harian', included: true },
    ],
    isPopular: false,
    ctaText: 'Pilih Paket',
    badgeText: 'Fokus Maksimal'
  },
  {
    id: 'private',
    title: 'Private Class',
    description: 'Fokus penuh pada tujuan belajarmu.',
    price: 'Rp 750K',
    priceDetails: '/bulan',
    features: [
        { name: '12x pertemuan/bulan', included: true },
        { name: 'Jadwal ditentukan bersama', included: true },
        { name: '60 menit/pertemuan', included: true },
        { name: 'Materi Bahasa Inggris Harian', included: true },
        { name: 'Tutor 1-on-1', included: true },
        { name: 'Modul termasuk', included: true },
    ],
    isPopular: true,
    ctaText: 'Pilih Paket',
    badgeText: 'Paling Populer'
  },
  {
    id: 'toefl',
    title: 'TOEFL Preparation',
    description: 'Raih skor TOEFL impianmu dengan bimbingan ahli.',
    price: 'Rp 850K',
    priceDetails: '/program',
    features: [
        { name: '12x pertemuan/bulan', included: true },
        { name: 'Jadwal ditentukan bersama', included: true },
        { name: '60 menit/pertemuan', included: true },
        { name: 'Tutor 1-on-1', included: true },
        { name: 'Pre-test & Post-test', included: true },
        { name: 'Modul termasuk', included: true },
    ],
    isPopular: false,
    ctaText: 'Pilih Paket',
    badgeText: 'Skor Impian'
  },
  {
    id: 'ielts',
    title: 'IELTS Class',
    description: 'Siap taklukkan tes IELTS dengan strategi jitu.',
    price: 'Rp 1.4JT',
    priceDetails: '/program',
    features: [
        { name: '12x pertemuan/bulan', included: true },
        { name: 'Jadwal ditentukan bersama', included: true },
        { name: '60 menit/pertemuan', included: true },
        { name: 'Tutor 1-on-1', included: true },
        { name: 'Pre-test & Post-test', included: true },
        { name: 'Modul termasuk', included: true },
    ],
    isPopular: false,
    ctaText: 'Pilih Paket',
    badgeText: 'Go International'
  },
];


export const faqItems: FAQItem[] = [
    {
        id: 'faq1',
        question: 'Kelas apa saja yang tersedia?',
        answer: 'Kami menyediakan berbagai kelas Bahasa Inggris seperti Speaking, Grammar, Writing, dan Vocabulary. Kamu bisa pilih sesuai dengan tujuan belajar dan level kemampuanmu.'
    },
    {
        id: 'faq2',
        question: 'Sistem kelasnya seperti apa?',
        answer: 'Kelas diadakan secara online melalui Zoom dengan konsep interaktif dan santai. Setiap sesi dipandu langsung oleh tutor (MR) yang bikin suasana belajar tetap seru dan mudah dipahami.'
    },
    {
        id: 'faq3',
        question: 'Biaya kursusnya berapa?',
        answer: 'Biaya tergantung pada jenis kelas dan durasinya. Tapi tenang, semua program kami dibuat supaya terjangkau dan sebanding dengan manfaatnya. Rincian lengkap akan diberikan setelah kamu memilih kelas yang diinginkan.'
    },
    {
        id: 'faq4',
        question: 'Apakah bisa bayar secara cicilan?',
        answer: 'Bisa banget! Kami menyediakan opsi pembayaran fleksibel termasuk sistem cicilan, jadi kamu bisa mulai belajar tanpa harus bayar penuh di awal.'
    },
    {
        id: 'faq5',
        question: 'Bagaimana cara daftar kelasnya?',
        answer: 'Mudah banget! Setelah kamu menentukan program yang cocok, tim admin kami akan bantu langkah demi langkah untuk proses pendaftaran. Kamu juga bisa langsung daftar lewat chat atau form di website kami.'
    }
];

export const companyLogos: CompanyLogo[] = [
    { id: 'google', name: 'Google', logoUrl: 'https://images.unsplash.com/photo-1549924231-f129b911e442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', logoHint: 'company logo' },
    { id: 'gojek', name: 'Gojek', logoUrl: 'https://images.unsplash.com/photo-1549924231-f129b911e442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', logoHint: 'company logo' },
    { id: 'tokopedia', name: 'Tokopedia', logoUrl: 'https://images.unsplash.com/photo-1562783912-21ad31ee2a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', logoHint: 'company logo' },
    { id: 'traveloka', name: 'Traveloka', logoUrl: 'https://images.unsplash.com/photo-1622465911368-72162f8da3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlibrb-4.1.0&q=80&w=1080', logoHint: 'company logo' },
    { id: 'microsoft', name: 'Microsoft', logoUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NjExNTA1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', logoHint: 'company logo' },
];
