import { IQueryParams } from '../../common/utils/builders/interfaces/TableRequestBuilder.interface';
import { iTableDeps } from './interfaces/iTableInfra';

export const saveTableItem =
  (dependencies: iTableDeps) =>
  async ({ schema, input, tableName }): Promise<any> => {
    const {
      TableInstance,
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
    } = dependencies;

    try {
      const Model = TableInstance(schema, tableName);
      const item = new Model(input);
      const response = await item.save();

      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message,
        code: ErrorCodes.SAVE_ITEM_FAILED,
        layer: ErrorLayer,
        status: statusCodes.INTERNAL_SERVER_ERROR,
        payload: input,
        name: DefaultErrorName,
        error,
      });
    }
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
      const { schema, tableName, params } = input;
      const Model = TableInstance(schema, tableName).query(params.query);

      if (params.options?.using_index) {
        Model.using(params.options.using_index);
      }
      const response = await Model.exec();

      console.log('MARTIN_LOG=> response', JSON.stringify(response));
      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message,
        code: ErrorCodes.QUERY_ITEMS_FAILED,
        layer: ErrorLayer,
        status: statusCodes.INTERNAL_SERVER_ERROR,
        payload: input,
        name: DefaultErrorName,
        error,
      });
    }
  };
