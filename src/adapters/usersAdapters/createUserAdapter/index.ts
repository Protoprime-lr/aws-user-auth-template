import adapterCommonDeps from '../../common/adapterCommonDeps';
import createUserAdapterInstance from './createUser';
import { createItemTableInfra } from '../../../infrastructure/tableInfra/index';
import UserEntity from '../../../entities/userEntity/index';

const createUserAdapter = createUserAdapterInstance({
  ...adapterCommonDeps,
  createUserInfra: createItemTableInfra,
  UserEntity,
  UsersTableName: process.env.USERS_TABLE ?? '',
});

export default createUserAdapter;
