import { iSendEmailInfraInput } from '../../../../src/infrastructure/sendEmail/interfaces/iSendEmailInfra';

export const sendEmailInfraInputMock200: iSendEmailInfraInput = {
  destination: 'fake_email@gmail.com',
  message: {
    text: 'Cualquier cosa',
  },
  title: 'fake title',
  source: 'fake_sender@gmail.com',
};
