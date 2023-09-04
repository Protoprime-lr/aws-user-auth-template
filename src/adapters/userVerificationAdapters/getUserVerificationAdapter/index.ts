import adapterCommonDeps from '../../common/adapterCommonDeps';
import getUserVerificationAdapterInstance from './getUserVerificationAdapter';
import { queryItemTableInfra } from '../../../infrastructure/tableInfra/index';
import UserVerification from '../../../entities/userVerification/index';
import UsersCacheTableIndexes from '../../../common/enums/UsersCacheTableIndexes';

const deleteUserVerificationAdapter = getUserVerificationAdapterInstance({
  ...adapterCommonDeps,
  queryItemTableInfra,
  UserVerification,
  UsersCacheTableName: process.env.USERS_CACHE_TABLE ?? '',
  UsersCacheTableIndexes,
});

export default deleteUserVerificationAdapter;
