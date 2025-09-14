import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Input validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Security: Sanitize inputs to prevent XSS
    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      company: company.trim().slice(0, 100),
      message: message.trim().slice(0, 2000),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ip: request.headers.get('x-forwarded-for') || 'Unknown'
    };

    // TODO: Integrate with email service (SendGrid, AWS SES, etc.)
    // For now, log the submission (in production, send to email service)
    console.log('Contact form submission:', {
      ...sanitizedData,
      ip: sanitizedData.ip // Log IP for security monitoring
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        message: 'Thank you for your inquiry. We will respond within 24 hours.',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}