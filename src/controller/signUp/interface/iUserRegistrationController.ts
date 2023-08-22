import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import getUserByKeyAdapter from '../../../adapters/getUserByKeyAdapter/index';
import iControllerCommonInput from '../../../common/interfaces/ICommandOutput';
import ResponseEntity from '../../../entities/Response/index';
import createUserDomain from '../../../domain/createUserDomain/index';

export interface iUserRegistrationControllerDeps extends iCommonDependencies {
  createUserDomain: typeof createUserDomain;
  getUserByKeyAdapter: typeof getUserByKeyAdapter;
  ResponseEntity: typeof ResponseEntity;
}

export type iUserRegistrationControllerInput = iControllerCommonInput;
