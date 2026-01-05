import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'LuyiEnglish - Belajar Bahasa Inggris Online',
  description: 'Belajar bahasa Inggris dengan tutor berpengalaman. Jadwalkan kelas percobaan gratis Anda hari ini!',
  keywords: ['belajar bahasa inggris', 'kursus inggris online', 'tutor inggris', 'ielts', 'toefl'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-slate-950 text-gray-300">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-[80vw] h-[80vh] bg-blue-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-0 w-[70vw] h-[70vh] bg-amber-500/30 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_2s]"></div>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
