import {
  iVerifyEmailDomainDeps,
  iVerifyEmailDomainInput,
} from './interface/iVerifyEmailDomain';

const verifyEmailDomainInstance =
  (dependencies: iVerifyEmailDomainDeps) =>
  async (input: iVerifyEmailDomainInput) => {
    const {
      ErrorHandler,
      getUserByKeyAdapter,
      getUserVerificationAdapter,
      updateUserAdapter,
      ErrorMessages,
      DefaultErrorName,
      ErrorCodes,
      ErrorLayer,
      statusCodes,
    } = dependencies;
    try {
      const { verificationCode, verificationId } = input;
      const userVerification = await getUserVerificationAdapter({
        id: verificationId,
        verification_code: verificationCode,
      });

      if (!userVerification) {
        throw ErrorHandler({
          message: ErrorMessages.EMAIL_VERIFICATION_NOT_FOUND,
          code: ErrorCodes.EMAIL_VERIFICATION_FAILED,
          layer: ErrorLayer,
          status: statusCodes.CONFLICT,
          name: DefaultErrorName,
        });
      }

      const user = await getUserByKeyAdapter({ email: userVerification.email });

      if (!user) {
        throw ErrorHandler({
          message: ErrorMessages.USER_NOT_FOUND,
          code: ErrorCodes.EMAIL_VERIFICATION_FAILED,
          layer: ErrorLayer,
          status: statusCodes.CONFLICT,
          name: DefaultErrorName,
        });
      }

      const response = await updateUserAdapter({
        params: { pk: user.pk, sk: user.sk },
        payload: {
          verified: true,
        },
      });

      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.EMAIL_VERIFICATION_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });
    }
  };

export default verifyEmailDomainInstance;
