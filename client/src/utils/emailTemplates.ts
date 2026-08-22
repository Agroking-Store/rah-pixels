const getBaseTemplate = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Reset & Base */
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif; background-color: #f9fafb; -webkit-font-smoothing: antialiased; }
    
    /* Container */
    .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); }
    
    /* Header */
    .header { background-color: #ffffff; padding: 30px; text-align: center; border-bottom: 3px solid #F7B71D; }
    .header h1 { color: #13071C; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 1px; }
    
    /* Content */
    .content { padding: 40px 30px; }
    h2 { color: #13071C; font-size: 24px; margin-top: 0; margin-bottom: 20px; font-weight: 600; }
    p { color: #333333; font-size: 16px; line-height: 1.6; margin-bottom: 20px; margin-top: 0; }
    
    /* Details block for admin emails */
    .details-box { background-color: #f8fafc; border-left: 3px solid #F7B71D; padding: 20px; margin-bottom: 25px; }
    .details-box p { margin-bottom: 10px; font-size: 15px; }
    .details-box p:last-child { margin-bottom: 0; }
    .details-box strong { color: #13071C; }

    /* Button */
    .cta-container { text-align: center; margin: 35px 0; }
    .cta-button { display: inline-block; background-color: #F7B71D; color: #13071C; text-decoration: none; padding: 14px 28px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    
    /* Footer */
    .footer { background-color: #13071C; color: #ffffff; padding: 30px; text-align: center; font-size: 14px; }
    .footer a { color: #F7B71D; text-decoration: none; margin: 0 10px; }
    .footer .socials { margin: 20px 0; }
    .footer .copyright { color: #888888; font-size: 12px; margin-top: 20px; margin-bottom: 0;}
  </style>
</head>
<body>
  <div class="container">
    <!-- HEADER -->
    <div class="header">
      <h1>RAH PIXELS</h1>
    </div>

    <!-- BODY -->
    <div class="content">
      ${content}
    </div>

    <!-- FOOTER -->
    <div class="footer">
      <p style="color: #ffffff; margin-bottom: 0;">connect@rahpixels.design | +91 9504093093</p>
      <div class="socials">
        <a href="https://www.youtube.com/@sudeepachaudhari">YouTube</a>
        <a href="https://www.linkedin.com/in/sudeepa-chaudhari-245539240">LinkedIn</a>
        <a href="https://www.instagram.com/rahpixels">Instagram</a>
      </div>
      <p class="copyright">Copyright © ${new Date().getFullYear()} Rah Pixels. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export const getWelcomeEmailTemplate = (): string => {
  return getBaseTemplate(`
    <h2>Welcome to Rah Pixels!</h2>
    <p>Hi there,</p>
    <p>Thank you for subscribing to our newsletter. We're excited to have you on board!</p>
    <p>We'll keep you updated with our latest work, design insights, and exclusive announcements directly in your inbox.</p>
    
    <div class="cta-container">
      <a href="https://rahpixels.design" class="cta-button">Explore Our Work</a>
    </div>
    
    <p>Best regards,<br><strong>The Rah Pixels Team</strong></p>
  `);
};

export interface ContactAdminProps {
  name: string;
  email: string;
  phone?: string;
  company: string;
  service: string;
  timeline?: string;
  project: string;
}

export const getContactAdminTemplate = ({ name, email, phone, company, service, timeline, project }: ContactAdminProps): string => {
  return getBaseTemplate(`
    <h2>New Project Inquiry</h2>
    <p>You have received a new contact form submission.</p>
    
    <div class="details-box">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Company/Brand:</strong> ${company}</p>
      <p><strong>Service Needed:</strong> ${service}</p>
      <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
    </div>
    
    <h3 style="color: #13071C; margin-bottom: 10px;">Project Details:</h3>
    <p style="background-color: #f9fafb; padding: 15px; border: 1px solid #e5e7eb;">${project}</p>
  `);
};

export interface ContactUserProps {
  name: string;
  service: string;
}

export const getContactUserTemplate = ({ name, service }: ContactUserProps): string => {
  return getBaseTemplate(`
    <h2>Hi ${name},</h2>
    <p>Thank you for reaching out to Rah Pixels!</p>
    <p>We have successfully received your inquiry about <strong>${service}</strong>. Our team will review your project details carefully and get back to you shortly.</p>
    
    <div class="cta-container">
      <a href="https://rahpixels.design" class="cta-button">Visit Our Website</a>
    </div>

    <p>Best regards,<br><strong>The Rah Pixels Team</strong></p>
  `);
};

export interface SocialAdminProps {
  name: string;
  email: string;
  social?: string;
  reason: string;
  format?: string;
  about: string;
  focus: string;
  extra?: string;
}

export const getSocialAdminTemplate = ({ name, email, social, reason, format, about, focus, extra }: SocialAdminProps): string => {
  return getBaseTemplate(`
    <h2>New Social Contact Submission</h2>
    <p>You have received a new inquiry from social media.</p>
    
    <div class="details-box">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Social Link:</strong> ${social || 'N/A'}</p>
      <p><strong>Reason:</strong> ${reason}</p>
      <p><strong>Session Format:</strong> ${format || 'N/A'}</p>
    </div>
    
    <h3 style="color: #13071C; margin-bottom: 10px;">About:</h3>
    <p style="background-color: #f9fafb; padding: 15px; border: 1px solid #e5e7eb;">${about}</p>
    
    <h3 style="color: #13071C; margin-bottom: 10px; margin-top: 20px;">Session Focus:</h3>
    <p style="background-color: #f9fafb; padding: 15px; border: 1px solid #e5e7eb;">${focus}</p>
    
    <h3 style="color: #13071C; margin-bottom: 10px; margin-top: 20px;">Additional Info:</h3>
    <p style="background-color: #f9fafb; padding: 15px; border: 1px solid #e5e7eb;">${extra || 'None'}</p>
  `);
};

export interface SocialUserProps {
  name: string;
  reason: string;
}

export const getSocialUserTemplate = ({ name, reason }: SocialUserProps): string => {
  return getBaseTemplate(`
    <h2>Hi ${name},</h2>
    <p>Thank you for reaching out to us!</p>
    <p>We have successfully received your request for: <strong>${reason}</strong>. We'll review your details and get back to you shortly to figure out the next steps.</p>
    
    <div class="cta-container">
      <a href="https://rahpixels.design" class="cta-button">Visit Our Website</a>
    </div>

    <p>Best regards,<br><strong>The Rah Pixels Team</strong></p>
  `);
};
