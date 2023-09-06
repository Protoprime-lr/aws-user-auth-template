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
      createUserVerificationAdapter,
      DefaultErrorName,
      ErrorCodes,
      ErrorLayer,
      statusCodes,
    } = dependencies;
    try {
      const userVerification = await createUserVerificationAdapter(input);

      const response = await sendEmailAdapter({
        destination: input.email,
        title: userVerification.verification_message_title,
        message: userVerification.verification_message,
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
