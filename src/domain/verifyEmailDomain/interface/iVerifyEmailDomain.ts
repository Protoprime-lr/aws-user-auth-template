import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import getUserVerificationAdapter from '../../../adapters/userVerificationAdapters/getUserVerificationAdapter/index';
import getUserByKeyAdapter from '../../../adapters/usersAdapters/getUserByKeyAdapter/index';
import updateUserAdapter from '../../../adapters/usersAdapters/updateUserAdapter/index';

export interface iVerifyEmailDomainDeps extends iCommonDependencies {
  getUserVerificationAdapter: typeof getUserVerificationAdapter;
  getUserByKeyAdapter: typeof getUserByKeyAdapter;
  updateUserAdapter: typeof updateUserAdapter;
}

export interface iVerifyEmailDomainInput {
  verificationId: string;
  verificationCode: string;
}
