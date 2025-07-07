# Email Setup Guide for Contact Form

This guide will help you set up Gmail SMTP to send emails from your portfolio contact form.

## Prerequisites

1. **Install required packages** (when network is stable):
   ```bash
   npm install nodemailer @types/nodemailer
   # or
   pnpm add nodemailer @types/nodemailer
   ```

## Gmail Setup

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to your Google Account settings
2. Navigate to Security
3. Under "2-Step Verification", click on "App passwords"
4. Select "Mail" as the app and "Other" as the device
5. Click "Generate"
6. Copy the 16-character password (you'll only see it once!)

### Step 3: Configure Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values:
   ```
   GMAIL_USER=your-actual-gmail@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ```

## How It Works

- When someone submits the contact form, it sends a POST request to `/api/send-email`
- The API route uses nodemailer with Gmail SMTP to send an email
- The email is sent to `mbakaragoodness2003@gmail.com` (your email)
- The reply-to is set to the sender's email so you can reply directly

## Email Template

The email includes:
- Sender's name and email
- Timestamp
- Formatted message content
- Professional HTML styling
- Reply-to header for easy responses

## Security Notes

- Never commit your `.env.local` file to git (it's already in `.gitignore`)
- Use App Passwords, not your regular Gmail password
- The API includes input validation and error handling

## Testing

1. Start your development server: `npm run dev`
2. Go to the contact section of your portfolio
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- **"Invalid credentials"**: Double-check your Gmail username and App Password
- **"Network error"**: Ensure your internet connection is stable
- **"Rate limit exceeded"**: Gmail has daily sending limits for free accounts

## Alternative Services

If you prefer not to use Gmail SMTP, you can also use:
- **Resend** (modern email API)
- **SendGrid** (popular email service)
- **Mailgun** (developer-friendly)
- **EmailJS** (client-side solution)

Just replace the nodemailer implementation in `/app/api/send-email/route.ts` with your preferred service. 