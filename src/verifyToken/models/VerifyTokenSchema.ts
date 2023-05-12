import { InputValidation } from 'rebased/schema/inputValidation';

const verifyTokenSchema = {
  schema: {
    token: { type: String, required: true },
    role: { type: String, required: false },
  },
  settings: { strict: true },
};

export default class VerifyTokenSchema extends InputValidation {
  constructor(payload: any, meta: any) {
    super({
      type: 'USERS.VERIFY_TOKEN',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema: verifyTokenSchema,
    });
  }
}
