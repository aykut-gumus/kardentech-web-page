import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, _honeypot } = body;

    // Honeypot check for basic anti-spam
    if (_honeypot) {
      // Silently reject bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Zorunlu alanları doldurunuz (Ad Soyad, E-posta, Mesaj).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 100 || (phone && phone.length > 50) || (subject && subject.length > 150) || message.length > 3000) {
      return NextResponse.json(
        { error: 'Girdiğiniz bilgiler izin verilen karakter sınırını aşıyor.' },
        { status: 400 }
      );
    }

    // SMTP Configuration
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_FROM_EMAIL
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_FROM_EMAIL) {
      // Server is not configured to send emails
      return NextResponse.json(
        { error: 'Mesajınız şu anda gönderilemedi. Lütfen telefon veya WhatsApp üzerinden bizimle iletişime geçin.' },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Sanitize input slightly for text representation
    const safeName = name.replace(/[\r\n]+/g, ' ');
    const mailSubject = `[Kardentech Web] Yeni Mesaj - ${safeName}`;
    const textContent = `
Yeni İletişim Formu Mesajı

Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone || 'Belirtilmedi'}
Konu: ${subject || 'Belirtilmedi'}

Mesaj:
${message}
    `.trim();

    const mailOptions = {
      from: CONTACT_FROM_EMAIL,
      to: 'info@kardentech.com',
      replyTo: email,
      subject: mailSubject,
      text: textContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Mesajınız başarıyla iletildi. Teşekkür ederiz.' }, { status: 200 });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Mesajınız gönderilemedi. Lütfen tekrar deneyin veya telefon/WhatsApp üzerinden bizimle iletişime geçin.' },
      { status: 500 }
    );
  }
}
