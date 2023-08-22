import { iSendEmailAdapterInput } from '../../../../src/adapters/sendEmailAdapter/interfaces/iSendEmailAdapter';

export const sendEmailAdapterInputMock200: iSendEmailAdapterInput = {
  destination: 'fake_email@gmail.com',
  message: {
    text: 'Cualquier cosa',
  },
  title: 'fake title',
};
