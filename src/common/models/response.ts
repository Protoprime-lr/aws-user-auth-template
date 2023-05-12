import { ErrorHandled } from 'rebased/util/error';
import logger from 'rebased/_helper/logger';
import { StatusCodes } from 'http-status-codes';

interface IResponseBody {
  code: string;
  details?: any;
}

export interface IResponse {
  status: number;
  body: IResponseBody | any;
}

interface IInput {
  status: StatusCodes;
  code?: string;
  message?: any;
}

export default class ResponseModel {
  private body: IResponseBody;

  private status: number;

  /**
   * ResponseModel Constructor
   * @param status
   * @param code
   * @param details
   */
  constructor(input: IInput) {
    this.status = input.status ?? StatusCodes.OK;
    this.body = input.message;

    if (input.code) {
      this.body.code = input.code;
    }
  }

  static error(input: IInput): IResponse {
    const response = new ResponseModel(input);
    // eslint-disable-next-line no-new
    new ErrorHandled(
      { details: input.message, code: input.code },
      {
        status: input.status,
        code: input.code,
      }
    );
    return response.generate();
  }

  static success(status: number, details: any): IResponse {
    const response = new ResponseModel({ status, message: details });
    logger.info(JSON.stringify({ status, details }));
    return response.generate();
  }

  /**
   * Geneate a response
   * @return {IResponse}
   */
  generate = (): IResponse => ({
    status: this.status,
    body: this.body,
  });
}
