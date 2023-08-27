import signupPayload from '../common/signupPayload';

export const createUserInfraInputMock200 = {
  pk: `USER#${signupPayload.email}`,
  sk: 'USER#data',
  type: 'USER',
  role: 'default',
  verified: false,
  ...signupPayload,
};
