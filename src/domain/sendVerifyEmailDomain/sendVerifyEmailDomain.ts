import {
  iSendVerifyEmailDomainDeps,
  iSendVerifyEmailDomainInput,
} from './interfaces/iSendVerifyEmailDomain';

const sendVerifyEmailDomainInstance =
  (dependencies: iSendVerifyEmailDomainDeps) =>
  async (input: iSendVerifyEmailDomainInput) => {
    const {
      ErrorHandler,
      sendEmailAdapter,
      eMessageType,
      verifyEmailMessage,
      verifyEmailTitle,
      DefaultErrorName,
      ErrorCodes,
      ErrorLayer,
      statusCodes,
    } = dependencies;
    try {
      const [messageType, messageContent] = verifyEmailMessage.split('#');

      if (!Object.keys(eMessageType).includes(messageType)) {
        throw {
          message: 'Invalid Message Type',
          status: statusCodes.NOT_ACCEPTABLE,
        };
      }

      const response = await sendEmailAdapter({
        destination: input.email,
        title: verifyEmailTitle,
        message: {
          [messageType]: messageContent.trim(),
        },
      });

      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.SEND_VERIFY_EMAIL_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });
    }
  };

export default sendVerifyEmailDomainInstance;
