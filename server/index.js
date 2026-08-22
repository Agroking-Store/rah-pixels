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
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running' });
});

const nodemailer = require('nodemailer');
const { getWelcomeEmailTemplate, getContactAdminTemplate, getContactUserTemplate, getSocialAdminTemplate, getSocialUserTemplate } = require('./emailTemplates');

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
        html: getWelcomeEmailTemplate(),
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
        html: getContactAdminTemplate({ name, email, phone, company, service, timeline, project }),
      };

      // Send auto-reply to the user
      const userMailOptions = {
        from: `"Rah Pixels" <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject: 'We received your inquiry - Rah Pixels',
        html: getContactUserTemplate({ name, service }),
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

app.post('/api/contact/social', async (req, res) => {
  try {
    const { name, email, social, reason, about, focus, format, extra } = req.body;

    if (!name || !email || !reason || !about || !focus) {
      return res.status(400).json({ error: 'Please fill out all required fields.' });
    }

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Send email to admin
      const adminMailOptions = {
        from: `"Rah Pixels Website" <${process.env.SENDER_EMAIL}>`,
        to: process.env.SENDER_EMAIL,
        subject: `New Social Inquiry from ${name}`,
        html: getSocialAdminTemplate({ name, email, social, reason, format, about, focus, extra }),
      };

      // Send auto-reply to the user
      const userMailOptions = {
        from: `"Rah Pixels" <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject: 'We received your inquiry - Rah Pixels',
        html: getSocialUserTemplate({ name, reason }),
      };

      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions)
      ]);
    }

    res.status(200).json({ message: 'Social inquiry sent successfully!' });
  } catch (error) {
    console.error('Social contact form error:', error);
    res.status(500).json({ error: 'Failed to send social inquiry.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
