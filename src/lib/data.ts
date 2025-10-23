import type { Tutor, Testimonial, PricingPackage, FAQItem, CompanyLogo } from './types';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        console.error(`Placeholder image with id "${id}" not found.`);
        return { url: 'https://picsum.photos/seed/error/200/200', hint: 'placeholder' };
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
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    initials: 'AW',
    summary: 'Awalnya ragu, tapi setelah coba kelas trial, langsung jatuh cinta sama metode belajarnya. Tutornya asik banget!',
    fullImageUrl: findImage('testimonial-1-full').url,
    fullImageHint: findImage('testimonial-1-full').hint,
  },
  {
    id: '2',
    initials: 'SP',
    summary: 'Materi yang diberikan sangat relevan dengan pekerjaan saya. Kemampuan presentasi saya dalam bahasa Inggris meningkat pesat.',
    fullImageUrl: findImage('testimonial-2-full').url,
    fullImageHint: findImage('testimonial-2-full').hint,
  },
  {
    id: '3',
    initials: 'RF',
    summary: 'Jadwal fleksibel sangat membantu saya yang punya kesibukan padat. Bisa belajar kapan saja dan di mana saja. Recommended!',
    fullImageUrl: findImage('testimonial-3-full').url,
    fullImageHint: findImage('testimonial-3-full').hint,
  }
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'basic',
    title: 'Basic',
    price: 'Rp 450rb',
    priceDetails: '/bulan',
    features: ['4 Sesi / bulan', 'Sesi 30 menit', 'Private (1-on-1)', 'Laporan Belajar'],
    isPopular: false,
    ctaText: 'Pilih Paket'
  },
  {
    id: 'regular',
    title: 'Regular',
    price: 'Rp 800rb',
    priceDetails: '/bulan',
    features: ['8 Sesi / bulan', 'Sesi 30 menit', 'Private (1-on-1)', 'Laporan Belajar', 'Free E-book'],
    isPopular: true,
    ctaText: 'Pilih Paket'
  },
  {
    id: 'intensif',
    title: 'Intensif',
    price: 'Rp 1.5jt',
    priceDetails: '/bulan',
    features: ['16 Sesi / bulan', 'Sesi 30 menit', 'Private (1-on-1)', 'Laporan Belajar', 'Free E-book', 'Prioritas Jadwal'],
    isPopular: false,
    ctaText: 'Pilih Paket'
  }
];

export const faqItems: FAQItem[] = [
    {
        id: 'faq1',
        question: 'Bagaimana cara mendaftar?',
        answer: 'Anda bisa langsung mendaftar dengan menekan tombol "Daftar Gratis" di atas atau mengisi form kontak di bagian bawah halaman. Tim kami akan segera menghubungi Anda.'
    },
    {
        id: 'faq2',
        question: 'Apakah ada kelas percobaan (trial class)?',
        answer: 'Tentu! Kami menyediakan 1 sesi kelas percobaan gratis agar Anda bisa merasakan pengalaman belajar di LuyiEnglish sebelum memutuskan untuk berlangganan.'
    },
    {
        id: 'faq3',
        question: 'Bagaimana jika saya berhalangan hadir?',
        answer: 'Anda dapat melakukan penjadwalan ulang (reschedule) maksimal 24 jam sebelum kelas dimulai melalui dashboard siswa Anda.'
    },
    {
        id: 'faq4',
        question: 'Apakah materi pembelajarannya bisa disesuaikan?',
        answer: 'Sangat bisa. Tutor kami akan menyesuaikan materi pembelajaran dengan kebutuhan dan tujuan belajar Anda, baik itu untuk pekerjaan, studi, atau percakapan sehari-hari.'
    }
];

export const companyLogos: CompanyLogo[] = [
    { id: 'google', name: 'Google', logoUrl: findImage('logo-google').url, logoHint: findImage('logo-google').hint },
    { id: 'gojek', name: 'Gojek', logoUrl: findImage('logo-gojek').url, logoHint: findImage('logo-gojek').hint },
    { id: 'tokopedia', name: 'Tokopedia', logoUrl: findImage('logo-tokopedia').url, logoHint: findImage('logo-tokopedia').hint },
    { id: 'traveloka', name: 'Traveloka', logoUrl: findImage('logo-traveloka').url, logoHint: findImage('logo-traveloka').hint },
    { id: 'microsoft', name: 'Microsoft', logoUrl: findImage('logo-microsoft').url, logoHint: findImage('logo-microsoft').hint },
];