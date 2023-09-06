import {
  iCreateItemTableInput,
  iDeleteItemTableInput,
  iQueryTableInput,
  iTableDeps,
  iUpdateItemTableInput,
} from './interfaces/iTableInfra';

export const saveTableItem =
  (dependencies: iTableDeps) =>
  async (input: iCreateItemTableInput): Promise<any> => {
    const {
      TableInstance,
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
    } = dependencies;

    try {
      const { schema, payload, tableName } = input;
      const Model = TableInstance(schema, tableName);
      const item = new Model(payload);
      const response = await item.save();

      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message,
        code: ErrorCodes.CREATE_TABLE_ITEM_FAILED,
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
  async (input: iQueryTableInput): Promise<any[]> => {
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

      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message,
        code: ErrorCodes.QUERY_TABLE_ITEMS_FAILED,
        layer: ErrorLayer,
        status: statusCodes.INTERNAL_SERVER_ERROR,
        payload: input,
        name: DefaultErrorName,
        error,
      });
    }
  };

export const deleteTableItem =
  (dependencies: iTableDeps) => async (input: iDeleteItemTableInput) => {
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
      const response = await TableInstance(schema, tableName).delete(params);

      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message,
        code: ErrorCodes.DELETE_TABLE_ITEM_FAILED,
        layer: ErrorLayer,
        status: statusCodes.INTERNAL_SERVER_ERROR,
        payload: input,
        name: DefaultErrorName,
        error,
      });
    }
  };

export const updateTableItem =
  (dependencies: iTableDeps) =>
  async (input: iUpdateItemTableInput): Promise<any> => {
    const {
      TableInstance,
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
    } = dependencies;

    try {
      const { schema, payload, params, tableName } = input;
      const response = await TableInstance(schema, tableName).update(
        params,
        payload
      );

      return response;
    } catch (error) {
      throw ErrorHandler({
        message: error.message,
        code: ErrorCodes.CREATE_TABLE_ITEM_FAILED,
        layer: ErrorLayer,
        status: statusCodes.INTERNAL_SERVER_ERROR,
        payload: input,
        name: DefaultErrorName,
        error,
      });
    }
  };
