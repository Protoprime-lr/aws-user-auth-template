import controllerCommonDeps from '../common/controllerCommonDeps';
import verifyEmailDomain from '../../domain/verifyEmailDomain/index';
import verifyEmailControllerInstance from './verifyEmailController';
import ResponseEntity from '../../entities/Response/index';

const verifyEmailController = verifyEmailControllerInstance({
  ...controllerCommonDeps,
  verifyEmailDomain,
  ResponseEntity,
});

export default verifyEmailController;
