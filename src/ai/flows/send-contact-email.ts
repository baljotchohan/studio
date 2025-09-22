'use server';

/**
 * @fileOverview A flow to send an email notification for a contact form inquiry.
 *
 * - sendContactEmail - A function that sends an email notification for a contact form inquiry.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import * as nodemailer from 'nodemailer';

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
    // Make sure you have GMAIL_EMAIL and GMAIL_APP_PASSWORD in your .env file
    if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Gmail credentials are not set in environment variables.");
      // In a real app, you might throw an error or handle this differently
      return; 
    }
    
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD, // Use an App Password for Gmail
      },
    });

    // Set up email data
    const mailOptions = {
      from: `"Contact Form" <${process.env.GMAIL_EMAIL}>`, // sender address
      to: 'jattbad328@gmail.com', // list of receivers
      subject: 'New Inquiry from your SAAS service', // Subject line
      replyTo: `"${input.name}" <${input.email}>`,
      html: `
        <p>You have a new contact form submission from your SAAS service:</p>
        <ul>
          <li><strong>From:</strong> ${input.name}</li>
          <li><strong>Email:</strong> ${input.email}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${input.message}</p>
      `, // html body
    };

    // Send mail with defined transport object
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
      // In a real app, you might want to throw an error to let the caller know something went wrong.
    }
  }
);
