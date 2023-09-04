import { iCommonDependencies } from '../../../../common/interfaces/iCommonDeps';
import { updateItemTableInfra } from '../../../../infrastructure/tableInfra';
import UserVerification from '../../../../entities/userVerification';

export interface iUpdateUserVerificationAdapterInput {
  pk: string;
  sk: string;
  payload: any;
}

export interface iUpdateUserVerificationAdapterDeps
  extends iCommonDependencies {
  updateItemTableInfra: typeof updateItemTableInfra;
  UserVerification: typeof UserVerification;
}
