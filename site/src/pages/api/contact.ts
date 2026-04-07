import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const toEmail = import.meta.env.CONTACT_TO_EMAIL || 'info@batteinterioristas.com';
const fromEmail = import.meta.env.RESEND_FROM_EMAIL;
const resendApiKey = import.meta.env.RESEND_API_KEY;

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const nombre = String(formData.get('nombre') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const telefono = String(formData.get('telefono') || '').trim();
  const tipo = String(formData.get('tipo') || '').trim();
  const mensaje = String(formData.get('mensaje') || '').trim();
  const privacidad = formData.get('privacidad');
  const website = String(formData.get('website') || '').trim();

  if (website) {
    return redirect('/contacto?status=ok');
  }

  if (!nombre || !email || !mensaje || !privacidad || !isValidEmail(email)) {
    return redirect('/contacto?status=error');
  }

  if (!resendApiKey || !fromEmail) {
    console.error('Missing RESEND_API_KEY or RESEND_FROM_EMAIL environment variables.');
    return redirect('/contacto?status=error');
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Nuevo contacto web BATTE: ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Telefono: ${telefono || '-'}`,
        `Tipo de proyecto: ${tipo || '-'}`,
        '',
        'Mensaje:',
        mensaje
      ].join('\n')
    });

    return redirect('/contacto?status=ok');
  } catch (error) {
    console.error('Error sending contact email:', error);
    return redirect('/contacto?status=error');
  }
};
