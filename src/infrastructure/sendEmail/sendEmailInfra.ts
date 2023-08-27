import {
  iSendEmailInfraDeps,
  iSendEmailInfraInput,
} from './interfaces/iSendEmailInfra';

const sendEmailInfraInstance =
  (dependencies: iSendEmailInfraDeps) =>
  async (input: iSendEmailInfraInput): Promise<any> => {
    const {
      sendEmail,
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
    } = dependencies;

    try {
      const response = await sendEmail(input);
      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message,
        code: ErrorCodes.SEND_EMAIL_FAILED,
        layer: ErrorLayer,
        status: statusCodes.INTERNAL_SERVER_ERROR,
        payload: input,
        name: DefaultErrorName,
        error,
      });
    }
  };

export default sendEmailInfraInstance;
