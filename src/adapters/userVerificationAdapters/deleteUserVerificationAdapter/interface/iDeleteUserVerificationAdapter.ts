import { iCommonDependencies } from '../../../../common/interfaces/iCommonDeps';
import { deleteItemTableInfra } from '../../../../infrastructure/tableInfra';
import UserVerification from '../../../../entities/userVerification';

export interface iDeleteUserVerificationAdapterInput {
  pk: string;
  sk: string;
}

export interface iDeleteUserVerificationAdapterDeps
  extends iCommonDependencies {
  deleteItemTableInfra: typeof deleteItemTableInfra;
  UserVerification: typeof UserVerification;
  UsersCacheTableName: string;
}
