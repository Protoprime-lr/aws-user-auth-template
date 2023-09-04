import { iCommonDependencies } from '../../../../common/interfaces/iCommonDeps';
import { queryItemTableInfra } from '../../../../infrastructure/tableInfra';
import UserVerification from '../../../../entities/userVerification';
import UsersCacheTableIndexes from '../../../../common/enums/UsersCacheTableIndexes';

export interface iGetUserVerificationAdapterInput {
  pk?: string;
  sk?: string;
  id?: string;
  verification_code?: string;
}

export interface iGetUserVerificationAdapterDeps extends iCommonDependencies {
  queryItemTableInfra: typeof queryItemTableInfra;
  UserVerification: typeof UserVerification;
  UsersCacheTableName: string;
  UsersCacheTableIndexes: typeof UsersCacheTableIndexes;
}
