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
  schema: any;
  tableName: any;
  params: {
    query: {
      [key: string]: {
        and?: any;
        or?: any;
        not?: any;
        parenthesis?: any;
        group?: any;
        filter?: any;
        where?: any;
        attribute?: any;
        eq?: any;
        exists?: any;
        lt?: any;
        le?: any;
        gt?: any;
        ge?: any;
        beginsWith?: any;
        contains?: any;
        in?: any;
        between?: any;
      };
    };
    options?: {
      using_index?: string;
    };
  };
}
