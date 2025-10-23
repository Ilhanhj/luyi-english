"use client";

import { useEffect, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { submitContactForm, type FormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionTitle from "./section-title";
import SectionSubtitle from "./section-subtitle";
import { SubmitButton } from "./submit-button";

const contactFormSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  message: z.string().optional(),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [state, formAction] = useActionState<FormState, FormData>(submitContactForm, {
    message: "",
  });

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: "Pesan Terkirim!",
        description: state.message,
        variant: "default",
      });
      form.reset();
    } else if (state.message && state.errors) {
       toast({
        title: "Gagal Mengirim",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionTitle>Siap Memulai?</SectionTitle>
          <SectionSubtitle>
            Isi formulir di bawah ini untuk mendaftar kelas trial gratis atau bertanya lebih lanjut.
          </SectionSubtitle>
        </div>
        <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700 glass-card p-8">
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Input
                id="name"
                name="name"
                placeholder="Nama Lengkap"
                aria-label="Nama Lengkap"
                className="bg-white/10 border-white/20 placeholder:text-gray-400"
              />
              {state.errors?.name && <p className="text-sm text-pink-400">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Alamat Email"
                aria-label="Alamat Email"
                className="bg-white/10 border-white/20 placeholder:text-gray-400"
              />
              {state.errors?.email && <p className="text-sm text-pink-400">{state.errors.email[0]}</p>}
            </div>
            <div className="space-y-2">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Nomor Telepon (WhatsApp)"
                aria-label="Nomor Telepon"
                className="bg-white/10 border-white/20 placeholder:text-gray-400"
              />
              {state.errors?.phone && <p className="text-sm text-pink-400">{state.errors.phone[0]}</p>}
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                name="message"
                placeholder="Pesan (opsional)"
                aria-label="Pesan"
                className="bg-white/10 border-white/20 placeholder:text-gray-400"
              />
              {state.errors?.message && <p className="text-sm text-pink-400">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white shadow-lg shadow-pink-500/30 transition-all duration-300 transform hover:scale-105" size="lg">
              Kirim & Daftar Trial
            </SubmitButton>
          </form>
        </div>
      </div>
    </section>
  );
}
