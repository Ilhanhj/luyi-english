"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nama harus terdiri dari minimal 2 karakter."),
  email: z.string().email("Alamat email tidak valid."),
  phone: z.string().min(10, "Nomor telepon harus terdiri dari minimal 10 digit."),
  message: z.string().optional(),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Mohon perbaiki kesalahan pada formulir.",
    };
  }

  try {
    // TODO: Save to Firestore database
    console.log("Form data submitted:", validatedFields.data);

    // Revalidate path to clear form on success if needed, or handle client-side
    revalidatePath("/");

    return {
      message: "Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.",
    };
  } catch (e) {
    return {
      message: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
    };
  }
}
