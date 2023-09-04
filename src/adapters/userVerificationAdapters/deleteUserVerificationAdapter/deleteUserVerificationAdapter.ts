import {
  iDeleteUserVerificationAdapterDeps,
  iDeleteUserVerificationAdapterInput,
} from './interface/iDeleteUserVerificationAdapter';

const deleteUserVerificationAdapterInstance =
  (dependencies: iDeleteUserVerificationAdapterDeps) =>
  async (input: iDeleteUserVerificationAdapterInput) => {
    const {
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      UserVerification,
      deleteItemTableInfra,
      statusCodes,
      UsersCacheTableName,
    } = dependencies;

    try {
      const response = await deleteItemTableInfra({
        schema: UserVerification.getDynamooseModel(),
        params: input,
        tableName: UsersCacheTableName,
      });

      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.DELETE_USER_VERIFICATION_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });
    }
  };

export default deleteUserVerificationAdapterInstance;
