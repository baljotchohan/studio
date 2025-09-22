'use server';

/**
 * @fileOverview A flow to send an email notification for a contact form inquiry.
 *
 * - sendContactEmail - A function that sends an email notification for a contact form inquiry.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SendContactEmailInputSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;


export async function sendContactEmail(input: SendContactEmailInput): Promise<void> {
  return sendContactEmailFlow(input);
}


const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // TODO: Implement your email sending logic here.
    // For example, using Nodemailer or a transactional email service like SendGrid.
    console.log(`
      New contact form submission:
      From: ${input.name} <${input.email}>
      Message: ${input.message}
      
      Sending email to jattbad328@gmail.com
    `);
  }
);
