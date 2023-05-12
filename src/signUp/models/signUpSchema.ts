import { InputValidation } from 'rebased/schema/inputValidation';

const userSchema = {
  schema: {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    document_id: { type: String, required: true },
    contact_info: {
      address: {
        city: { type: String, required: false },
        province: { type: String, required: false },
        country: { type: String, required: false },
        street: { type: String, required: false },
        neighbor: { type: String, required: false },
      },
      phone_number: {
        country_code: { type: String, required: true },
        number: { type: String, required: true },
      },
    },
  },
  settings: { strict: true },
};

export default class SignUpSchema extends InputValidation {
  constructor(payload: any, meta: any) {
    super({
      type: 'USERS.SIGNUP',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema: userSchema,
    });
  }
}
