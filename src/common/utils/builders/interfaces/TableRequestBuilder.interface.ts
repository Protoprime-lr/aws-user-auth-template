/* eslint-disable @typescript-eslint/no-explicit-any */
import OPERATIONS from '../../enums/dynamoOperationsEnum';

export interface IFormatParamsItem {
  payload: any;
  condition?: string;
  key?: string;
}
export interface IFormatParams {
  operation: OPERATIONS;
  input: IFormatParamsItem;
}

export interface ITableBuilder {
  tableName?: string;
  params: any;
}

export interface IGetItem {
  id: string;
  role?: string;
}

export interface IQueryParams {
  IndexName?: string;
  KeyConditionExpression: string;
  ExpressionAttributeValues: any;
  ExpressionAttributeNames?: any;
  FilterExpression?: string;
}
