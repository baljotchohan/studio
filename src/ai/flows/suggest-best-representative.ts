'use server';

/**
 * @fileOverview A flow to suggest the best representative for a contact form inquiry.
 *
 * - suggestBestRepresentative - A function that suggests the best representative for a contact form inquiry.
 * - SuggestBestRepresentativeInput - The input type for the suggestBestRepresentative function.
 * - SuggestBestRepresentativeOutput - The return type for the suggestBestRepresentative function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBestRepresentativeInputSchema = z.object({
  inquiry: z.string().describe('The inquiry from the contact form.'),
});
export type SuggestBestRepresentativeInput = z.infer<typeof SuggestBestRepresentativeInputSchema>;

const SuggestBestRepresentativeOutputSchema = z.object({
  representativeName: z.string().describe('The name of the suggested representative.'),
  representativeEmail: z.string().describe('The email of the suggested representative.'),
  reason: z.string().describe('The reason why this representative was suggested.'),
});
export type SuggestBestRepresentativeOutput = z.infer<typeof SuggestBestRepresentativeOutputSchema>;

export async function suggestBestRepresentative(input: SuggestBestRepresentativeInput): Promise<SuggestBestRepresentativeOutput> {
  return suggestBestRepresentativeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBestRepresentativePrompt',
  input: {schema: SuggestBestRepresentativeInputSchema},
  output: {schema: SuggestBestRepresentativeOutputSchema},
  prompt: `You are an expert at Elara Tech Labs, and your job is to suggest the best representative to respond to a contact form inquiry.

  Here are the representatives at Elara Tech Labs:

  - Sarah, email: sarah@elaratech.com, expertise: general inquiries, sales
  - John, email: john@elaratech.com, expertise: 3D animation, technical support
  - Emily, email: emily@elaratech.com, expertise: UI/UX design, website development

  Inquiry: {{{inquiry}}}

  Consider the inquiry and suggest the best representative to respond. Explain why you chose this representative in the reason field.
  `,
});

const suggestBestRepresentativeFlow = ai.defineFlow(
  {
    name: 'suggestBestRepresentativeFlow',
    inputSchema: SuggestBestRepresentativeInputSchema,
    outputSchema: SuggestBestRepresentativeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
