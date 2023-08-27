import { StatusCodes } from 'http-status-codes';
import ErrorNames from '../enums/errorNames.enum';
import throwTestError from '../utils/throwTestError';
import ErrorHandler from '../utils/ErrorHandler';
import { ERROR_CODES } from '../enums/errorCodes';
import { ERROR_MESSAGES } from '../enums/errorMessages';

export interface iCommonDependencies {
  throwTestError: typeof throwTestError;
  ErrorHandler: typeof ErrorHandler;
  ErrorCodes: typeof ERROR_CODES;
  ErrorMessages: typeof ERROR_MESSAGES;
  ErrorLayer: string;
  logger: {
    debug: (x: any) => {};
    info: (x: any) => {};
    warn: (x: any) => {};
    error: (x: any) => {};
  };
  DefaultErrorName: ErrorNames;
  statusCodes: typeof StatusCodes;
}
