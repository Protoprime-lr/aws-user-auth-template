/* eslint-disable no-console */
import dynamo from 'rebased/service/storage/dynamo';
import { ErrorHandled } from 'rebased/util/error';
import OPERATIONS from '../enums/dynamoOperationsEnum';
import { StatusCodes } from '../enums/responseStatus';

import {
  IFormatParams,
  IFormatParamsItem,
  IQueryParams,
  ITableBuilder,
} from './interfaces/TableRequestBuilder.interface';

export default class TableRequestBuilder implements ITableBuilder {
  tableName?: string;

  params: any;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  queryItems = async (params: IQueryParams): Promise<any> => {
    const finalParams = {
      ...params,
      ScanIndexForward: false,
      TableName: this.tableName,
    };

    return dynamo.queryTable(finalParams);
  };

  getItem = async (payload: any): Promise<any> => {
    this.formatDynamoParams({ input: { payload }, operation: OPERATIONS.GET });
    return dynamo.getItem(this.params);
  };

  createItem = async (payload: any, condition?: string) => {
    this.formatDynamoParams({
      input: { payload, condition },
      operation: OPERATIONS.PUT,
    });
    return dynamo.putItem(this.params);
  };

  updateItem = async (payload: any) => {
    this.formatDynamoParams({ input: payload, operation: OPERATIONS.UPDATE });

    return dynamo.updateItem(this.params);
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
  };
}
