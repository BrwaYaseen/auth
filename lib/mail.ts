import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Two-factor authentication",
    html: `
        <p>Your two-factor authentication code is ${token}</p>
    `,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 20px auto; }
                    h1 { color: #4a4a4a; }
                    .link { color: #0000EE; text-decoration: underline; }
                </style>
            </head>
            <body>
                <h1>Reset Your Password</h1>
                <p>You've requested to reset your password. Click the link below to set a new password:</p>
                <p><a href="${resetLink}" class="link">Reset Password</a></p>
                <p>If you didn't request this, you can safely ignore this email.</p>
            </body>
        </html>
        `,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email",
    html: `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 20px auto; }
                    h1 { color: #4a4a4a; }
                    .link { color: #0000EE; text-decoration: underline; }
                </style>
            </head>
            <body>
                <h1>Verify Your Email</h1>
                <p>Thanks for signing up! Please verify your email address:</p>
                <p><a href="${confirmLink}" class="link">Verify Email</a></p>
                <p>If you didn't request this, you can ignore this email.</p>
            </body>
        </html>
    `,
  });
};
