import { IQueryParams } from '../../common/utils/builders/interfaces/TableRequestBuilder.interface';
import { iTableDeps } from './interfaces/iTableInfra';

export const saveTableItem = (dependencies: iTableDeps) => async (input) => {
  const { TableInstance } = dependencies;

  const { Item } = await TableInstance.createItem(input);

  console.log('MARTIN_LOG=> response', JSON.stringify(Item));
  return Item;
};

export const queryTableItem =
  (dependencies: iTableDeps) =>
  async (input: IQueryParams): Promise<any[]> => {
    const {
      TableInstance,
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
    } = dependencies;

    try {
      const { Items } = await TableInstance.queryItems(input);

      console.log('MARTIN_LOG=> response', JSON.stringify(Items));
      return Items;
    } catch (error) {
      throw ErrorHandler({
        message: error.message,
        code: ErrorCodes.CREATE_USER_FAILED,
        layer: ErrorLayer,
        status: statusCodes.INTERNAL_SERVER_ERROR,
        payload: input,
        name: DefaultErrorName,
        error,
      });
    }
  };
