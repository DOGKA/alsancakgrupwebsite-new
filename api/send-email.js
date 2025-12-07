const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fullName, email, subject, message } = req.body || {};

    if (!fullName || !email || !subject) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Gmail configuration
    // From: alsancakserver@gmail.com
    // To: info@alsancakgrup.com.tr
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error('Missing email configuration');
      return res.status(500).json({ error: 'Email configuration missing' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `Alsancak Grup Web <${gmailUser}>`,
      to: 'info@alsancakgrup.com.tr',
      subject: `[Web Formu] ${subject}`,
      text: `Yeni İletişim Formu Mesajı

Gönderen: ${fullName}
Email: ${email}
Konu: ${subject}

Mesaj:
${message || 'Mesaj girilmedi.'}

---
Bu mesaj alsancakgrup.com.tr web sitesi iletişim formundan gönderilmiştir.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #8b2525; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Yeni İletişim Formu Mesajı</h1>
          </div>
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 120px;">Gönderen:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;"><a href="mailto:${email}" style="color: #8b2525;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Konu:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #555;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Mesaj:</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-line; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message || 'Mesaj girilmedi.'}</p>
            </div>
          </div>
          <div style="text-align: center; padding: 20px; color: #888; font-size: 12px;">
            Bu mesaj alsancakgrup.com.tr web sitesi iletişim formundan gönderilmiştir.
          </div>
        </div>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('send-email error:', err);
    return res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
};


