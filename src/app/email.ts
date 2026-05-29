'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailParams {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export async function sendContactEmail({ firstName, lastName, email, message }: SendEmailParams) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return { success: false, error: "Wrong RESEND_API_KEY" };
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['dobin0301@gmail.com'], 
            subject: `New Contact Message from ${lastName} ${firstName}`,
            html: `
                <h3>New Message Received</h3>
                <p><strong>From:</strong> ${lastName} ${firstName} (${email})</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            console.error("Resend API error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err: any) {
        console.error("inside server error:", err);
        return { success: false, error: err.message };
    }
}