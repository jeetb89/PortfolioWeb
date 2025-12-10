# Formspree Setup Instructions

Formspree is a simple and reliable form backend service. It's easier to set up than EmailJS and works great for portfolio contact forms.

## Step 1: Sign up for Formspree
1. Go to https://formspree.io/
2. Click "Get Started" and sign up (free tier includes 50 submissions/month)
3. Verify your email address

## Step 2: Create a New Form
1. After logging in, click **"New Form"**
2. Give it a name (e.g., "Portfolio Contact Form")
3. Set the email where you want to receive messages: **bishtjeet89@gmail.com**
4. Click **"Create Form"**

## Step 3: Get Your Form Endpoint
1. After creating the form, you'll see your form endpoint URL
2. It will look like: `https://formspree.io/f/YOUR_FORM_ID`
3. Copy this entire URL

## Step 4: Update the Code
1. Open `/ui/src/Components/GetInTouch.js`
2. Find the line: `const FORMSPREE_ENDPOINT = "YOUR_FORMSPREE_ENDPOINT";`
3. Replace `YOUR_FORMSPREE_ENDPOINT` with your actual Formspree endpoint URL
   - Example: `const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpzgvqyz";`

## Step 5: Configure Form Settings (Optional)
1. In Formspree dashboard, you can:
   - Set up email notifications
   - Add spam protection
   - Customize email templates
   - View form submissions

## Step 6: Test
1. Start your development server: `npm start`
2. Fill out the contact form
3. Click "Send Message"
4. Check your Gmail inbox (bishtjeet89@gmail.com)

## Why Formspree?
- ✅ **Simpler setup** - Just one endpoint URL
- ✅ **No email service configuration** - Works out of the box
- ✅ **Spam protection** built-in
- ✅ **Free tier** - 50 submissions/month
- ✅ **Reliable** - Used by thousands of developers

## Troubleshooting
- Make sure you've replaced `YOUR_FORMSPREE_ENDPOINT` with your actual endpoint
- Check the browser console for any error messages
- Verify your Formspree account is active
- Make sure you've verified your email in Formspree

