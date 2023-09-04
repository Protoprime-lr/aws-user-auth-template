import {
  iGetUserByKeyAdapterDeps,
  iGetUserByKeyAdapterInput,
} from './interfaces/iGetUserByKeyAdapter';

const getUserByKeyAdapterInstance =
  (dependencies: iGetUserByKeyAdapterDeps) =>
  async (input: iGetUserByKeyAdapterInput) => {
    const {
      ErrorHandler,
      queryItemTableInfra,
      DefaultErrorName,
      ErrorCodes,
      ErrorLayer,
      statusCodes,
      TableTypes,
      UserEntity,
      UsersTableName,
    } = dependencies;
    try {
      const response = await queryItemTableInfra({
        schema: UserEntity.getDynamooseModel(),
        tableName: UsersTableName,
        params: {
          query: {
            pk: {
              eq: `${TableTypes.USER}#${input.email}`,
              and: {
                sk: {
                  eq: `${TableTypes.USER}#data`,
                },
              },
            },
          },
        },
      });

      return response[0];
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

export default getUserByKeyAdapterInstance;
