import controllerCommonDeps from '../common/controllerCommonDeps';
import signUpControllerInstance from './signUpController';
import ResponseEntity from '../../entities/Response/index';
import getUserByKeyAdapter from '../../adapters/getUserByKeyAdapter/index';
import createUserDomain from '../../domain/createUserDomain/index';
import sendVerifyEmailDomain from '../../domain/sendVerifyEmailDomain/index';

const signUpController = signUpControllerInstance({
  ...controllerCommonDeps,
  createUserDomain,
  getUserByKeyAdapter,
  sendVerifyEmailDomain,
  ResponseEntity,
});

export default signUpController;
