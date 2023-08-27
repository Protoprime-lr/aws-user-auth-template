import {
  iSendEmailAdapterDeps,
  iSendEmailAdapterInput,
} from './interfaces/iSendEmailAdapter';

const sendEmailAdapterInstance =
  (dependencies: iSendEmailAdapterDeps) =>
  async (input: iSendEmailAdapterInput) => {
    const {
      sendEmailInfra,
      sourceEmail,
      ErrorHandler,
      DefaultErrorName,
      ErrorCodes,
      ErrorLayer,
      statusCodes,
    } = dependencies;
    try {
      if (!sourceEmail || sourceEmail === '') {
        throw {
          message: 'Missing System Email',
        };
      }
      const response = sendEmailInfra({
        ...input,
        source: sourceEmail,
      });
      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.SEND_EMAIL_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });
    }
  };

export default sendEmailAdapterInstance;
