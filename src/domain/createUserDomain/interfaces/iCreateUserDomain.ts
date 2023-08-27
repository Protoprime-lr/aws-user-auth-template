import createUserAdapter from '../../../adapters/createUserAdapter';
import getUserByKeyAdapter from '../../../adapters/getUserByKeyAdapter';
import { iUserItem } from '../../../common/interfaces/IUser';
import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import encryptPassword from '../helpers/encryptPassword';

export interface iCreateUserDomainInput {
  payload: iUserItem;
}
export interface iCreateUserDomainDeps extends iCommonDependencies {
  createUserAdapter: typeof createUserAdapter;
  getUserByKeyAdapter: typeof getUserByKeyAdapter;
  encryptPassword: typeof encryptPassword;
}
