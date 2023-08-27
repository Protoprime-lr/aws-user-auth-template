export const getUserByKeyAdapterOutputMock200 = {
  password: 'pepe12341',
  role: 'default',
  sk: 'USER#data',
  verified: false,
  pk: 'USER#test@gmail.com',
  creation_date: 1692663663,
  contact_info: {
    phone_number: {
      country_code: '+string',
      number: 'string',
    },
    address: {
      country: 'string',
      province: 'string',
      city: 'string',
      neighbor: 'string',
      street: 'string',
    },
  },
  type: 'USER',
  email: 'test@gmail.com',
  status: 'ACTIVE',
};

export const getUserByKeyAdapterOutputMock404 = {
  message: 'User not found',
  status: 404,
  code: 'GET_USER_BY_KEY_FAILED',
  layer: 'ADAPTER#GET_USER_BY_KEY_FAILED',
  name: 'FAULT_ADAPTER_ERROR',
};
