import Faker from 'fakerator';
import { iVerifyEmailDomainInput } from '../../../../src/domain/verifyEmailDomain/interface/iVerifyEmailDomain';

export const verifyEmailDomainInputMock200: iVerifyEmailDomainInput = {
  verificationId: Faker().misc.uuid(),
  verificationCode: '555369',
};
