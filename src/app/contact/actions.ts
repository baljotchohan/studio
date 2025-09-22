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
    // Both flows will run in parallel. If one fails, Promise.all will reject.
    const [suggestionResult] = await Promise.all([
      suggestBestRepresentative({ inquiry: validatedFields.data.message }),
      sendContactEmail(validatedFields.data),
    ]);

    return {
      success: true,
      message: `Thank you, ${validatedFields.data.name}! Your message has been received.`,
      suggestion: suggestionResult,
    };
  } catch (error) {
    console.error("Error in contact form action:", error);
    // Provide a more specific error message if possible
    let errorMessage = "An unexpected error occurred on the server. Please try again later.";
    if (error instanceof Error && error.message.includes('credentials')) {
      errorMessage = "The server is not configured to send emails.";
    } else if (error instanceof Error && error.message.includes('Failed to send')) {
      errorMessage = "There was a problem sending your message. Please try again later.";
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
}
