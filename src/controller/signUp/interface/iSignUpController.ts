import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import getUserByKeyAdapter from '../../../adapters/usersAdapters/getUserByKeyAdapter/index';
import iControllerCommonInput from '../../../common/interfaces/ICommandOutput';
import ResponseEntity from '../../../entities/Response/index';
import createUserDomain from '../../../domain/createUserDomain/index';
import sendVerifyEmailDomain from '../../../domain/sendVerifyEmailDomain/index';

export interface iSignUpControllerDeps extends iCommonDependencies {
  createUserDomain: typeof createUserDomain;
  getUserByKeyAdapter: typeof getUserByKeyAdapter;
  sendVerifyEmailDomain: typeof sendVerifyEmailDomain;
  ResponseEntity: typeof ResponseEntity;
}

export type iSignUpControllerInput = iControllerCommonInput;
