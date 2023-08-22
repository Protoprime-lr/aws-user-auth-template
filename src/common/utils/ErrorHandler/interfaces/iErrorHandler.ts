import { ErrorHandled } from 'rebased/util/error';
import { errorLayers, layerFiller } from '../../../constants/errorLayers';
import isValidLayer from '../helpers/isValidLayer';

export interface iErrorHandlerDeps {
  ExternalErrorHandler: typeof ErrorHandled;
  layerFiller: typeof layerFiller;
  ErrorLayers: typeof errorLayers;
  isValidLayer: typeof isValidLayer;
  logger: {
    debug: (x: any) => {};
    info: (x: any) => {};
    warn: (x: any) => {};
    error: (x: any) => {};
  };
}

export interface iCustomError {
  message: any;
  code: string;
  layer: string;
  status: number;
  payload?: any;
  name?: string;
  error?: any;
}
