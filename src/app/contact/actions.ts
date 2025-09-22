"use server";

import { z } from "zod";
import { suggestBestRepresentative, SuggestBestRepresentativeOutput } from "@/ai/flows/suggest-best-representative";
import { sendContactEmail } from "@/ai/flows/send-contact-email";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type FormState = {
  success: boolean;
  message: string;
  suggestion?: SuggestBestRepresentativeOutput;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function handleContactForm(
  data: z.infer<typeof formSchema>
): Promise<FormState> {
  const validatedFields = formSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const [result] = await Promise.all([
      suggestBestRepresentative({ inquiry: validatedFields.data.message }),
      sendContactEmail(validatedFields.data),
    ]);

    return {
      success: true,
      message: `Thank you, ${validatedFields.data.name}! Your message has been received.`,
      suggestion: result,
    };
  } catch (error) {
    console.error("Error in contact form action:", error);
    return {
      success: false,
      message: "An unexpected error occurred on the server. Please try again later.",
    };
  }
}
