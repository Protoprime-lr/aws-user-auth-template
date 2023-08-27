import { StatusCodes } from 'http-status-codes';
import logger from 'rebased/_helper/logger';
import { ERROR_CODES } from './enums/errorCodes';
import { ERROR_MESSAGES } from './enums/errorMessages';
import ErrorHandler from './utils/ErrorHandler';
import ErrorNames from './enums/errorNames.enum';
import throwTestError from './utils/throwTestError';
import { iCommonDependencies } from './interfaces/iCommonDeps';
import { errorLayers } from './constants/errorLayers';

const commonDeps: iCommonDependencies = {
  ErrorHandler,
  ErrorCodes: ERROR_CODES,
  ErrorMessages: ERROR_MESSAGES,
  ErrorLayer: errorLayers.DEFAULT,
  DefaultErrorName: ErrorNames.FAULT_INFRASTRUCTURE,
  statusCodes: StatusCodes,
  logger,
  throwTestError,
};

export default commonDeps;
