import adapterCommonDeps from '../../common/adapterCommonDeps';
import deleteUserVerificationAdapterInstance from './updateUserVerificationAdapter';
import { updateItemTableInfra } from '../../../infrastructure/tableInfra/index';
import UserVerification from '../../../entities/userVerification/index';

const deleteUserVerificationAdapter = deleteUserVerificationAdapterInstance({
  ...adapterCommonDeps,
  updateItemTableInfra,
  UserVerification,
});

export default deleteUserVerificationAdapter;
