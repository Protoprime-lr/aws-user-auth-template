import {
  iUpdateUserAdapterDeps,
  iUpdateUserAdapterInput,
} from './interface/iUpdateUserAdapter';

const updateUserAdapterInstance =
  (dependencies: iUpdateUserAdapterDeps) =>
  async (input: iUpdateUserAdapterInput) => {
    const {
      ErrorHandler,
      updateItemTableInfra,
      DefaultErrorName,
      ErrorCodes,
      ErrorLayer,
      statusCodes,
      UserEntity,
      UsersTableName,
    } = dependencies;
    try {
      const { payload, params } = input;
      const response = await updateItemTableInfra({
        params,
        payload,
        schema: UserEntity.getDynamooseModel(),
        tableName: UsersTableName,
      });
      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.GET_USER_BY_KEY_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });
    }
  };

export default updateUserAdapterInstance;
