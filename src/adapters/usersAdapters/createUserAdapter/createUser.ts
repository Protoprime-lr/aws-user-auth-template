import { iUserTableItem } from '../../../common/interfaces/IUser';
import {
  iCreateUserAdapterDeps,
  iCreateUserAdapterInput,
} from './interfaces/createUserAdapter';

const createUserAdapterInstance =
  (dependencies: iCreateUserAdapterDeps) =>
  async (input: iCreateUserAdapterInput): Promise<iUserTableItem> => {
    const {
      createUserInfra,
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
      UserEntity,
      UsersTableName,
    } = dependencies;
    console.log('MARTIN_LOG=> createUserAdapter input', JSON.stringify(input));

    try {
      const userItem = new UserEntity(input.payload);
      await createUserInfra({
        schema: UserEntity.getDynamooseModel(),
        payload: userItem.get(),
        tableName: UsersTableName,
      });

      return userItem.get();
    } catch (error) {
      throw ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.CREATE_USER_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });
    }
  };

export default createUserAdapterInstance;
