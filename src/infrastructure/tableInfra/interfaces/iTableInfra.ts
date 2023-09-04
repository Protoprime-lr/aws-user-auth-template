import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import TableInstance from '../../../common/utils/builders/TableInstance';

export interface iTableDeps extends iCommonDependencies {
  TableInstance: typeof TableInstance;
}

export interface iQueryTableInput {
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

export interface iCreateItemTableInput {
  schema: any;
  tableName: any;
  payload: any;
}

export interface iUpdateItemTableInput {
  schema: any;
  tableName: any;
  params: {
    pk: string;
    sk: string;
  };
  payload: any;
}

export interface iDeleteItemTableInput {
  schema: any;
  tableName: any;
  params: {
    pk: string;
    sk: string;
  };
}
