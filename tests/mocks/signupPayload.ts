const signupPayload = {
  email: 'test@gmail.com',
  password: 'pepe12341',
  name: 'test',
  last_name: 'test',
  document_id: 'string',
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

export default signupPayload;
