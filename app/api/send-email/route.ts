import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Using EmailJS REST API to send email
    const emailData = {
      service_id: 'service_portfolio',
      template_id: 'template_contact',
      user_id: 'your_emailjs_user_id', // You'll need to replace this
      template_params: {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'mbakaragoodness2003@gmail.com',
        reply_to: email
      }
    };

    // For now, we'll simulate the email sending
    // In production, you would integrate with EmailJS, SendGrid, or similar service
    console.log('Email would be sent with data:', emailData);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}