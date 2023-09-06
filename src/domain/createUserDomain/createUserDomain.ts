import { iUserPersonalData } from '../../common/interfaces/IUser';
import {
  iCreateUserDomainDeps,
  iCreateUserDomainInput,
} from './interfaces/iCreateUserDomain';

const createUserDomainInstance =
  (dependencies: iCreateUserDomainDeps) =>
  async (input: iCreateUserDomainInput): Promise<iUserPersonalData> => {
    const {
      createUserAdapter,
      getUserByKeyAdapter,
      ErrorHandler,
      DefaultErrorName,
      ErrorCodes,
      ErrorMessages,
      ErrorLayer,
      statusCodes,
      encryptPassword,
    } = dependencies;

    console.log('MARTIN_LOG=> createUserDomainInstance', JSON.stringify(input));

    try {
      const { payload: userItem } = input;

      const userExists = await getUserByKeyAdapter({
        email: userItem.email,
      });

      if (userExists) {
        throw {
          message: ErrorMessages.USER_ALREADY_IN_DB,
          status: statusCodes.CONFLICT,
        };
      }

      userItem.password = await encryptPassword(userItem.password);

      const adapterResponse: any = await createUserAdapter({
        payload: input.payload,
      });

      delete adapterResponse.password;

      return adapterResponse;
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

export default createUserDomainInstance;
