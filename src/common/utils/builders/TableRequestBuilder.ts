/* eslint-disable no-console */
import dynamo from 'rebased/service/storage/dynamo';
import { ErrorHandled } from 'rebased/util/error';
import OPERATIONS from '../enums/dynamoOperationsEnum';
import {
  StatusCodes,
  StatusMessages,
  STATUS_PREFIX,
} from '../enums/responseStatus';
import {
  IUserTableItem,
  IUserById,
} from '../../../signUp/interfaces/user.interface';

import {
  IFormatParams,
  IFormatParamsItem,
  IQueryParams,
  ITableBuilder,
} from './interfaces/TableRequestBuilder.interface';

export default class TableRequestBuilder implements ITableBuilder {
  tableName?: string;

  params: any;

  constructor() {
    this.tableName = process.env.TABLE_NAME;
  }

  queryItems = async (params: IQueryParams): Promise<IUserTableItem[]> => {
    const finalParams = {
      ...params,
      ScanIndexForward: false,
      TableName: this.tableName,
    };
    const { Items } = await dynamo.queryTable(finalParams);

    if (!Items) {
      throw new ErrorHandled(
        StatusMessages.NOT_FOUND.replace(':item', 'ITEM'),
        {
          statusCode: 404,
          code: StatusCodes.ITEM_NOT_FOUND,
        }
      );
    }

    return Items;
  };

  getItem = async (payload: IUserById): Promise<IUserTableItem> => {
    this.formatDynamoParams({ input: { payload }, operation: OPERATIONS.GET });
    console.log('PARAMS', JSON.stringify(this.params));
    const { Item } = await dynamo.getItem(this.params);
    return Item;
  };

  createItem = async (payload: IUserTableItem, condition?: string) => {
    try {
      this.formatDynamoParams({
        input: { payload, condition },
        operation: OPERATIONS.PUT,
      });
      await dynamo.putItem(this.params);
    } catch (error) {
      if (error.message === StatusMessages.CONDITIONAL_FAILED) {
        throw new ErrorHandled(
          StatusMessages.ALREADY_EXISTS.replace(STATUS_PREFIX, 'USER'),
          {
            status: 409,
            code: StatusCodes.ALREADY_EXISTS,
          }
        );
      } else {
        throw error;
      }
    }
  };

  updateItem = async (payload: any) => {
    try {
      this.formatDynamoParams({ input: payload, operation: OPERATIONS.UPDATE });

      const { Attributes } = await dynamo.updateItem(this.params);

      return Attributes;
    } catch (error) {
      if (error.message === StatusMessages.CONDITIONAL_FAILED) {
        throw new ErrorHandled(StatusMessages.ALREADY_EXISTS, {
          statusCode: 409,
          code: StatusCodes.ALREADY_EXISTS,
        });
      } else {
        throw error;
      }
    }
  };

  formatDynamoParams = (toFormat: IFormatParams) => {
    if (!this.tableName) {
      throw new ErrorHandled('formatDynamoParams Missing TableName', {
        statusCode: 500,
        code: StatusCodes.MISSING_TABLE_NAME,
      });
    }

    const operations = {
      [`${OPERATIONS.PUT}`]: ({ payload, condition }: IFormatParamsItem) => {
        if (!this.tableName) return;
        return {
          TableName: this.tableName,
          Item: payload,
          ConditionExpression: condition ?? 'attribute_not_exists(id)',
        };
      },
      [`${OPERATIONS.DELETE}`]: ({ payload }: IFormatParamsItem) => {
        if (!this.tableName) return;
        return {
          TableName: this.tableName,
          Key: payload,
        };
      },
      [`${OPERATIONS.GET}`]: ({ payload }: IFormatParamsItem) => {
        if (!this.tableName) return;
        return {
          TableName: this.tableName,
          Key: payload,
        };
      },
      [`${OPERATIONS.UPDATE}`]: ({ payload, key }: IFormatParamsItem) => {
        if (!this.tableName) return;
        const updateExpressions: any[] = [];
        const ExpressionAttributeNames: any = {};
        const ExpressionAttributeValues: any = {};

        // Mapeamos los atributos a la updateExpression
        Object.keys(payload).forEach((updatedProperty) => {
          if (!this.tableName) return;
          updateExpressions.push(`#${updatedProperty}=:${updatedProperty}`);
          ExpressionAttributeNames[`#${updatedProperty}`] = updatedProperty;
          ExpressionAttributeValues[`:${updatedProperty}`] =
            payload[updatedProperty];
        });

        const UpdateExpression = `SET ${updateExpressions.join(', ')}`;

        const params = {
          TableName: this.tableName,
          Key: key,
          UpdateExpression,
          ExpressionAttributeNames,
          ExpressionAttributeValues,
          ReturnValues: 'ALL_NEW',
        };

        return params;
      },
    };

    const { input, operation } = toFormat;
    const operationStrategy = operations[operation];

    this.params = operationStrategy(input);
    console.log(
      'MARTIN_LOG=> formatDynamoParams this.params',
      JSON.stringify(this.params)
    );
  };
}
