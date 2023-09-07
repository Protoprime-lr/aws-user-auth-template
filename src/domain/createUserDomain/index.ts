import createUserDomainInstance from './createUserDomain';
import createUserAdapter from '../../adapters/usersAdapters/createUserAdapter';
import domainCommonDeps from '../common/domainCommonDeps';
import encryptPassword from './helpers/encryptPassword';
import getUserByKeyAdapter from '../../adapters/usersAdapters/getUserByKeyAdapter/index';
import sendVerificationEmailAdapter from '../../adapters/sendEmailAdapter/index';

const createUserDomain = createUserDomainInstance({
  ...domainCommonDeps,
  createUserAdapter,
  getUserByKeyAdapter,
  encryptPassword,
  sendVerificationEmailAdapter,
});

export default createUserDomain;
