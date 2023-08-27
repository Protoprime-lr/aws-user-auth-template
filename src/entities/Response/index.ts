import logger from 'rebased/_helper/logger';
import ResponseObj from './Response';
import ErrorHandler from '../../common/utils/ErrorHandler/index';

const ResponseEntity = ResponseObj({
  ErrorHandler,
  logger,
});

export default ResponseEntity;
