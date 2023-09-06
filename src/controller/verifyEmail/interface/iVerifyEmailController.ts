import iControllerCommonInput from '../../../common/interfaces/ICommandOutput';
import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import verifyEmailDomain from '../../../domain/verifyEmailDomain/index';
import ResponseEntity from '../../../entities/Response';

export type iVerifyEmailControllerInput = iControllerCommonInput;

export interface iVerifyEmailControllerDeps extends iCommonDependencies {
  verifyEmailDomain: typeof verifyEmailDomain;
  ResponseEntity: typeof ResponseEntity;
}
