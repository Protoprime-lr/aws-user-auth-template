import adapterCommonDeps from '../../common/adapterCommonDeps';
import updateUserVerificationAdapterInstance from './updateUserVerificationAdapter';
import { updateItemTableInfra } from '../../../infrastructure/tableInfra/index';
import UserVerification from '../../../entities/userVerification/index';

const updateUserVerificationAdapter = updateUserVerificationAdapterInstance({
  ...adapterCommonDeps,
  updateItemTableInfra,
  UserVerification,
});

export default updateUserVerificationAdapter;
