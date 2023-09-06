export const signUpControllerOutputMock409 = {
  status: 409,
  body: {
    message: 'That email is already in use',
    code: 'GET_USER_BY_KEY_FAILED',
  },
};

export const signUpControllerOutputMock200 = {
  status: 201,
  body: {
    pk: 'USER#test@gmail.com',
    sk: 'USER#data',
    email: 'test@gmail.com',
    status: 'ACTIVE',
    creation_date: 1693974034,
    role: 'default',
    type: 'USER',
    contact_info: {
      address: {
        city: 'string',
        province: 'string',
        country: 'string',
        street: 'string',
        neighbor: 'string',
      },
      phone_number: {
        country_code: '+string',
        number: 'string',
      },
    },
    verified: false,
  },
};
