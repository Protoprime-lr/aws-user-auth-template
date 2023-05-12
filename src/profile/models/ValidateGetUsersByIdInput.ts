import { InputValidation } from 'rebased/schema/inputValidation';

export default class ValidateGetUsersByIdInput extends InputValidation {
  constructor(payload: any, meta: any) {
    super({
      type: 'USER.GET_BY_ID',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema: {
        settings: { strict: true },
        schema: {
          id: { type: String, required: true },
        },
      },
    });
  }
}
