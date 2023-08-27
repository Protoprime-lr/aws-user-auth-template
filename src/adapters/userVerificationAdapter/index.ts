import adapterCommonDeps from '../common/adapterCommonDeps';
import userVerificationAdapterInstance from './userVerificationAdapter';
import { createItemTableInfra } from '../../infrastructure/tableInfra/index';
import UserVerification from '../../entities/userVerification';

const userVerificationAdapter = userVerificationAdapterInstance({
  ...adapterCommonDeps,
  createItemTableInfra,
  UserVerification,
});

export default userVerificationAdapter;
