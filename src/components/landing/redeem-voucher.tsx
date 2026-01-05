"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Ticket, CheckCircle2, XCircle, Loader2, Sparkles, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti"; // Install dulu: npm install canvas-confetti @types/canvas-confetti

// DATABASE KODE (Hardcoded untuk MVP)
const VALID_CODES: Record<string, { discount: string, desc: string }> = {
  "LUYI2026": { discount: "20%", desc: "Diskon Opening Promo!" },
  "MABA50": { discount: "Rp 50.000", desc: "Potongan Khusus Mahasiswa" },
  "JAGOINGGRIS": { discount: "10%", desc: "Diskon Spesial Instagram" },
};

export default function RedeemVoucher() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<{ discount: string, desc: string } | null>(null);

  const handleCheckCode = () => {
    if (!code) return;
    
    setStatus("loading");
    
    // Simulasi loading biar kerasa "mikir"
    setTimeout(() => {
      const upperCode = code.toUpperCase().trim();
      
      if (VALID_CODES[upperCode]) {
        setStatus("success");
        setResult(VALID_CODES[upperCode]);
        triggerConfetti();
      } else {
        setStatus("error");
        setResult(null);
      }
    }, 800);
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <section className="py-20 relative px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-2xl p-8 md:p-12 text-center">
          
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(251,191,36,0.4)] animate-bounce-slow">
              <Ticket className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Punya Kode Promo?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Masukkan kode voucher rahasia yang kamu temukan di Instagram atau TikTok kami untuk mendapatkan potongan harga spesial!
            </p>

            {/* Input Box */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto relative">
               <input
                type="text"
                placeholder="Contoh: LUYI2026"
                value={code}
                onChange={(e) => {
                    setCode(e.target.value);
                    if(status === 'error') setStatus('idle');
                }}
                className="flex-1 h-14 rounded-xl bg-slate-950/50 border border-white/10 px-5 text-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all uppercase tracking-widest font-bold text-center sm:text-left"
               />
               
               <Button 
                onClick={handleCheckCode}
                disabled={status === 'loading' || !code}
                className={cn(
                    "h-14 px-8 rounded-xl font-bold text-lg transition-all shadow-lg",
                    status === 'success' 
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                        : "bg-amber-400 hover:bg-amber-500 text-slate-900"
                )}
               >
                 {status === 'loading' ? (
                   <Loader2 className="w-5 h-5 animate-spin" />
                 ) : status === 'success' ? (
                   "Berhasil!"
                 ) : (
                   "Cek Kode"
                 )}
               </Button>
            </div>

            {/* Result Message */}
            {status === 'error' && (
                <div className="mt-4 flex items-center gap-2 text-rose-400 bg-rose-500/10 px-4 py-2 rounded-lg animate-in fade-in slide-in-from-top-2">
                    <XCircle className="w-4 h-4" />
                    <span className="font-medium">Kode tidak valid atau sudah kadaluarsa.</span>
                </div>
            )}

            {status === 'success' && result && (
                <div className="mt-8 w-full max-w-lg animate-in zoom-in duration-500">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden group cursor-pointer hover:bg-emerald-500/20 transition-colors">
                        <div className="flex items-center justify-between relative z-10">
                            <div className="text-left">
                                <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" /> Voucher Valid
                                </p>
                                <h3 className="text-3xl font-extrabold text-white">{result.discount} OFF</h3>
                                <p className="text-slate-300 text-sm mt-1">{result.desc}</p>
                            </div>
                            <div className="text-right">
                                <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full">
                                    <a 
                                        href={`https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20klaim%20promo%20kode%20*${code.toUpperCase()}*%20untuk%20dapat%20diskon%20${result.discount}`}
                                        target="_blank"
                                    >
                                        Klaim Sekarang
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-500 text-xs mt-3">
                        *Klik tombol "Klaim Sekarang" untuk terhubung ke WhatsApp Admin
                    </p>
                </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}