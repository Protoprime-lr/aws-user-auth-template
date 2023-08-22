import ResponseEntity from '../../entities/Response';
import {
  iUserRegistrationControllerDeps,
  iUserRegistrationControllerInput,
} from './interface/iUserRegistrationController';

const userRegistrationControllerInstance =
  (dependencies: iUserRegistrationControllerDeps) =>
  async (input: iUserRegistrationControllerInput) => {
    const {
      createUserDomain,
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

      return newUser;
    } catch (error) {
      const customError = ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.GET_USER_BY_KEY_FAILED,
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

export default userRegistrationControllerInstance;
