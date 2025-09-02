import Contact from "@/models/contact.model";
import connectDB from "@/utils/connectDB";
import { mail } from "@/utils/createMail";
import transporter from "@/utils/createTransporter";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { fullName, email, message, subject } = await req.json();

    if (!fullName || !email || !message || !subject) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const contact = new Contact({ fullName, email, message, subject });
    await contact.save();

    // Send response immediately
    const response = NextResponse.json(
      { success: true, contact },
      { status: 201 }
    );

    // Send emails in background,
    const { subject: mailSubject, body } = mail(fullName, email, message);

    transporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: mailSubject,
        text: body,
      })
      .catch((err) => console.error("Admin email error:", err));

    transporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "✅ Thanks for contacting me!",
        text: `Hi ${fullName},\n\nThank you for reaching out! I have received your message:\n\n"${message}"\n\nI’ll get back to you as soon as possible.\n\nBest regards,\nSimran Dangol`,
      })
      .catch((err) => console.error("Auto-reply error:", err));

    return response;
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
