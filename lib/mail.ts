import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        h1 {
                            color: #4a4a4a;
                        }
                        .button {
                            display: inline-block;
                            padding: 10px 20px;
                            background-color: #000000;
                            text-align: center;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 5px;
                            margin-top: 20px;
                        }
                    </style>
                </head>
                <body>
                    <h1>Verify Your Email</h1>
                    <p>Thank you for signing up! Please click the button below to verify your email address:</p>
                    <a href="${confirmLink}" class="button">Verify Email</a>
                    <p>If you didn't request this email, you can safely ignore it.</p>
                </body>
            </html>
        `,
  });
};
