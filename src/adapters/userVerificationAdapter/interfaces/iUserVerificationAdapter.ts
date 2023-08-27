import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import { createItemTableInfra } from '../../../infrastructure/tableInfra';
import UserVerification from '../../../entities/userVerification';

export interface iUserVerificationAdapterInput {
  email: string;
}

export interface iUserVerificationAdapterDeps extends iCommonDependencies {
  createItemTableInfra: typeof createItemTableInfra;
  UserVerification: typeof UserVerification;
}
