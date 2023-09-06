import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import sendEmailAdapter from '../../../adapters/sendEmailAdapter/index';
import createUserVerificationAdapter from '../../../adapters/userVerificationAdapters/createUserVerificationAdapter';

export interface iSendVerifyEmailDomainInput {
  email: string;
}
export interface iSendVerifyEmailDomainDeps extends iCommonDependencies {
  sendEmailAdapter: typeof sendEmailAdapter;
  createUserVerificationAdapter: typeof createUserVerificationAdapter;
}
