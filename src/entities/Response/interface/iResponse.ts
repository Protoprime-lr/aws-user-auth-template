import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import ErrorHandler from '../../../common/utils/ErrorHandler/index';

export interface iResponseDeps {
  ErrorHandler: typeof ErrorHandler;
  logger: {
    debug: (x: any) => {};
    info: (x: any) => {};
    warn: (x: any) => {};
    error: (x: any) => {};
  };
}

export interface IResponseBody {
  code: StatusCodes | string;
  details?: any;
}

export interface IResponse {
  status: number;
  body: IResponseBody | any;
}

export interface IResponseInput {
  status: StatusCodes | number;
  code?: ReasonPhrases | string;
  details?: any;
}
