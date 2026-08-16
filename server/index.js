const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Subscriber = require('./models/Subscriber');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rahpixels';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running' });
});

const nodemailer = require('nodemailer');

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Check if already subscribed
    const existingSubscriber = await Subscriber.findOne({ email: email.toLowerCase() });
    if (existingSubscriber) {
      return res.status(409).json({ error: 'Email is already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Send Welcome Email
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const mailOptions = {
        from: `"Rah Pixels" <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject: 'Welcome to Rah Pixels!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #13071C;">Welcome to Rah Pixels!</h2>
            <p>Hi there,</p>
            <p>Thank you for subscribing to our newsletter. We're excited to have you on board!</p>
            <p>We'll keep you updated with our latest work and insights.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>The Rah Pixels Team</strong></p>
          </div>
        `,
      };
      
      // We don't await this so the user gets a fast response
      transporter.sendMail(mailOptions).catch(err => {
        console.error('Failed to send welcome email:', err);
      });
    }

    res.status(201).json({ message: 'Successfully subscribed to the newsletter!' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, service, project, timeline } = req.body;

    if (!name || !email || !company || !service || !project) {
      return res.status(400).json({ error: 'Please fill out all required fields.' });
    }

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Send email to admin (you)
      const adminMailOptions = {
        from: `"Rah Pixels Website" <${process.env.SENDER_EMAIL}>`,
        to: process.env.SENDER_EMAIL, // sending to yourself
        subject: `New Project Inquiry from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Company/Brand:</strong> ${company}</p>
          <p><strong>Service Needed:</strong> ${service}</p>
          <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
          <h3>Project Details:</h3>
          <p>${project}</p>
        `,
      };

      // Send auto-reply to the user
      const userMailOptions = {
        from: `"Rah Pixels" <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject: 'We received your inquiry - Rah Pixels',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #13071C;">Hi ${name},</h2>
            <p>Thank you for reaching out to Rah Pixels!</p>
            <p>We have successfully received your inquiry about <strong>${service}</strong>. Our team will review your project details and get back to you shortly.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>The Rah Pixels Team</strong></p>
          </div>
        `,
      };

      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions)
      ]);
    }

    res.status(200).json({ message: 'Inquiry sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send inquiry.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
