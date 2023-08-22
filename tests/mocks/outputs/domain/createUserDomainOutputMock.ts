// import signupPayload from '../common/signupPayload';

export const createUserDomainOutputMock200 = {
  pk: 'USER#test@gmail.com',
  sk: 'USER#data',
  password: '$2b$12$UT0oEtUMXgdoByVYnTJ48uZF31n2A62v5kB6/TamVfO38u3VgkEQe',
  email: 'test@gmail.com',
  status: 'ACTIVE',
  creation_date: 1692642953,
  role: 'default',
  type: 'USER',
  verified: false,
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
};
