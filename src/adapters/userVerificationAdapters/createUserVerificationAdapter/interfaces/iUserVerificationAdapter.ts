import { iCommonDependencies } from '../../../../common/interfaces/iCommonDeps';
import { createItemTableInfra } from '../../../../infrastructure/tableInfra';
import UserVerification from '../../../../entities/userVerification';

export interface iCreateUserVerificationAdapterInput {
  email: string;
}

export interface iCreateUserVerificationAdapterDeps
  extends iCommonDependencies {
  createItemTableInfra: typeof createItemTableInfra;
  UserVerification: typeof UserVerification;
  UsersCacheTableName: string;
}
