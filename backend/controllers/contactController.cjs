const nodemailer = require('nodemailer');

exports.sendContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  console.log(email, message)

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,       // your Gmail
      pass: process.env.EMAIL_PASS        // your app password
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully 🚀' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Something went wrong while sending email' });
  }
};
