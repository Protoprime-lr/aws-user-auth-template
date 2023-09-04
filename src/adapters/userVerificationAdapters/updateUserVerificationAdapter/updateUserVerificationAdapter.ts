import {
  iUpdateUserVerificationAdapterDeps,
  iUpdateUserVerificationAdapterInput,
} from './interface/iUpdateUserVerificationAdapter';

const deleteUserVerificationAdapterInstance =
  (dependencies: iUpdateUserVerificationAdapterDeps) =>
  async (input: iUpdateUserVerificationAdapterInput) => {
    const {
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      UserVerification,
      updateItemTableInfra,
      statusCodes,
    } = dependencies;

    try {
      const response = await updateItemTableInfra({
        schema: UserVerification.getDynamooseModel(),
        params: { pk: input.pk, sk: input.sk },
        payload: input.payload,
        tableName: process.env.USERS_CACHE_TABLE,
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
