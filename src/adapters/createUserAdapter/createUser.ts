import {
  iCreateUserAdapterDeps,
  iCreateUserAdapterInput,
} from './interfaces/createUserAdapter';

const createUserAdapterInstance =
  (dependencies: iCreateUserAdapterDeps) =>
  async (input: iCreateUserAdapterInput): Promise<any> => {
    const {
      createUserInfra,
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
      UserEntity,
    } = dependencies;
    console.log('MARTIN_LOG=> createUserAdapter input', JSON.stringify(input));

    try {
      const userItem = new UserEntity(input.payload);
      const infraResponse = await createUserInfra(userItem.get());
      return infraResponse;
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
