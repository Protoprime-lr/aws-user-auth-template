import domainCommonDeps from '../common/domainCommonDeps';
import verifyEmailDomainInstance from './verifyEmailDomain';
import getUserByKeyAdapter from '../../adapters/usersAdapters/getUserByKeyAdapter/index';
import getUserVerificationAdapter from '../../adapters/userVerificationAdapters/getUserVerificationAdapter/index';
import updateUserAdapter from '../../adapters/usersAdapters/updateUserAdapter/index';

const verifyEmailDomain = verifyEmailDomainInstance({
  ...domainCommonDeps,
  getUserByKeyAdapter,
  getUserVerificationAdapter,
  updateUserAdapter,
});

export default verifyEmailDomain;
