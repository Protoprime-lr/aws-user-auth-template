import { iUserVerificationItem } from '../../../entities/userVerification/interfaces/iUserVerification';
import {
  iGetUserVerificationAdapterDeps,
  iGetUserVerificationAdapterInput,
} from './interface/iGetUserVerificationAdapter';

const getUserVerificationAdapterInstance =
  (dependencies: iGetUserVerificationAdapterDeps) =>
  async (
    input: iGetUserVerificationAdapterInput
  ): Promise<iUserVerificationItem> => {
    const {
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      UserVerification,
      queryItemTableInfra,
      statusCodes,
      UsersCacheTableName,
      UsersCacheTableIndexes,
    } = dependencies;

    try {
      let query = {};
      if (input.pk && input.sk) {
        query = {
          pk: {
            eq: input.pk,
          },
          sk: {
            eq: input.sk,
          },
        };
      }

      const options: any = {};
      if (input.id && input.verification_code) {
        query = {
          id: {
            eq: input.id,
          },
          verification_code: {
            eq: input.verification_code,
          },
        };
        options.using_index = `${UsersCacheTableIndexes.GSI_ID}`;
      }

      const response = await queryItemTableInfra({
        schema: UserVerification.getDynamooseModel(),
        tableName: UsersCacheTableName,
        params: {
          query,
          options,
        },
      });

      return response[0];
    } catch (error) {
      throw ErrorHandler({
        message: error.message?.message ?? error.message,
        code: ErrorCodes.GET_USER_VERIFICATION_FAILED,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        name: error.name ?? DefaultErrorName,
        error,
      });
    }
  };

export default getUserVerificationAdapterInstance;
