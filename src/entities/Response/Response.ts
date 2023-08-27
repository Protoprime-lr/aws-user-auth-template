import {
  IResponseInput,
  IResponseBody,
  IResponse,
  iResponseDeps,
} from './interface/iResponse';

const ResponseObj = (dependencies: iResponseDeps) => {
  const { logger } = dependencies;

  return class ResponseModel {
    private body: IResponseBody;

    private status: number;

    constructor(input: IResponseInput) {
      this.status = input.status;
      this.body = input.details;
      if (input?.code) {
        this.body.code = input.code;
      }
    }

    static error(status: number, code: string, details: any): IResponse {
      const response = new ResponseModel({ status, code, details });
      return response.generate();
    }

    static success(status: number, details: any): IResponse {
      const response = new ResponseModel({ status, details });
      logger.info(JSON.stringify({ status, details }));
      return response.generate();
    }

    /**
     * Geneate a response
     * @return {IResponse}
     */
    generate = (): IResponse => {
      return {
        status: this.status,
        body: this.body,
      };
    };
  };
};

export default ResponseObj;
