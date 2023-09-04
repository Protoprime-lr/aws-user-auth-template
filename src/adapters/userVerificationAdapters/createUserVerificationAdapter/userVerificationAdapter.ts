import {
  iCreateUserVerificationAdapterDeps,
  iCreateUserVerificationAdapterInput,
} from './interfaces/iUserVerificationAdapter';

const createUserVerificationAdapterInstance =
  (dependencies: iCreateUserVerificationAdapterDeps) =>
  async (input: iCreateUserVerificationAdapterInput) => {
    const {
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      createItemTableInfra,
      UserVerification,
      statusCodes,
      UsersCacheTableName,
    } = dependencies;

    try {
      const UserVerificationInstance = new UserVerification(input);

      await createItemTableInfra({
        schema: UserVerification.getDynamooseModel(),
        payload: UserVerificationInstance.get(),
        tableName: UsersCacheTableName,
      });

      return UserVerificationInstance.get();
    } catch (error) {
      throw ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.CREATE_USER_VERIFICATION_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });
    }
  };

export default createUserVerificationAdapterInstance;
