import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

// Test endpoint to check if API is working
export async function GET() {
  console.log("🧪 GET request to email API - testing endpoint");
  return NextResponse.json({
    status: 'Email API is working',
    timestamp: new Date().toISOString(),
    env: {
      GMAIL_USER: process.env.GMAIL_USER ? 'SET' : 'NOT SET',
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'SET' : 'NOT SET'
    }
  });
}

export async function POST(request: NextRequest) {
  console.log("📧 Email API route called");
  console.log("📧 Request method:", request.method);
  console.log("📧 Request headers:", Object.fromEntries(request.headers.entries()));
  
  try {
    const body = await request.json();
    console.log("📧 Request body received:", body);
    
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.error("❌ Validation failed - missing fields:", { name: !!name, email: !!email, message: !!message });
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log("✅ Form validation passed");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("❌ Email validation failed:", email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log("✅ Email format validation passed");

    // Check environment variables
    console.log("🔍 Checking environment variables...");
    console.log("🔍 GMAIL_USER exists:", !!process.env.GMAIL_USER);
    console.log("🔍 GMAIL_APP_PASSWORD exists:", !!process.env.GMAIL_APP_PASSWORD);
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('❌ Gmail credentials not configured');
      console.error('❌ GMAIL_USER:', process.env.GMAIL_USER ? 'SET' : 'NOT SET');
      console.error('❌ GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? 'SET' : 'NOT SET');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    console.log("✅ Environment variables are configured");

    // Create Gmail SMTP transporter
    console.log("🔧 Creating Gmail SMTP transporter...");
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    console.log("✅ SMTP transporter created");

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'mbakaragoodness2003@gmail.com', // Your email where you want to receive messages
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; box-shadow: 0 4px 32px rgba(26,35,126,0.08); overflow: hidden;">
          <div style="background: linear-gradient(90deg, #00bfaf 0%, #1a237e 100%); color: #fff; padding: 2rem 2rem 1.2rem 2rem;">
            <h2 style="margin: 0; font-size: 2rem; font-weight: 700; letter-spacing: -0.5px;">New Contact Message</h2>
            <p style="margin: 0.5rem 0 0 0; font-size: 1.1rem; opacity: 0.95;">from your portfolio website</p>
          </div>
          <div style="padding: 2rem; background: #fff;">
            <h3 style="margin-top: 0; color: #1a237e; font-size: 1.15rem;">Contact Details</h3>
            <table style="width: 100%; font-size: 1rem; margin-bottom: 1.5rem;">
              <tr><td style="color: #888; padding: 4px 0;">Name:</td><td style="color: #222; font-weight: 500;">${name}</td></tr>
              <tr><td style="color: #888; padding: 4px 0;">Email:</td><td style="color: #222; font-weight: 500;">${email}</td></tr>
              <tr><td style="color: #888; padding: 4px 0;">Date:</td><td style="color: #222; font-weight: 500;">${new Date().toLocaleString()}</td></tr>
            </table>
            <h3 style="color: #1a237e; font-size: 1.15rem; margin-bottom: 0.5rem;">Message</h3>
            <div style="background: #f8fafc; border-left: 4px solid #00bfaf; padding: 1.2rem 1.2rem 1.2rem 1.5rem; border-radius: 0.5rem; color: #333; font-size: 1.08rem; margin-bottom: 2rem; line-height: 1.7;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(90deg, #00bfaf 0%, #1a237e 100%); color: #fff; font-weight: 600; font-size: 1.08rem; padding: 0.85rem 2.2rem; border-radius: 2rem; text-decoration: none; box-shadow: 0 2px 8px rgba(26,35,126,0.10); letter-spacing: 0.01em; transition: background 0.18s;">Reply to ${name}</a>
          </div>
          <div style="text-align: center; padding: 1.2rem; background: #f8fafc; color: #888; font-size: 0.98rem; border-top: 1px solid #e3e7f7;">
            This message was sent from your portfolio contact form.
          </div>
        </div>
      `,
      replyTo: email, // Set reply-to to the sender's email
    };

    console.log("📧 Mail options prepared:", {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      replyTo: mailOptions.replyTo
    });

    // Send email
    console.log("📤 Attempting to send email...");
    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
    console.log("📧 Send result:", {
      messageId: result.messageId,
      response: result.response,
      accepted: result.accepted,
      rejected: result.rejected
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('❌ Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}