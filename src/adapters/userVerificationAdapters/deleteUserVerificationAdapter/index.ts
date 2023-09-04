import adapterCommonDeps from '../../common/adapterCommonDeps';
import deleteUserVerificationAdapterInstance from './deleteUserVerificationAdapter';
import { deleteItemTableInfra } from '../../../infrastructure/tableInfra/index';
import UserVerification from '../../../entities/userVerification/index';

const deleteUserVerificationAdapter = deleteUserVerificationAdapterInstance({
  ...adapterCommonDeps,
  deleteItemTableInfra,
  UserVerification,
  UsersCacheTableName: process.env.USERS_CACHE_TABLE ?? '',
});

export default deleteUserVerificationAdapter;
