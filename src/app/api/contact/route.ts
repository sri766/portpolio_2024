import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const request = await req.json();

    const transporter: nodemailer.Transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: request.email,
      to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO,
      subject: request.subject || "New message from contact form",
      text: request.message,
      html: `<div>${request.message}</div>`,
    };

    const response = await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { error: false, emailSent: true, response },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { error: true, emailSent: false, errors: [errorMessage] },
      { status: 500 }
    );
  }
}
