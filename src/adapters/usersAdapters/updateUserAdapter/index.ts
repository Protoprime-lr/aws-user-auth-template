import adapterCommonDeps from '../../common/adapterCommonDeps';
import updateUserAdapterInstance from './updateUserAdapter';
import { updateItemTableInfra } from '../../../infrastructure/tableInfra/index';
import UserEntity from '../../../entities/userEntity/index';

const updateUserAdapter = updateUserAdapterInstance({
  ...adapterCommonDeps,
  updateItemTableInfra,
  UserEntity,
  UsersTableName: process.env.USERS_TABLE ?? '',
});

export default updateUserAdapter;
