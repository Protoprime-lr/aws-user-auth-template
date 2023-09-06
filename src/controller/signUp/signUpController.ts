import ResponseEntity from '../../entities/Response';
import {
  iSignUpControllerDeps,
  iSignUpControllerInput,
} from './interface/iSignUpController';

const signUpControllerInstance =
  (dependencies: iSignUpControllerDeps) =>
  async (input: iSignUpControllerInput) => {
    const {
      createUserDomain,
      sendVerifyEmailDomain,
      ErrorHandler,
      ErrorCodes,
      DefaultErrorName,
      ErrorLayer,
      statusCodes,
    } = dependencies;

    try {
      console.log('MARTIN_LOG=> controller input', JSON.stringify(input));

      const { body: inputPayload } = input;

      const newUser = await createUserDomain({ payload: inputPayload });
      await sendVerifyEmailDomain({
        email: newUser.email,
      });

      return ResponseEntity.success(statusCodes.CREATED, newUser);
    } catch (error) {
      const customError = ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.SIGN_UP_FAILED,
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

export default signUpControllerInstance;
