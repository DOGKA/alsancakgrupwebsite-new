const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fullName, email, subject, message } = req.body || {};

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const gmailUser = process.env.GMAIL_USER || process.env.GMAIL_USER_1;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_APP_PASSWORD_1;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser, // noreply.alsancakgrup@gmail.com
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `Alsancak Grup <${gmailUser}>`,
      to: 'info@alsancakgrup.com.tr',
      subject: `[Web İletişim] ${subject}`,
      text: `Gönderen: ${fullName} <${email}>
\nKonu: ${subject}
\nMesaj:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;color:#111">
          <p><strong>Gönderen:</strong> ${fullName} &lt;${email}&gt;</p>
          <p><strong>Konu:</strong> ${subject}</p>
          <p><strong>Mesaj:</strong></p>
          <p style="white-space:pre-line">${message}</p>
        </div>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('send-email error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};


