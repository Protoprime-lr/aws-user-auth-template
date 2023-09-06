export const userVerificationAdapterOutputMock500 = {
  message: 'MessageRejected-Email address not verified fake_senderr@gmail.com',
  status: 500,
  code: 'SEND_EMAIL_FAILED',
  layer: 'INFRA#SEND_EMAIL_FAILED',
  name: 'FAULT_INFRASTRUCTURE_ERROR',
};

export const userVerificationAdapterOutputMock200 = {
  verification_message: {
    html: '<div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"><h2 style="color: #333;">Verificación de Correo Electrónico</h2><p>Hola test@gmail.com,</p><p>¡Gracias por registrarte! Para completar tu registro, por favor haz clic en el botón de abajo para verificar tu dirección de correo electrónico:</p><a href="www.fakedomain.com/users/verification/78d8b1dc-eb9c-4d28-bb8b-4ae6c3d7cac2?code=690992" style="display: inline-block; background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px;">Verificar Correo Electrónico</a><p>Si el botón de arriba no funciona, también puedes copiar y pegar el siguiente enlace en tu navegador:</p><p>www.fakedomain.com/users/verification/78d8b1dc-eb9c-4d28-bb8b-4ae6c3d7cac2?code=690992</p><p>Si no te registraste para este servicio, puedes ignorar este correo electrónico de forma segura.</p><p>Saludos cordiales,<br>Nombre de Tu Empresa</p></div>',
  },
  sk: 'VERIFICATION_CODE#690992',
  pk: 'USER#test@gmail.com',
  id: '78d8b1dc-eb9c-4d28-bb8b-4ae6c3d7cac2',
  expiration_date: 1693972426,
  verification_message_title: 'Verificación de Email',
  verification_code: '690992',
  email: 'test@gmail.com',
};
