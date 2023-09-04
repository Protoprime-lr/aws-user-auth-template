import createUserDomainInstance from './createUserDomain';
import createUserAdapter from '../../adapters/usersAdapters/createUserAdapter';
import domainCommonDeps from '../common/domainCommonDeps';
import encryptPassword from './helpers/encryptPassword';
import getUserByKeyAdapter from '../../adapters/usersAdapters/getUserByKeyAdapter/index';

const createUserDomain = createUserDomainInstance({
  ...domainCommonDeps,
  createUserAdapter,
  getUserByKeyAdapter,
  encryptPassword,
});

export default createUserDomain;
