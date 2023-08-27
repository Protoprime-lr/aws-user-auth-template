import isValidLayer from './helpers/isValidLayer';
import { iCustomError, iErrorHandlerDeps } from './interfaces/iErrorHandler';

const errorHandlerInstance =
  (dependencies: iErrorHandlerDeps) => (input: iCustomError) => {
    const { ExternalErrorHandler, layerFiller, logger } = dependencies;
    const { code, status, name, payload, message, layer, error } = input;
    if (error instanceof ExternalErrorHandler) {
      return new ExternalErrorHandler(
        message?.message ?? message?.details ?? message?.detail ?? message,
        {
          code: code,
          layer: isValidLayer(error?.layer)
            ? error.layer
            : layer.replace(layerFiller, code),
          status,
        },
        name
      );
    }

    if (payload) {
      logger.debug({ payload_before_error: payload });
    }
    logger.info({
      message: 'CUSTOM_ERROR_MESSAGE',
      error_output: error ?? {
        message:
          message?.message ?? message?.details ?? message?.detail ?? message,
        code: code,
        layer: layer.replace(layerFiller, code),
        status,
        error_name: name,
      },
    });

    return new ExternalErrorHandler(
      message?.message ?? message?.details ?? message?.detail ?? message,
      {
        code: code,
        layer: layer.replace(layerFiller, code),
        status,
      },
      name
    );
  };

export default errorHandlerInstance;
