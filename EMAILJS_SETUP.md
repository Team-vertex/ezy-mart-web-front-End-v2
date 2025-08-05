# EmailJS Setup Guide - Frontend Email Sending

This guide explains how to set up EmailJS for sending emails directly from the frontend without a backend server.

## Why EmailJS?

- ✅ **No Backend Required**: Send emails directly from frontend
- ✅ **Secure**: Your email credentials are not exposed
- ✅ **Free Tier**: 200 emails/month for free
- ✅ **Easy Setup**: Just configure templates and get API keys
- ✅ **Reliable**: Built specifically for frontend email sending

## Setup Steps

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Connect Your Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your preferred email provider)
4. Click **"Connect Account"** and authorize EmailJS to access your Gmail
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. Use this template content:

#### Template Settings:

- **Template Name**: Contact Form Submission
- **Template ID**: Will be generated (e.g., `template_xyz789`)

#### Email Template Content:

**Subject:**

```
New Contact Form Submission - {{reason}}
```

**HTML Content:**

```html
<div
  style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;"
>
  <div
    style="background: linear-gradient(135deg, #0A65FC, #1e40af); color: white; padding: 30px; border-radius: 10px 10px 0 0;"
  >
    <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    <p style="margin: 10px 0 0; opacity: 0.9;">EzyMart Contact Form</p>
  </div>

  <div
    style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px;"
  >
    <h2 style="color: #1f2937; margin-top: 0;">Contact Information</h2>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td
          style="padding: 10px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #f3f4f6;"
        >
          Name:
        </td>
        <td
          style="padding: 10px; color: #1f2937; border-bottom: 1px solid #f3f4f6;"
        >
          {{from_name}}
        </td>
      </tr>
      <tr>
        <td
          style="padding: 10px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #f3f4f6;"
        >
          Email:
        </td>
        <td
          style="padding: 10px; color: #1f2937; border-bottom: 1px solid #f3f4f6;"
        >
          {{from_email}}
        </td>
      </tr>
      <tr>
        <td
          style="padding: 10px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #f3f4f6;"
        >
          Phone:
        </td>
        <td
          style="padding: 10px; color: #1f2937; border-bottom: 1px solid #f3f4f6;"
        >
          {{from_phone}}
        </td>
      </tr>
      <tr>
        <td
          style="padding: 10px; font-weight: bold; color: #6b7280; border-bottom: 1px solid #f3f4f6;"
        >
          Reason:
        </td>
        <td
          style="padding: 10px; color: #1f2937; border-bottom: 1px solid #f3f4f6;"
        >
          {{reason}}
        </td>
      </tr>
    </table>

    <h3 style="color: #1f2937; margin-bottom: 10px;">Message:</h3>
    <div
      style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #0A65FC;"
    >
      <p
        style="margin: 0; line-height: 1.6; color: #374151; white-space: pre-wrap;"
      >
        {{message}}
      </p>
    </div>

    <div
      style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;"
    >
      <p style="color: #9ca3af; font-size: 14px; margin: 0;">
        This email was sent from the EzyMart contact form
      </p>
    </div>
  </div>
</div>
```

**Text Content:**

```
New Contact Form Submission

Contact Information:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Reason: {{reason}}

Message:
{{message}}

---
This email was sent from the EzyMart contact form
```

4. Set **"To Email"** to: `{{to_email}}`
5. Set **"Reply To"** to: `{{reply_to}}`
6. Click **"Save"**

### 4. Get Public Key

1. Go to **"Account"** in EmailJS dashboard
2. Copy your **"Public Key"** (e.g., `user_abc123xyz`)

### 5. Configure Environment Variables

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Update your `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
   ```

## Usage

That's it! Now you can send emails directly from your React app:

1. **Start the development server**:

   ```bash
   npm run dev
   ```

2. **Test the contact form** on your website
3. **Check your Gmail** for received emails

## Features

### ✅ What Works:

- Direct frontend email sending
- Professional HTML email templates
- Form validation
- Success/error notifications
- No backend server required
- Free up to 200 emails/month

### 📧 Email Flow:

1. User fills contact form
2. Frontend validates data
3. EmailJS sends email directly to your Gmail
4. User sees success notification

## Security & Limitations

### ✅ Secure:

- **Public Key Only**: Only public key is exposed (safe)
- **No Credentials**: No email passwords in frontend code
- **Rate Limiting**: EmailJS has built-in spam protection

### ⚠️ Considerations:

- **Email Limit**: 200 emails/month on free plan
- **No Server Features**: Can't do complex server-side processing
- **Single Template**: One email template (business email only)

## Upgrading EmailJS Plans

If you need more emails:

- **Personal Plan**: $7/month - 1,000 emails
- **Professional Plan**: $15/month - 10,000 emails
- **Enterprise**: Custom pricing

## Troubleshooting

### Common Issues:

1. **"Service ID is invalid"**

   - Check your EmailJS service ID in `.env`
   - Make sure the service is connected and active

2. **"Template ID is invalid"**

   - Verify your template ID in `.env`
   - Make sure the template is saved and published

3. **"User ID is invalid"**

   - Check your public key in `.env`
   - Copy the key exactly from EmailJS dashboard

4. **Emails not received**

   - Check spam/junk folders
   - Verify the template "To Email" is set to `{{to_email}}`
   - Make sure your Gmail is connected to EmailJS

5. **"Forbidden" or "Quota exceeded"**
   - You've reached your monthly email limit
   - Upgrade your EmailJS plan or wait for next month

### Debug Steps:

1. **Check Configuration**:

   ```bash
   # Make sure all environment variables are set
   echo $VITE_EMAILJS_SERVICE_ID
   echo $VITE_EMAILJS_TEMPLATE_ID
   echo $VITE_EMAILJS_PUBLIC_KEY
   ```

2. **Test in Browser Console**:

   ```javascript
   // Check if EmailJS is loaded
   console.log(window.emailjs);
   ```

3. **Check EmailJS Dashboard**:
   - Go to "History" to see sent emails
   - Check for error messages

## Alternative: Auto-Reply Setup (Optional)

To send auto-reply emails to customers, create a second template:

1. Create another template in EmailJS
2. Set "To Email" to `{{from_email}}`
3. Create a thank you message template
4. Send two emails in your code (one to business, one to customer)

## Production Deployment

For production:

1. Set environment variables on your hosting platform
2. No additional server configuration needed
3. EmailJS works from any domain (including localhost)

## Support

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Support**: https://www.emailjs.com/contact/
- **React Integration**: https://www.emailjs.com/docs/examples/reactjs/

That's it! You now have a serverless email system that works entirely from the frontend. 🎉
