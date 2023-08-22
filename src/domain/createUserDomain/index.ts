import createUserDomainInstance from './createUserDomain';
import createUserAdapter from '../../adapters/createUserAdapter';
import domainCommonDeps from '../common/domainCommonDeps';
import encryptPassword from './helpers/encryptPassword';
import getUserByKeyAdapter from '../../adapters/getUserByKeyAdapter/index';

const createUserDomain = createUserDomainInstance({
  ...domainCommonDeps,
  createUserAdapter,
  getUserByKeyAdapter,
  encryptPassword,
});

export default createUserDomain;
