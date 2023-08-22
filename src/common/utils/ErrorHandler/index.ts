import { ErrorHandled } from 'rebased/util/error';
import logger from 'rebased/_helper/logger';
import errorHandler from './errorHandler';
import { errorLayers, layerFiller } from '../../constants/errorLayers';
import isValidLayer from './helpers/isValidLayer';

const ErrorHandler = errorHandler({
  ExternalErrorHandler: ErrorHandled,
  logger,
  ErrorLayers: errorLayers,
  layerFiller,
  isValidLayer,
});

export default ErrorHandler;
