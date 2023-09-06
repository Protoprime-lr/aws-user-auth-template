import domainCommonDeps from '../common/domainCommonDeps';
import sendEmailAdapter from '../../adapters/sendEmailAdapter/index';
import sendVerifyEmailDomainInstance from './sendVerifyEmailDomain';
import createUserVerificationAdapter from '../../adapters/userVerificationAdapters/createUserVerificationAdapter';

const sendVerifyEmailDomain = sendVerifyEmailDomainInstance({
  ...domainCommonDeps,
  sendEmailAdapter,
  createUserVerificationAdapter,
});

export default sendVerifyEmailDomain;
