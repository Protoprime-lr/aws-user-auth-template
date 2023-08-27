import { iSendVerifyEmailDomainInput } from '../../../../src/domain/sendVerifyEmailDomain/interfaces/iSendVerifyEmailDomain';

export const sendVerifyEmailDomainInputMock200: iSendVerifyEmailDomainInput = {
  email: process.env.FAKE_EMAIL ?? 'fale_sender@gmail.com',
};
