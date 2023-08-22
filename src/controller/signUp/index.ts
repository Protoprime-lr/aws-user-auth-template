import controllerCommonDeps from '../common/controllerCommonDeps';
import signUpControllerInstance from './signUpController';
import ResponseEntity from '../../entities/Response/index';
import getUserByKeyAdapter from '../../adapters/getUserByKeyAdapter/index';
import createUserDomain from '../../domain/createUserDomain/index';

const signUpController = signUpControllerInstance({
  ...controllerCommonDeps,
  createUserDomain,
  getUserByKeyAdapter,
  ResponseEntity,
});

export default signUpController;
