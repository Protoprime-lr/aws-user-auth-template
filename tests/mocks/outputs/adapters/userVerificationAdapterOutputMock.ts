export const userVerificationAdapterOutputMock500 = {
  message: 'MessageRejected-Email address not verified fake_senderr@gmail.com',
  status: 500,
  code: 'SEND_EMAIL_FAILED',
  layer: 'INFRA#SEND_EMAIL_FAILED',
  name: 'FAULT_INFRASTRUCTURE_ERROR',
};

export const userVerificationAdapterOutputMock200 = {
  pk: 'USER#martin@gmail.com',
  sk: 'VERIFICATION_CODE#234029',
  expiration_date: 1693066812,
  verification_message: {
    html: '<div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"><h2 style="color: #333;">Verificación de Correo Electrónico</h2><p>Hola [userEmail],</p><p>¡Gracias por registrarte! Para completar tu registro, por favor haz clic en el botón de abajo para verificar tu dirección de correo electrónico:</p><a href="[verificationUrl]" style="display: inline-block; background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px;">Verificar Correo Electrónico</a><p>Si el botón de arriba no funciona, también puedes copiar y pegar el siguiente enlace en tu navegador:</p><p>[verificationUrl]</p><p>Si no te registraste para este servicio, puedes ignorar este correo electrónico de forma segura.</p><p>Saludos cordiales,<br>Nombre de Tu Empresa</p></div>',
  },
  verification_message_title: 'Verificación de Email',
  email: 'martin@gmail.com',
};
