import domainCommonDeps from '../common/domainCommonDeps';
import sendEmailAdapter from '../../adapters/sendEmailAdapter/index';
import sendVerifyEmailDomainInstance from './sendVerifyEmailDomain';
import userVerificationAdapter from '../../adapters/userVerificationAdapter/index';

const sendVerifyEmailDomain = sendVerifyEmailDomainInstance({
  ...domainCommonDeps,
  sendEmailAdapter,
  userVerificationAdapter,
});

export default sendVerifyEmailDomain;
