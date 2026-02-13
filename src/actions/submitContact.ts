"use server";

import { getPayloadClient } from "@/lib/payload";

export interface ContactFormState {
  success: boolean;
  message: string;
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const project = formData.get("project") as string | null;
  const message = formData.get("message") as string | null;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Veuillez remplir tous les champs obligatoires.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Veuillez saisir une adresse email valide.",
    };
  }

  try {
    const payload = await getPayloadClient();
    await payload.create({
      collection: "contact-submissions",
      data: {
        name,
        email,
        phone: phone || undefined,
        project: project || undefined,
        message,
      },
    });

    return {
      success: true,
      message: "Votre message a bien été envoyé. Nous vous recontacterons rapidement.",
    };
  } catch {
    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}
