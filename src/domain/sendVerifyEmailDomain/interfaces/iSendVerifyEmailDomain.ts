import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import sendEmailAdapter from '../../../adapters/sendEmailAdapter/index';
import userVerificationAdapter from '../../../adapters/userVerificationAdapter/index';

export interface iSendVerifyEmailDomainInput {
  email: string;
}
export interface iSendVerifyEmailDomainDeps extends iCommonDependencies {
  sendEmailAdapter: typeof sendEmailAdapter;
  userVerificationAdapter: typeof userVerificationAdapter;
}
