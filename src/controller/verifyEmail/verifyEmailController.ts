import {
  iVerifyEmailControllerDeps,
  iVerifyEmailControllerInput,
} from './interface/iVerifyEmailController';

const verifyEmailControllerInstance =
  (dependencies: iVerifyEmailControllerDeps) =>
  async (input: iVerifyEmailControllerInput) => {
    const {
      verifyEmailDomain,
      ResponseEntity,
      ErrorHandler,
      ErrorCodes,
      DefaultErrorName,
      ErrorLayer,
      statusCodes,
    } = dependencies;

    try {
      const { parameters, query } = input;
      const response = await verifyEmailDomain({
        verificationId: parameters.id,
        verificationCode: query.code,
      });

      return ResponseEntity.success(statusCodes.OK, response);
    } catch (error) {
      const customError = ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.EMAIL_VERIFICATION_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });

      return ResponseEntity.error(customError.status, customError.code, {
        message: customError.message,
      });
    }
  };

export default verifyEmailControllerInstance;
