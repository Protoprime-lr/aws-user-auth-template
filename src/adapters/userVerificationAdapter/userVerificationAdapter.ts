import {
  iUserVerificationAdapterDeps,
  iUserVerificationAdapterInput,
} from './interfaces/iUserVerificationAdapter';

const userVerificationAdapterInstance =
  (dependencies: iUserVerificationAdapterDeps) =>
  async (input: iUserVerificationAdapterInput) => {
    const {
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      createItemTableInfra,
      UserVerification,
      statusCodes,
    } = dependencies;

    try {
      const UserVerificationInstance = new UserVerification(input);

      await createItemTableInfra(UserVerificationInstance.get());

      return UserVerificationInstance.get();
    } catch (error) {
      throw ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.STORE_VERIFICATION_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });
    }
  };

export default userVerificationAdapterInstance;
