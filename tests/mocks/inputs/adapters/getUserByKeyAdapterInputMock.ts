import signupPayload from '../common/signupPayload';

export const getUserByKeyAdapterInputMock200 = {
  email: signupPayload.email,
};

export const getUserByKeyAdapterInputMock404 = {
  email: 'fake-email',
};
