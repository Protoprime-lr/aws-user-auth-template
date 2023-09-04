import adapterCommonDeps from '../../common/adapterCommonDeps';
import createUserVerificationAdapterInstance from './userVerificationAdapter';
import { createItemTableInfra } from '../../../infrastructure/tableInfra/index';
import UserVerification from '../../../entities/userVerification';

const createUserVerificationAdapter = createUserVerificationAdapterInstance({
  ...adapterCommonDeps,
  createItemTableInfra,
  UserVerification,
  UsersCacheTableName: process.env.USERS_CACHE_TABLE ?? '',
});

export default createUserVerificationAdapter;
