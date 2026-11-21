import Contact from "@/models/contact.model";
import connectDB from "@/utils/connectDB";
import { mail } from "@/utils/createMail";
import transporter from "@/utils/createTransporter";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const db = await connectDB();
    const { fullName, email, message, subject } = await req.json();

    if (!fullName || !email || !message || !subject) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    let savedContact = null;
    if (db) {
      try {
        const contact = new Contact({ fullName, email, message, subject });
        savedContact = await contact.save();
      } catch (dbError) {
        console.error("MongoDB save error:", dbError);
      }
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Email configuration is missing");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 }
      );
    }

    try {
      const { subject: mailSubject, body } = mail(fullName, email, message);

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: mailSubject,
        text: body,
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thanks for contacting me!",
        text: `Hi ${fullName},\n\nThank you for reaching out! I have received your message:\n\n"${message}"\n\nI'll get back to you as soon as possible.\n\nBest regards,\nSimran Dangol`,
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        contact: savedContact || { fullName, email, message, subject },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
